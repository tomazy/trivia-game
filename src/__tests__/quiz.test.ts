import { Question, Quiz } from '../quiz'

const SAMPLE_QUESTIONS: Question[] = [
  { category: 'A', questionText: 'q1', correctAnswer: 'T' },
  { category: 'B', questionText: 'q2', correctAnswer: 'F' },
]

describe(Quiz, () => {
  it('can be empty', () => {
    const quiz = new Quiz([])
    expect(quiz.numQuestions).toBe(0)
  })

  it('keeps questions count', () => {
    const quiz = new Quiz(SAMPLE_QUESTIONS)
    expect(quiz.numQuestions).toBe(2)
  })
})
