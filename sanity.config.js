import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shareme_jsm',

  projectId: 'xu4mhq3i',
  dataset: 'test',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
