import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'award',
      title: 'Award',
      type: 'object',
      fields: [
        {
          name: 'hasAward',
          title: 'Has Award',
          type: 'boolean',
        },
        {
          name: 'awardType',
          title: 'Award Type',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'score',
      title: 'Score',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'reviewer',
      title: 'Reviewer',
      type: 'string',
    }),
    defineField({
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
    }),
    defineField({
      name: 'verifiedDate',
      title: 'Verified Date',
      type: 'date',
    }),
    defineField({
      name: 'bonusUrl',
      title: 'Bonus URL',
      type: 'url',
    }),
    defineField({
      name: 'reviewUrl',
      title: 'Review URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})
