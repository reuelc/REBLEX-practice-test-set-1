"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LockIcon, GraduationCapIcon } from "lucide-react"

const CORRECT_PASSWORD = "9646"

export default function PasswordProtection() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      router.push("/menu")
    } else {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-6">
          <GraduationCapIcon className="h-16 w-16 mx-auto text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">REBLEX Practice Test</h1>
          <p className="text-gray-600 mt-2">Real Estate Broker Licensure Examination Practice Test</p>
        </div>

        <Card className="shadow-lg border-blue-100">
          <CardHeader className="space-y-1 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-center text-gray-800">Welcome</h2>
            <p className="text-center text-gray-500">Please enter the password to access the practice tests</p>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 py-6 text-center text-lg"
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>Incorrect password. Please try again.</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-lg font-medium">
                Access Tests
              </Button>

              <p className="text-sm text-center text-gray-500 mt-4">© 2025 REBLEX Practice Test</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
