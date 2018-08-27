import { Question, Quiz } from '../quiz'

const SAMPLE_QUESTIONS: Question[] = [
  { category: 'A', questionText: 'q1', correctAnswer: 'T' },
  { category: 'B', questionText: 'q2', correctAnswer: 'F' },
]

describe(Quiz, () => {
  let quiz: Quiz

  beforeEach(() => {
    quiz = new Quiz(SAMPLE_QUESTIONS)
  })

  it('can be empty', () => {
    const q = new Quiz([])
    expect(q.numQuestions).toBe(0)
  })

  it('keeps questions count', () => {
    expect(quiz.numQuestions).toBe(2)
  })

  it('has questions', () => {
    expect(quiz.getQuestion(0)).toBe(SAMPLE_QUESTIONS[0])
    expect(quiz.getQuestion(1)).toBe(SAMPLE_QUESTIONS[1])
  })
})
