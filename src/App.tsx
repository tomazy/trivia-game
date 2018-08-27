import * as React from 'react'

import { QuestionPage } from './pages/QuestionPage'
import { ResultsPage } from './pages/ResultsPage'
import { WelcomePage } from './pages/WelcomePage'
import { Answer, Quiz } from './quiz'

const debug = require('debug')('g2i:App') // tslint:disable-line

interface Props {
  createQuiz: () => Promise<Quiz>
}

interface State {
  quiz?: Quiz
  questionIndex?: number
}

export class App extends React.Component<Props, State> {
  public state: State = {

  }

  public async componentWillMount() {
    await this.newQuiz()
  }

  public render() {
    debug('render', this.state)
    const { quiz, questionIndex } = this.state

    if (quiz === undefined) {
      return <div>please wait...</div>
    }

    if (quiz.numAnswers === quiz.numQuestions) {
      return (
        <ResultsPage
          quiz={quiz}
          onPlayAgain={this.handleOnPlayAgain}
        />
      )
    }

    if (questionIndex !== undefined) {
      return (
        <QuestionPage
          question={quiz.getQuestion(questionIndex)}
          questionIndex={questionIndex}
          numQuestions={quiz.numQuestions}
          onAnswer={this.handleOnAnswer}
        />
      )
    }

    return (
      <WelcomePage
        numQuestions={quiz.numQuestions}
        onBegin={this.handleOnBegin}
      />
    )
  }

  private async newQuiz() {
    const { createQuiz } = this.props

    this.setState({
      questionIndex: undefined,
      quiz: undefined,
    })

    const quiz = await createQuiz()

    this.setState({ quiz })
  }

  private handleOnBegin = () => {
    debug('handleOnBegin')
    this.setState({ questionIndex: 0 })
  }

  private handleOnAnswer = (questionIndex: number, answer: Answer) => {
    debug('handleOnAnswer', questionIndex, answer)
    let { quiz } = this.state
    quiz = quiz!.setAnswer(questionIndex, answer)

    if (questionIndex < quiz!.numQuestions - 1) {
      this.setState({ quiz, questionIndex: questionIndex + 1 })
    } else {
      this.setState({ quiz })
    }
  }

  private handleOnPlayAgain = () => {
    debug('handleOnPlayAgain')
    this.newQuiz()
  }
}
