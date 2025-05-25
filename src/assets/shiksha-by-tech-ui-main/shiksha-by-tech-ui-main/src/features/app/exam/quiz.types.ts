export interface IQuestion {
  id?: string | number;
  text: string;
  options: IOptionField[];
  multipleAnswersAllowed?: boolean;
  correctAnswers?: string;
}

export type IAnswerType = "text" | "radio" | "checkbox" | null;

export interface IOptionField {
  id?: string;
  text: string;
  isCorrect?: boolean;
}

export interface IQuestionRequest {
  id?: string;
  formTitle?: string;
  questionText: string;
  answerType?: IAnswerType;
  options?: IOptionField[];
  multipleAnswersAllowed?: boolean;
  addNewQuestion?: boolean;
}

export interface IQuestionFormState {
  questionText: string;
  answerType: IAnswerType;
  options: IOptionField[];
  questions: any[];
  showQuestionChoice: boolean;
  showQuestionForm: boolean;
  selectedQuestion: IQuestion | null;
}
