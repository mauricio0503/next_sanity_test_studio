import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'crypto-casinos-us',

  projectId: 'dor153n9',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: schemaTypes,
})
