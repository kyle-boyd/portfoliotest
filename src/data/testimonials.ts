export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "You have a knack for seeing to the core of a problem and addressing it head on. You've been an ally for the eng team!",
    name: "Jim",
    title: "Staff Software Engineer",
  },
  {
    quote: "You seamlessly flex from creative, big picture thinking to in-the-weeds logic",
    name: "Morgan",
    title: "Group Product Manager",
  },
  {
    quote: "I could not ask for a better design partner than Kyle. It is a joy to work with someone who supports his peers, but isn't afraid to challenge design solutions",
    name: "Sandhya",
    title: "Senior Product Designer",
  },
  {
    quote: "You have this amazing ability to take an exorbitant amount of information and magically produce totally streamlined solutions!",
    name: "Carly",
    title: "Product Manager",
  },
];
