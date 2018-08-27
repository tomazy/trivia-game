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
    expect(quiz.numQuestions).toBe(SAMPLE_QUESTIONS.length)
  })

  it('has questions', () => {
    expect(quiz.getQuestion(0)).toBe(SAMPLE_QUESTIONS[0])
    expect(quiz.getQuestion(1)).toBe(SAMPLE_QUESTIONS[1])
  })

  it('initially has 0 answers', () => {
    expect(quiz.numAnswers).toBe(0)
  })

  it('collects answers', () => {
    const q2 = quiz.setAnswer(0, 'T')
    expect(quiz.numAnswers).toBe(0)
    expect(q2.numAnswers).toBe(1)

    const q3 = q2.setAnswer(1, 'F')
    expect(q2.numAnswers).toBe(1)
    expect(q3.numAnswers).toBe(2)
  })

  it('can tell if an answer is correct', () => {
    const q2 = quiz.setAnswer(0, 'T')
    expect(q2.isAnswerCorrectAt(0)).toBe(true)

    const q3 = quiz.setAnswer(1, 'F')
    expect(q3.isAnswerCorrectAt(1)).toBe(true)
  })

  it('knows the score', () => {
    expect(quiz.score).toBe(0)

    const q2 = quiz.setAnswer(0, SAMPLE_QUESTIONS[0].correctAnswer)
    expect(q2.score).toBe(1)

    const q3 = quiz.setAnswer(0, 'F')
    expect(q3.score).toBe(0)

    const q4 = q2.setAnswer(1, SAMPLE_QUESTIONS[1].correctAnswer)
    expect(q4.score).toBe(2)
  })
})
