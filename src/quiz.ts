export type Answer = string

export interface Question {
  questionText: string
  correctAnswer: Answer
  category: string
}

export class Quiz {
  constructor(private questions: Question[], private answers: Answer[] = []) {}

  public get numQuestions() {
    return this.questions.length
  }

  public get numAnswers() {
    return this.answers.reduce(
      (acc, e) => e !== undefined ? acc + 1 : acc
    , 0)
  }

  public get score(): number {
    return this.questions.reduce(
      (acc, _, idx) => this.isAnswerCorrectAt(idx) ? acc + 1 : acc
    , 0)
  }

  public getQuestion(index: number) {
    return this.questions[index]
  }

  public isAnswerCorrectAt(index: number) {
    return this.answers[index] === this.questions[index].correctAnswer
  }

  /**
   * It does not mutate the Quiz, but returns a new copy with the answer set
   */
  public setAnswer(index: number, answer: Answer): Quiz {
    const newAnswers = Object.assign([], this.answers, { [index]: answer })
    return new Quiz(this.questions, newAnswers)
  }
}
