import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mobileExperienceTableSection',
  title: 'Mobile Experience Table Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'bookmark',
      title: 'Bookmark Url',
      type: 'string',
    }),
    defineField({
      name: 'mobileBrands',
      title: 'Mobile Brands',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'mobileBrand'}]}],
    }),
  ],
})
