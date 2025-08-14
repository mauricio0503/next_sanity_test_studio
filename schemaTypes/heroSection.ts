import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      description: 'e.g., "Updated August 2025..."',
      type: 'string',
    }),
    defineField({
      name: 'mainReviewer',
      title: 'Main Reviewer',
      type: 'object',
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'title', title: 'Title', type: 'string', initialValue: 'Gambling Analyst'},
        {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'heroCtas',
      title: 'Hero Call-to-Action Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'text', title: 'Button Text', type: 'string'},
          {name: 'url', title: 'Button URL', type: 'url'},
          {name: 'variant', title: 'Variant', type: 'string', options: {list: ['primary', 'outline']}, initialValue: 'primary'},
        ],
      }],
    }),
    defineField({
      name: 'complianceLogos',
      title: 'Compliance Logos',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'heroMainImage',
      title: 'Hero Main Image (e.g., US Chip)',
      type: 'image',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image (e.g., Dot Map)',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
  },
})