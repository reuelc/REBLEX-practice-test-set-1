"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { quizParts } from "@/lib/quiz-data"
import Quiz from "@/components/Quiz"
import type { QuizPart } from "@/lib/types"

export default function TestPage({ params }: { params: { part: string } }) {
  const [quizPart, setQuizPart] = useState<QuizPart | null>(null)
  const router = useRouter()

  useEffect(() => {
    const part = quizParts.find((p) => p.id === params.part)
    if (part) {
      setQuizPart(part)
    } else {
      router.push("/menu")
    }
  }, [params.part, router])

  if (!quizPart) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return <Quiz questions={quizPart.questions} title={quizPart.title} partId={quizPart.id} />
}
