import * as React from 'react'

import { QuestionPage } from './pages/QuestionPage'
import { WelcomePage } from './pages/WelcomePage'
import { Answer, Quiz } from './quiz'

const debug = require('debug')('g2i:App') // tslint:disable-line

interface Props {
  createQuiz: () => Promise<Quiz>
}

interface State {
  quiz?: Quiz
  questionIndex?: number
  quizDone?: boolean
}

export class App extends React.Component<Props, State> {
  public state: State = {

  }

  public async componentWillMount() {
    const { createQuiz } = this.props
    const quiz = await createQuiz()
    this.setState({ quiz })
  }

  public render() {
    debug('render', this.state)
    const { quiz, questionIndex, quizDone } = this.state

    if (quiz === undefined) {
      return <div>please wait...</div>
    }

    if (quizDone) {
      return (
        <div>DONE!</div>
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

  private handleOnBegin = () => {
    debug('handleOnBegin')
    this.setState({ questionIndex: 0, quizDone: false })
  }

  private handleOnAnswer = (questionIndex: number, answer: Answer) => {
    debug('handleOnAnswer', questionIndex, answer)
    const { quiz } = this.state

    if (questionIndex < quiz!.numQuestions - 1) {
      this.setState({ questionIndex: questionIndex + 1 })
    } else {
      this.setState({ quizDone: true })
    }
  }
}
