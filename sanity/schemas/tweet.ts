import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'text in tweet',
      type: 'string',
    }),
    defineField({
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'Admin controls: Toggle if tweet is deemed inappropriate',
      type: 'boolean',
    }),
    defineField({
      name: 'username',
      title: 'username',
      type: 'string',
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    }),
     defineField({
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    }),
  ],
})
