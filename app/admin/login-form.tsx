'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface LoginFormProps {
  onLogin: (password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(password)
  }

  return (
    <div className="w-full max-w-md">
      <Card className="bg-black border-gray-800 rounded-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-light">Admin Login</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black border-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded-lg"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-900 transition-colors rounded-lg"
            >
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

