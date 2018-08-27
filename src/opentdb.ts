import { Question } from './quiz'

export async function fetchQuestions(numQuestions: number): Promise<Question[]> {
  return [
    { category: 'Category A', questionText: 'q1', correctAnswer: 'True' },
    { category: 'Category B', questionText: 'q2', correctAnswer: 'False' },
    { category: 'Category C', questionText: 'q3', correctAnswer: 'False' },
  ]
}
