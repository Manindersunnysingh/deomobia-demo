import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
export const links = [
  {
    text: "services",
    path: "#services",
  },

  {
    text: "blog",
    path: "/blog",
  },
];

export const adminUserLinks = [
  {
    text: "services",
    path: "#services",
  },

  {
    text: "blog",
    path: "/blog",
  },

  {
    text: "Contact User",
    path: "/dashboard/contact-user",
  },
  {
    text: "Download User",
    path: "/dashboard/download-user",
  },
];

export const resourceData = [
  {
    title: "Overview Template",
    description: "Golden rule - utilise this at the top of you CV immediately",
    image: "Overview-Guide-Demobia.pdf",
  },
  {
    title: "Pitch Template",
    description:
      "One page pitches are a common request - here’s how to do it well",
    image: "Pitch-Guide-Demobia.pdf",
  },
  {
    title: "Cover letter Template",
    description:
      "They are dying, with good reason, but follow these guidelines to stand out",
    image: "CoverLetter-Guide-Demobia.pdf",
  },
  {
    title: "Resume Template",
    description:
      "Discover the small details in CVs which let are letting people down",
    image: "Resume-Guide-Demobia.pdf",
  },
];

export const serviceCardData = [
  {
    title: "One-off coaching",
    popular: false,
    price: ["$299"],
    features: [
      "90-Minute Session",
      "Individual market insights session",
      "Personalised Plan",
      "Actionable career recommendations",
    ],
  },
  {
    title: "3 Month Coaching Package",
    popular: true,
    price: ["One to One: $2499/pp", "Group Session: $1499 - $1699"],
    features: [
      "All features of One-off Coaching",
      "Fortnightly Sessions",
      "6 x 45-minute tailored sessions",
      "3 Months of Support",
      "Dedicated support for the entire duration.",
    ],
  },
  {
    title: "6 Month Coaching Package",
    popular: false,
    price: ["One to One: $3499/pp", "Group Session: $1899 - $2199"],
    features: [
      "All features of One-off Coaching",
      "Fortnightly Sessions",
      "12 x 45-minute tailored sessions",
      "6 Months of Support",
      "Extended personal support for 6 months",
      "Money-Back Guarantee",
      "30-day satisfaction guarantee",
    ],
  },
];

export const socialIcons = [
  {
    id: 1,
    href: "https://www.facebook.com/Demobia/",
    icon: <FaFacebookSquare />,
  },
  { id: 2, href: "www.linkedin.com/company/demobia/", icon: <FaLinkedin /> },
];

export const locationData = {
  ACT: "Australian Capital Territory",
  NSW: "New South Wales",
  VIC: "Victoria",
  QLD: "Queensland",
  SA: "South Australia",
  TAS: "Tasmania",
  WA: "Western Australia",
  NT: "Northern Territory",
  Other: "Other (Specify)",
};

export const sourceOfReferralData = {
  online_search: "Online Search",
  social_media: "Social Media",
  advertisement: "Advertisement",
  emial_marketing: "Email Marketing",
  events: "Events",
  referral_from_friend: "Referral from a Friend",
  WA: "Western Australia",
  NT: "Northern Territory",
  Other: "Other (Specify)",
};

export const reviewData = [
  {
    id: 0,
    image: "user2",
    review:
      "Demobia's tech and recruitment experts delivered tailored career advice, aligning with my aspirations to become an ICT Project Manager. They crafted a clear action plan that paved the way plus provided ongoing support which was pivotal in actually implementing it. Thanks team!",
    name: "Madi Cook - IT Project Support Officer",
  },
  {
    id: 1,
    image: "user1",
    review:
      "I can't express enough how grateful I am to the team at Demobia for the incredible support and guidance they provided me on my journey to landing an IT job in Australia. ",
    name: "Laxmi Joshi - IT Support Engineer",
  },
  {
    id: 2,
    image: "user3",
    review:
      "Working with Demobia transformed my career. As an IT professional new to Australia, I struggled to find a fitting role because I didn’t understand how to navigate Canberra’s unique market. Demobia's strategic guidance helped me secure a job that not only matched my expertise but also offered great pay and the chance to lead a team.",
    name: "Maninder Singh -  Lead Front End Developer",
  },
  {
    id: 3,
    image: "user4",
    review:
      "Demobia understands my personal journey and their tenacity served as an inspiration to me. Their ability to harness  tech expertise and relate it to my situation was truly invaluable. They not only helped me find the right job but also provided insights into the Australian job market that I couldn't have gained elsewhere.",
    name: "Santosh Ranabhat - IT Support Engineer",
  },
];
