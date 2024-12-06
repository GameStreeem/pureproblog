import { NextRequest, NextResponse } from 'next/server'
import { createPost } from '../../../lib/posts'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const image = formData.get('image') as File | null

    let imageUrl = ''

    if (image) {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const uploadDir = path.join(process.cwd(), 'public', 'uploads')
      await writeFile(path.join(uploadDir, image.name), buffer)
      imageUrl = `/uploads/${image.name}`
    }

    const newPost = await createPost({ title, content, imageUrl })
    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}

