import Image from 'next/image'
import { getPostById } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="w-full max-w-2xl">
      <Card className="bg-black border-gray-800 rounded-xl overflow-hidden">
        {post.imageUrl && (
          <div className="relative h-64 w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-3xl font-light mb-2">{post.title}</CardTitle>
          <p className="text-gray-400 text-sm">Published on: {new Date(post.date).toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
    </div>
  )
}

