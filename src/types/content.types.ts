// A service page's copy, co-located as the `content` object in its route page.tsx.
// Inline strings keep their markdown (**bold**, [placeholder], (link: /url)) and are
// rendered by components/content/Inline.

export type Block =
  | { type: "p"; text: string }
  | { type: "subhead"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "h3"; title: string; text: string; link?: string }
  | { type: "faq"; q: string; a: string }
  | { type: "group"; name: string; places: string; text: string };

export type SectionKind = "pain" | "turning" | "solution" | "benefits" | "proof" | "faq" | "close";

export type Section = {
  kind: SectionKind;
  heading?: string;
  blocks: Block[];
  bridge?: string;
  buttons?: CtaButton[];
};

export type CtaButton = { label: string; href?: string; kind: "call" | "link" | "form" };

export type Hero = {
  eyebrow?: string;
  h1: string;
  sub?: string;
  buttons: CtaButton[];
  trust: string[];
  line247?: string;
  bridge?: string;
};

export type ServiceCategory = "mold" | "roof" | "hvac" | "general";

export type StoryPageContent = {
  url: string;
  slug: string;
  category: ServiceCategory;
  hero: Hero;
  sections: Section[];
  formButton?: string;
};
