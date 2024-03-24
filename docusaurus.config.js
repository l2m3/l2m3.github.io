/* eslint-disable @typescript-eslint/no-var-requires */
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "L2M3",
    tagline:
      "Large language models for materials, molecules and beyond",
    url: "https://l2m3.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "L2M3",
    projectName: "l2m3.github.io",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: "docs",
            sidebarPath: "sidebars.js",
            editUrl: "https://github.com/l2m3/l2m3.github.io/edit/main/",
            versions: {
              current: {
                label: "current",
              },
            },
            lastVersion: "current",
            showLastUpdateAuthor: false,
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    plugins: [
      ["docusaurus2-dotenv", {systemvars: true}],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: false,
          logo: {
            alt: "L2M3",
            src: "img/l2m3.jpg",
            srcDark: "img/l2m3.jpg",
          },
          items: [
            // left
            {
              label: "Workshop objectives",
              to: "docs/objectives",
              position: "left",
            },
            // {
            //   label: "Program",
            //   to: "docs/program",
            //   position: "left",
            // },
            {
              label: "Organizers",
              to: "docs/organizers",
              position: "left",
            },
            // {
            //   type: "dropdown",
            //   label: "Resources",
            //   position: "left",
            //   items: [
            //     {
            //       label: "Glossary",
            //       to: "docs/glossary",
            //     },
            //     {
            //       label: "Awesome list",
            //       to: "docs/awesome_interoperability",
            //     },
            //   ],
            // },
            //  {
            //    label: "Discussions",
            //    to: "https://github.com/MADICES/MADICES-2024/discussions",
            //    disabled: true,
            //    position: "left",
            //  },
             {
               label: "Registration",
               to: "https://www.cecam.org/workshop-details/l2m3-large-language-models-for-materials-molecules-and-beyond-1291",
               disabled: true,
               position: "left",
             },
          ],
        },
        colorMode: {
          defaultMode: "light",
          disableSwitch: false,
          respectPrefersColorScheme: false,
        },
        // announcementBar: {
        //   content:
        //     '⭐️ Register for free on the <a target="_blank" rel="noopener noreferrer" href="https://www.cecam.org/workshop-details/1165">CECAM website</a>! ⭐️',
        // },
        footer: {
          links: [
            {
              title: "Community",
              items: [
                {
                  label: "Code of Conduct",
                  to: "docs/coc",
                },
                {
                  label: "GitHub",
                  to: "https://github.com/l2m3",
                },
              ],
            },
            {
              title: "Contact",
              items: [{ label: "Email", to: "https://mailhide.io/e/o4LeOUlq" }],
            },
          ],
          logo: {
            alt: "L2M3",
            src: "img/l2m3.jpg",
            srcDark: "img/l2m3.jpg",
          },
          copyright: "L2M3 Organization Team",
        },
        image: "img/l2m3.jpg",
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
