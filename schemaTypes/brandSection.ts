import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brandSection',
  title: 'Brand Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bookmark',
      title: 'Bookmark Url',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'brands'}]},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})