import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trustSection',
  title: 'Trust Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Trust Section Title',
      type: 'string',
      initialValue: 'Why Trust Us?',
    }),
    defineField({
      name: 'description',
      title: 'Trust Section Description',
      type: 'text',
    }),
    defineField({
      name: 'bookmark',
      title: 'Bookmark Url',
      type: 'string',
    }),
    defineField({
      name: 'points',
      title: 'Trust Points',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'icon', title: 'Icon Image', type: 'image'},
          {name: 'iconBgColor', title: 'Icon Background Color Class', type: 'string', description: 'e.g., bg-green-100'},
          {name: 'text', title: 'Text', type: 'string'},
          {name: 'hasLink', title: 'Show Link Arrow?', type: 'boolean', initialValue: false},
        ],
      }],
    }),
    defineField({
      name: 'reviewer',
      title: 'Reviewer',
      type: 'object',
      fields: [
        {
          name: 'reviewedBy',
          title: 'Reviewed By',
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
          ],
        },
        {
          name: 'lastUpdated',
          title: 'Last Updated Text',
          type: 'string',
          description: 'e.g., Updated August 2025',
        },
      ],
    }),
  ],
})