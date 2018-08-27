export type Answer = string

export interface Question {
  questionText: string
  correctAnswer: Answer
  category: string
}

export class Quiz {
  constructor(private questions: Question[]) {}

  public get numQuestions() {
    return this.questions.length
  }

  public getQuestion(index: number) {
    return this.questions[index]
  }
}
