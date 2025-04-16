"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { quizParts } from "@/lib/quiz-data"
import { BookOpenIcon, ArrowLeftIcon, LogOutIcon, GraduationCapIcon } from "lucide-react"

export default function MenuPage() {
  const router = useRouter()

  const handleExit = () => {
    router.push("/")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-4">
      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="sm" onClick={handleExit} className="text-gray-500 hover:text-gray-700">
          <LogOutIcon className="h-4 w-4 mr-1" /> Exit
        </Button>
      </div>

      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCapIcon className="h-16 w-16 mx-auto text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">REBLEX Practice Test</h1>
          <p className="text-gray-600 mt-2">Real Estate Broker Licensure Examination Practice Test</p>
        </div>

        <Card className="w-full shadow-lg border-blue-100">
          <CardHeader className="border-b border-gray-100 bg-white rounded-t-lg">
            <h2 className="text-xl font-semibold text-gray-800">Select a Practice Test</h2>
            <p className="text-gray-500 text-sm">Choose one of the following test sections to begin your practice</p>
          </CardHeader>

          <CardContent className="space-y-4 p-6 bg-white rounded-b-lg">
            {quizParts.map((part) => (
              <div key={part.id} className="group">
                <Button
                  onClick={() => router.push(`/test/${part.id}`)}
                  className="w-full h-auto py-6 px-4 flex items-center justify-start bg-white hover:bg-blue-50 text-left border border-gray-200 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200"
                  variant="ghost"
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
                    <BookOpenIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-lg text-gray-800">{part.title}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {part.questions.length} questions • Approximately {Math.round(part.questions.length * 0.75)}{" "}
                      minutes
                    </div>
                  </div>
                </Button>
              </div>
            ))}

            <div className="flex justify-center mt-6">
              <Button variant="outline" onClick={handleExit} className="text-gray-600 border-gray-300">
                <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Login
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500">© 2025 REBLEX Practice Test</div>
      </div>
    </div>
  )
}
