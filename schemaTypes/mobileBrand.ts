import {defineType} from 'sanity'

export const mobilePlatformInfo = {
  name: 'mobilePlatformInfo',
  title: 'Mobile Platform Info',
  type: 'object',
  fields: [
    {name: 'available', title: 'Available', type: 'boolean'},
    {name: 'rating', title: 'Rating', type: 'string'},
    {name: 'appSize', title: 'App Size', type: 'string'},
    {name: 'security', title: 'Security', type: 'string'},
    {name: 'bonus', title: 'Bonus', type: 'string'},
  ],
}

export const mobileBrowserInfo = {
  name: 'mobileBrowserInfo',
  title: 'Mobile Browser Info',
  type: 'object',
  fields: [
    {name: 'instantPlay', title: 'Instant Play', type: 'boolean'},
    {name: 'responsive', title: 'Responsive', type: 'boolean'},
    {name: 'noDownload', title: 'No Download', type: 'boolean'},
  ],
}

export default defineType({
  name: 'mobileBrand',
  title: 'Mobile Brand',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required()},
    {name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}},
    {name: 'ios', title: 'iOS', type: 'mobilePlatformInfo'},
    {name: 'android', title: 'Android', type: 'mobilePlatformInfo'},
    {name: 'browser', title: 'Browser', type: 'mobileBrowserInfo'},
    {name: 'playUrl', title: 'Play URL', type: 'url'},
    {name: 'isTopUx', title: 'Is Top UX', type: 'boolean'},
  ],
})