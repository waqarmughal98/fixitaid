"use client";

import { Formik, Form, Field, ErrorMessage, type FieldProps } from "formik";
import { usePathname } from "next/navigation";
import { quickLeadSchema, contactLeadSchema } from "@/lib/validations/lead";
import { useSubmitLead } from "@/hooks/lead/useSubmitLead";
import { site } from "@/config/site";
import type { LeadFormValues } from "@/types/lead.types";

type Props = {
  id: string;
  title: string;
  intro?: React.ReactNode;
  options: string[];
  submitLabel: string;
  variant?: "bar" | "full";
  className?: string;
};

function Err({ name }: { name: string }) {
  return <ErrorMessage name={name}>{(msg) => <span className="err">{msg}</span>}</ErrorMessage>;
}

function TextField({ name, label, ...rest }: { name: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <label className={rest.className}>
          {label}
          <input
            {...field}
            {...rest}
            className={undefined}
            aria-invalid={meta.touched && !!meta.error}
            aria-describedby={meta.touched && meta.error ? `${rest.id}-err` : undefined}
          />
          <span id={`${rest.id}-err`}>
            <Err name={name} />
          </span>
        </label>
      )}
    </Field>
  );
}

export function LeadForm({ id, title, intro, options, submitLabel, variant = "bar", className }: Props) {
  const page = usePathname() ?? "/";
  const submit = useSubmitLead();
  const full = variant === "full";

  const initialValues: LeadFormValues = {
    name: "",
    phone: "",
    zip: "",
    service: full ? "" : options[0],
    details: "",
    company: "",
    ...(full ? { urgent: undefined } : {}),
  };

  return (
    <div className={full ? `formcard ${className ?? ""}` : `formbar ${className ?? ""}`} id={id}>
      <div className={full ? undefined : "fb-head"}>
        <h2>{title}</h2>
        {intro && <p className={full ? "soft" : undefined}>{intro}</p>}
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={full ? contactLeadSchema : quickLeadSchema}
        onSubmit={async (values) => {
          // Honeypot filled in: pretend it worked and drop it.
          if (values.company) return;
          await submit.mutateAsync({ ...values, page }).catch(() => undefined);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className={full ? "fields" : "fb-fields"} noValidate>
            <TextField name="name" label="Name" id={`${id}-name`} autoComplete="name" placeholder="Maria Lopez" />
            <TextField
              name="phone"
              label="Phone"
              id={`${id}-phone`}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(773) 555-0134"
            />

            <label className="wide">
              {full ? "Service" : "What's going on?"}
              <Field
                as="select"
                name="service"
                id={`${id}-service`}
                aria-invalid={touched.service && !!errors.service}
              >
                {full && <option value="">Choose one</option>}
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </Field>
              <Err name="service" />
            </label>

            <TextField
              name="zip"
              label="ZIP code"
              id={`${id}-zip`}
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder="60618"
            />

            {full && (
              <>
                <label className="full">
                  What&apos;s happening? <span className="soft">(optional)</span>
                  <Field
                    as="textarea"
                    name="details"
                    id={`${id}-details`}
                    placeholder="For example: water stain on the ceiling after the rain, or the furnace runs but blows cold air."
                  />
                </label>
                <fieldset className="full" style={{ border: 0, padding: 0, margin: 0 }}>
                  <legend style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Is this urgent?</legend>
                  <div className="radios" role="radiogroup">
                    <label>
                      <Field type="radio" name="urgent" value="yes" /> Yes
                    </label>
                    <label>
                      <Field type="radio" name="urgent" value="no" /> No
                    </label>
                  </div>
                  <Err name="urgent" />
                </fieldset>
              </>
            )}

            <div className="hp" aria-hidden="true">
              <label>
                Company
                <Field name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <button className={`btn gold${full ? " full" : ""}`} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : submitLabel}
            </button>
            {submit.isError && (
              <p className="err full wide" role="alert" style={{ gridColumn: "1/-1", margin: 0 }}>
                We couldn&apos;t send that. Please try again, or call{" "}
                <a href={site.phoneHref}>
                  <b>{site.phone}</b>
                </a>
                .
              </p>
            )}
          </Form>
        )}
      </Formik>

      <p className="formnote">
        We only use your details to answer this request. Rather talk?{" "}
        <a href={site.phoneHref}>
          <b>{site.phone}</b>
        </a>
      </p>
    </div>
  );
}
