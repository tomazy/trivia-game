import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'tachyons/css/tachyons.min.css'

import { App } from './App'
import { fetchQuestions } from './opentdb'
import { Quiz } from './quiz'

async function createQuiz() {
  const questions = await fetchQuestions(10)
  return new Quiz(questions)
}

ReactDOM.render(
  <App createQuiz={createQuiz}/>,
  document.getElementById('app')
)
