import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectType',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'document',
      fields: [
          {  
              name: 'present',
              type: 'boolean'
          },
          {  
            name: 'endDate',
            type: 'date',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required()
          }
      ]
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Cover',
      name: 'cover',
      type: 'document',
      fields: [
        {
          title: 'Video?',
          name: 'isVideo',
          type: 'boolean'
        },
        {
          title: 'Image or Video Path',
          name: 'visuals',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'assetsPath',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: 
      [
        {
          title: 'Text Block',
          name: 'textBlock',
          type: 'document',
          fields: [
            {
              title: "Heading?",
              name: "isHeading",
              type: "boolean",
            },
            {
              title: "Heading",
              name: "heading",
              type: "string"
            },
            {
              title: 'Image or Video',
              name: 'visuals',
              type: 'document',
              fields: [
                {
                  title: "Visuals?",
                  name: "hasVisuals",
                  type: "boolean",
                  validation: (rule) => rule.required(),
                },
                {
                  title: 'Video?',
                  name: 'isVideo',
                  type: 'boolean'
                },
                {
                  title: 'Image or Video Path',
                  name: 'path',
                  type: 'string'
                },
                {
                  title: 'Image Size',
                  name: 'size',
                  type: 'number',
                  initialValue: 30
                }
              ]
            },
            {
              title: 'Text', 
              name: 'text',
              type: 'array', 
              of: [{type: 'block'}]
            }
          ]
        }
      ],
    }),
  ],
})