import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'countryHomepage',
  title: 'Country Home Page',
  type: 'document',
  fields: [
    // Section 1: Main Hero Card
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      description: 'e.g., "Updated July 2025..."',
      type: 'string',
    }),
    defineField({
      name: 'mainReviewer',
      title: 'Main Reviewer',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'title', title: 'Title', type: 'string', initialValue: 'Gambling Analyst' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'heroCtas',
      title: 'Hero Call-to-Action Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Button Text', type: 'string' },
          { name: 'url', title: 'Button URL', type: 'url' },
          { name: 'variant', title: 'Variant', type: 'string', options: { list: ['primary', 'outline'] }, initialValue: 'primary' }
        ]
      }]
    }),
    defineField({
      name: 'complianceLogos',
      title: 'Compliance Logos',
      type: 'array',
      of: [{ type: 'image' }],
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

    // Section 2: Why Trust Us
    defineField({
      name: 'trustSectionTitle',
      title: 'Trust Section Title',
      type: 'string',
      initialValue: 'Why Trust CasinoTop?',
    }),
    defineField({
      name: 'trustSectionDescription',
      title: 'Trust Section Description',
      type: 'text',
    }),
    defineField({
      name: 'trustPoints',
      title: 'Trust Points',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon (will be colorized)', type: 'image' },
          { name: 'iconBgColor', title: 'Icon Background Color', type: 'string', description: 'e.g., bg-green-100' },
          { name: 'text', title: 'Text', type: 'string' },
          { name: 'hasLink', title: 'Show Link Arrow?', type: 'boolean', initialValue: false },
        ]
      }]
    }),
    defineField({
      name: 'pageFooterInfo',
      title: 'Page Footer Info',
      type: 'object',
      fields: [
        {
          name: 'reviewedBy',
          title: 'Reviewed By',
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ]
        },
        { name: 'lastUpdated', title: 'Last Updated Text', type: 'string', description: 'e.g., Updated June 2025' }
      ]
    })
  ],
})
