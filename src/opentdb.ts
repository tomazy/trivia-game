import { Question } from './quiz'

const he = require('he') //tslint:disable-line
const debug = require('debug')('g2i:opentdb') // tslint:disable-line

interface OTDBQuestion {
  question: string
  correct_answer: string
  category: string
}

function transformQuestion({ question, correct_answer, category }: OTDBQuestion): Question {
  return {
    category: decodeHtmlEntities(category),
    correctAnswer: decodeHtmlEntities(correct_answer),
    questionText: decodeHtmlEntities(question),
  }
}

export async function fetchQuestions(numQuestions: number): Promise<Question[]> {
  debug(`fetchQuestions(${numQuestions})`)

  const difficulty = 'hard'
  const type = 'boolean'
  const url = `https://opentdb.com/api.php?amount=${numQuestions}&difficulty=${difficulty}&type=${type}`

  const resp = await fetch(url)
  const json = await resp.json()
  return json.results.map(transformQuestion)
}

function decodeHtmlEntities(s: string): string {
  return he.decode(s)
}
