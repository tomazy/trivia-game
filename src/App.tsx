import * as React from 'react'

import { WelcomePage } from './pages/WelcomePage'
import { Quiz } from './quiz'

const debug = require('debug')('g2i:App') // tslint:disable-line

interface Props {
  createQuiz: () => Promise<Quiz>
}

interface State {
  quiz?: Quiz
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
    const { quiz } = this.state

    if (quiz === undefined) {
      return <div>please wait...</div>
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
  }
}
