import { mount, shallow } from 'enzyme'
import 'jest-enzyme'
import * as React from 'react'

import { OnBegin, WelcomePage } from '../../pages/WelcomePage'

describe('<WelcomePage />', () => {
  let onBeginMock: OnBegin

  beforeEach(() => {
    onBeginMock = jest.fn()
  })

  it('renders the number of questions', () => {
    const numQuestions = 1234567
    const page = shallow(
      <WelcomePage
        numQuestions={numQuestions}
        onBegin={onBeginMock}
      />
    )
    expect(page).toIncludeText(String(numQuestions))
  })

  it('handles the button click', () => {
    const page = mount(
      <WelcomePage
        numQuestions={5}
        onBegin={onBeginMock}
      />
    )
    page.find('button').simulate('click')
    expect(onBeginMock).toHaveBeenCalled()
  })
})
