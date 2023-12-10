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
      items: ['helper/text', 'helper/color', 'helper/spacing', 'helper/flex'],
    },
    {
      type: 'category',
      label: 'Elements',
      items: ['element/button', 'element/icon'],
    },
    {
      type: 'category',
      label: 'Form',
      items: [
        'form/input',
        'form/select',
        'form/textarea',
        'form/checkbox',
        'form/radio',
        'form/switch',
      ],
    },
  ],
}

export default sidebars
