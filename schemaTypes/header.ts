import { defineType, defineField } from 'sanity';
import { MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'header',
  title: 'Header Configuration',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Navigation Menu Items',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              description: 'Enter a URL or leave blank if it is a dropdown menu.',
              hidden: ({ parent }) => !!(parent?.dropdownItems && parent.dropdownItems.length > 0),
            }),
            defineField({
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              hidden: ({ parent }) => !!parent?.link,
              of: [
                {
                  name: 'subMenuItem',
                  title: 'Sub-Menu Item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'url',
                      validation: Rule => Rule.required().uri({ allowRelative: true }),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text', validation: Rule => Rule.required() },
        { name: 'link', type: 'url', title: 'Button Link', validation: Rule => Rule.required().uri({ allowRelative: true }) }
      ]
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [        
        {
          name: 'Language',
          title: 'Language',
          type: 'object',
          fields: [
            { name: 'country', type: 'string', title: 'Country', validation: Rule => Rule.required() },
            { name: 'flag', type: 'image', title: 'Flag', validation: Rule => Rule.required() }
          ]
        }
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Configuration'
      }
    }
  }
});
