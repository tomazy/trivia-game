import * as React from 'react'
import { WelcomePage } from './pages/WelcomePage'

const debug = require('debug')('g2i:App') // tslint:disable-line

export class App extends React.Component {
  public render() {
    debug('render', this.state)
    return (
      <WelcomePage numQuestions={10} />
    )
  }
}
