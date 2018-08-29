import * as React from 'react'
import { Spinner } from '../components/Spinner'

//
// Sometimes components load really quickly (<200ms) and the loading screen only quickly
// flashes on the screen.
//
// A number of user studies have proven that this causes users to perceive things taking
// longer than they really have. If you don't show anything, users perceive it as being faster.
//
// --
// https://github.com/jamiebuilds/react-loadable
//

interface State {
  pastDelay: boolean
}

const DELAY = 200 // ms

export class LoadingPage extends React.Component<{}, State> {
  public state = {
    pastDelay: false,
  }

  private timer?: number

  public componentDidMount() {
    this.killTimer()
    this.timer = window.setTimeout(() => {
      this.setState({ pastDelay: true })
      this.killTimer()
    }, DELAY)
  }

  public componentWillUnmount() {
    this.killTimer()
  }

  public render() {
    const { pastDelay } = this.state
    if (!pastDelay) { return null }

    return (
      <div className='h-100 flex flex-column justify-center items-center'>
        <div className='w3 h3'>
          <Spinner />
        </div>
      </div>
    )
  }

  private killTimer() {
    if (!this.timer) { return }
    window.clearTimeout(this.timer)
    delete this.timer
  }
}
