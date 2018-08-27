import { shallow } from 'enzyme'
import 'jest-enzyme'
import * as React from 'react'

import { App } from '../App'
import { WelcomePage } from '../pages/WelcomePage'

describe('<App />', () => {
  it('has the happy path', async () => {
    const createQuizMock = jest.fn().mockResolvedValue({})
    const app = shallow(<App createQuiz={createQuizMock} />)

    await allPromisesResolved()

    expect(app.find(WelcomePage)).toExist()
  })
})

async function allPromisesResolved() {
  return Promise.resolve()
}
