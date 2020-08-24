export interface Action {
  name: string
  icon: string
}

export interface Badge {
  name: string
  alt: string
  img: string
}

export interface Video {
  link: string
  img: string
  title: string,
  text: string
  meta: string
}

export interface Tag {
  name: string
  tag: string
  link: string
}

export interface Post {
  id: number
  user: Object
  createdDate: string
  pinned: boolean
  text: string
  video: Video
  tags: Array<Tag>
}

export interface NavigationMenu {
  title: string
  path: string
  icon: string
}

export interface Origin {
  country: string
  image: string
}

export interface ProfileStat {
  posts: number
  friends: number
  visits: number
  origin: Origin
}

export interface User {
  name: string
  website: string
  badge: number
  stats: ProfileStat
  socialLinks: Object
  about: string
  profile: Object
}