import { HomeIcon } from '@heroicons/react/24/solid'

export type IconType = typeof HomeIcon

export type TweetBody = {
  text: string
  username: string,
  profileImg: string,
  image?: string
}
export type CommentBody = {
  comment: string
  tweetId: string,
  username: string,
  profileImage: string

}

export interface IComment extends CommentBody {
  _id: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: 'comment'
  tweet: {
    _ref: string
    _type: 'reference'
  }
}

export interface ITweet extends TweetBody {
  _id: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: 'tweet'
  blockTweet: boolean
}

interface HomeProps {
  tweets: ITweet[]
}

interface FeedProps {
  tweets: ITweet[]
}

interface TwitterProps {
  tweet: ITweet
}

export interface SidebarRowProps {
  Icon: IconType;
  title: string;
  onClick?: () => {}

}