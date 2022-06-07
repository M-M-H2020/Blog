interface Author {
  bio
  id
  name
  photo: {
    url
  }
}
interface Category {
  name: string
  slug: string
}

export interface PostNode {
  node: {
    author: Author
    createdAt: string
    slug: string
    title: string
    excerpt: string
    featuredImage: {
      url: string
    }
    categories: Category[]
  }
}

export interface GetPosts {
  postsConnection: {
    edges: PostNode[]
  }
}
