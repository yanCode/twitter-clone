// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client as sanityClient } from '../../sanity'

import { groq } from 'next-sanity'
import { IComment } from '../../typings'

const feedQuery = groq`
*[_type=='comment' && references(*[_type=='tweet' && _id==$tweetId]._id)] {
  _id,
    ...
} | order(_createdAt desc)
`
type Data = {
  comments: IComment[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { tweetId } = req.query
  const comments: IComment[] = await sanityClient.fetch(feedQuery, { tweetId })

  res.status(200).json({ comments })
}
