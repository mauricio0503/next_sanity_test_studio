import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'intentPage',
  title: 'Intent Page',
  type: 'document',

  groups: [
    {name: 'hero', title: 'Hero Section', default: true},
    {name: 'pageBuilder', title: 'Page Content'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    defineField({
      name: 'states',
      title: 'States in the US',
      type: 'array',
      of: [
        {name: 'state', title: 'State', type: 'string'},
      ],
      group: 'hero',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'reference',
      to: [{type: 'heroSection'}],
      group: 'hero',
    }),
    defineField({
      name: 'trustSection',
      title: 'Trust Section',
      type: 'reference',
      to: [{type: 'trustSection'}],
      group: 'hero',
    }),
    defineField({
      name: 'brandSection',
      title: 'Brand Section',
      type: 'reference',
      to: [{type: 'brandSection'}],
      group: 'hero',
    }),
    defineField({
      name: 'mobileExperienceTableSection',
      title: 'Mobile Experince Table Section',
      type: 'reference',
      to: [{type: 'mobileExperienceTableSection'}],
      group: 'hero',
    }),
  ],
  preview: {
    select: {
      title: 'heroSection.heroTitle',
    },
  },
})
