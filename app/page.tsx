import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '../lib/posts'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="w-full max-w-4xl space-y-8">
      <h2 className="text-3xl font-light mb-6 text-center">Latest Updates</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="bg-black border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/50 rounded-xl">
              {post.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-medium">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-300">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/post/${post.id}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Read more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

