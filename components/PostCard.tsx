import React from "react"
import { PostNode } from "../services/request"

interface PostCardProps {
  post: Pick<PostNode, "node">
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      {post.node.title}
      {post.node.excerpt}
    </div>
  )
}

export default PostCard
