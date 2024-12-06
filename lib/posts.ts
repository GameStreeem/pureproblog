import { promises as fs } from 'fs'
import path from 'path'

export interface Post {
  id: string
  title: string
  content: string
  date: string
  excerpt: string
  imageUrl?: string
}

const dataDirectory = path.join(process.cwd(), 'data')
const postsFile = path.join(dataDirectory, 'posts.json')

async function ensureDataFileExists() {
  try {
    await fs.access(dataDirectory)
  } catch {
    await fs.mkdir(dataDirectory, { recursive: true })
  }

  try {
    await fs.access(postsFile)
  } catch {
    await fs.writeFile(postsFile, '[]', 'utf8')
  }
}

export async function getPosts(): Promise<Post[]> {
  await ensureDataFileExists()
  const fileContents = await fs.readFile(postsFile, 'utf8')
  const posts = JSON.parse(fileContents)
  return posts.sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const posts = await getPosts()
  return posts.find((post) => post.id === id)
}

export async function createPost(post: Omit<Post, 'id' | 'date' | 'excerpt'>): Promise<Post> {
  const posts = await getPosts()
  const newPost: Post = {
    ...post,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    excerpt: post.content.slice(0, 100) + '...',
  }
  posts.push(newPost)
  await fs.writeFile(postsFile, JSON.stringify(posts, null, 2), 'utf8')
  return newPost
}

