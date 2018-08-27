import { shallow } from 'enzyme'
import 'jest-enzyme'
import * as React from 'react'

import { App } from '../App'

describe('<App />', () => {
  it('has the happy path', () => {
    const app = shallow(<App />)
    expect(app).toIncludeText('Welcome to the Trivia Challenge!')
  })
})
