export interface Action {
  name: string
  icon: string
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
}