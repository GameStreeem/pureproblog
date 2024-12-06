'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LoginForm } from './login-form'
import { useToast } from "@/hooks/use-toast"

// In a real application, this should be stored securely and not in the client-side code
const ADMIN_PASSWORD = '8176405963'

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel.",
      })
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    if (image) {
      formData.append('image', image)
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setTitle('')
        setContent('')
        setImage(null)
        router.refresh()
        toast({
          title: "Post Created",
          description: "Your new post has been successfully created.",
        })
      } else {
        throw new Error('Failed to create post')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <div className="w-full max-w-2xl">
      <Card className="bg-black border-gray-800 rounded-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-light">Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-gray-300">Title</label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-black border-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded-lg"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium text-gray-300">Content</label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-black border-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-transparent h-64 rounded-lg"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium text-gray-300">Image (optional)</label>
              <Input
                type="file"
                id="image"
                onChange={handleImageChange}
                className="bg-black border-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded-lg"
                accept="image/*"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-black text-white hover:bg-gray-900 transition-colors rounded-lg"
          >
            {isLoading ? 'Creating...' : 'Create Post'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

