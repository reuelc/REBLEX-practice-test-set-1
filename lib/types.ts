export interface QuizQuestion {
  question: string
  options: string[]
  correct: string
}

export interface QuizPart {
  id: string
  title: string
  questions: QuizQuestion[]
}

export interface QuizResult {
  score: number
  total: number
  incorrectAnswers: {
    question: QuizQuestion
    userAnswer: string
  }[]
}
