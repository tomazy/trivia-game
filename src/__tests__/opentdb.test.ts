import fetch from 'jest-fetch-mock'
import { fetchQuestions } from '../opentdb'

const FIXTURE = {
  response_code: 0,
  results: [
    {
      category: 'Science & Nature',
      correct_answer: 'True',
      difficulty: 'medium',
      incorrect_answers: [
        'False',
      ],
      question: 'The Doppler effect applies to light.',
      type: 'boolean',
    },
    {
      category: 'Entertainment: Music',
      correct_answer: 'False',
      difficulty: 'easy',
      incorrect_answers: [
        'True',
      ],
      question: 'Michael Jackson wrote The Simpsons song &quot;Do the Bartman&quot;.',
      type: 'boolean',
    },
  ],
}

describe('fetching questions', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('uses Open Trivia Database API', async () => {
    fetch.mockResponse(JSON.stringify(FIXTURE), { status: 200 } )
    await fetchQuestions(1234)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch.mock.calls[0][0]).toMatch(new RegExp('^https://opentdb.com/api.php\\?amount=1234&.+'))
  })

  it('parses questions', async () => {
    fetch.mockResponse(JSON.stringify(FIXTURE), { status: 200 } )
    const questions = await fetchQuestions(1234)
    expect(questions).toHaveLength(FIXTURE.results.length)
    expect(questions[0].questionText).toBe('The Doppler effect applies to light.')
    expect(questions[0].correctAnswer).toBe('True')
    expect(questions[0].category).toBe('Science & Nature')
  })

  it('decodes HTML entities', async () => {
    fetch.mockResponse(JSON.stringify(FIXTURE), { status: 200 } )
    const questions = await fetchQuestions(1234)
    expect(questions[1].questionText).toMatch(/"Do the Bartman"/)
  })
})
