import * as Yup from "yup";

const phoneDigits = (v?: string) => (v ?? "").replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");

const base = {
  name: Yup.string().trim().min(2, "Please enter your name").max(80).required("Please enter your name"),
  phone: Yup.string()
    .required("We need a number to call you back")
    .test("us-phone", "Enter a 10-digit phone number", (v) => phoneDigits(v).length === 10),
  zip: Yup.string()
    .trim()
    .required("Please enter your ZIP code")
    .matches(/^\d{5}$/, "Enter a 5-digit ZIP code"),
  service: Yup.string().required("Please pick one"),
  details: Yup.string().max(1500),
  company: Yup.string(),
};

/** The 4-field form in every hero. */
export const quickLeadSchema = Yup.object(base);

/** The longer form on /contact. */
export const contactLeadSchema = Yup.object({
  ...base,
  urgent: Yup.string().oneOf(["yes", "no"]).required("Please choose yes or no"),
});
