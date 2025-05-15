export const SITECONFIG = {
  siteMetadata: {
    title: "",
    description: "",
  },
  siteLogo: { url: "" },
  mainNav: [
    { title: "Home", slug: "/" },
    { title: "About Us", slug: "/about" },
    { title: "Services", slug: "/services" },
    { title: "Case Studies", slug: "/case-studies" },
    { title: "Blog", slug: "/blog" },
  ],

  footer: {
    footer_logo: "",
    description: "",
    resources: [
      {
        title: "About Us",
        slug: "/about",
      },
      {
        title: "Services",
        slug: "/", // <- Add this slug
      },
      {
        title: "Testimonials",
        slug: "/testimonials", // <- Add this slug
      },
      {
        title: "Locations",
        slug: "/location", // <- Adjusted to match 'Blogs' plural
      },
      {
        title: "Blogs",
        slug: "/blog", // <- Adjusted to match 'Blogs' plural
      },
      {
        title: "Contact",
        slug: "/",
      },
      {
        title: "Disclaimers",
        slug: "/",
      },
      {
        title: "Privacy Policy",
        slug: "/",
      },
      {
        title: "Terms of Service",
        slug: "/",
      },
      {
        title: "Cookie Policy",
        slug: "/",
      },
    ],
  },
  socialLinks: [
    {
      title: "Facebook",
      url: "/",
    },
    {
      title: "Twitter",
      url: "/",
    },
    {
      title: "Instagram",
      url: "/",
    },
    {
      title: "LinkedIn",
      url: "/",
    },
  ],
};
