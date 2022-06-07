import React from "react"

interface PostCardProps {
  post: {
    title: string
    excerpt: string
  }
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
