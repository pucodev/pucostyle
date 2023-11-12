// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Personalización',
      items: ['customize/color', 'customize/spacing', 'customize/text'],
    },
    {
      type: 'category',
      label: 'Helpers',
      items: ['helper/text'],
    },
  ],
}

export default sidebars
