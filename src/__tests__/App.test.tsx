import { shallow } from 'enzyme'
import 'jest-enzyme'
import * as React from 'react'

import { App } from '../App'
import { WelcomePage } from '../pages/WelcomePage'

describe('<App />', () => {
  it('has the happy path', () => {
    const app = shallow(<App />)
    expect(app.find(WelcomePage)).toExist()
  })
})
