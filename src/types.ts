export interface Link {
  url: string
  title: string
  image?: string
}

export interface Social {
  url: string
  title: string
}

export interface Data {
  me: {
    name: string
    job: {
      title: string
      company: string
      url: string
    }
    avatar: string
  }
  seo: {
    title: string
    description: string
  }
  links: Link[]
  socials: Social[]
}