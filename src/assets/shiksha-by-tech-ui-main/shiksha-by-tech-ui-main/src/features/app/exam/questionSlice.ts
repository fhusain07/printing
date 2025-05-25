// src/redux/slices/questionSlice.ts

import { useAppDispatch } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IAnswerType, IQuestion, IQuestionFormState } from "./quiz.types";

const initialState: IQuestionFormState = {
  questionText: "",
  answerType: null,
  options: [],
  questions: [],
  showQuestionChoice: false,
  showQuestionForm: false,
  selectedQuestion: null,
};

const questionSlice = createSlice({
  name: "examQuestion",
  initialState,
  reducers: {
    setQuestionModel(state, action: PayloadAction<IQuestion | null>) {
      state.selectedQuestion = action.payload;
    },
    setToggleQuestionForm(state, action: PayloadAction<boolean>) {
      state.showQuestionForm = action.payload;
    },
    setToggleQuestionChoice(state) {
      state.showQuestionChoice = !state.showQuestionChoice;
    },
    setAnswerType(state, action: PayloadAction<IAnswerType>) {
      state.answerType = action.payload;

      state.questionText = "";
    },
    updateQuestionText(state, action: PayloadAction<string>) {
      state.questionText = action.payload;
    },

    addOption(state) {
      if (state.answerType === "radio" || state.answerType === "checkbox") {
        state.options.push({ id: nanoid(), text: "" });
      }
    },
    addQuestion(state, payload: PayloadAction<IQuestion>) {
      state.questions = [...state.questions, payload.payload];
    },
    removeOption(state, action: PayloadAction<number>) {
      state.options = state.options.filter(
        (opt) => Number(opt.id) !== action.payload,
      );
    },
    removeQuestion(state, action: PayloadAction<string>) {
      state.questions = state.questions.filter((q) => q.id !== action.payload);
    },
    resetForm(state) {
      state.questionText = "";
      state.answerType = "radio";
      state.options = [
        { id: "1", text: "" },
        { id: "1", text: "" },
      ];
    },
  },
});

export const {
  setAnswerType,
  updateQuestionText,
  addOption,
  removeOption,
  resetForm,
  setToggleQuestionChoice,
  removeQuestion,
  setQuestionModel,
  setToggleQuestionForm,
  addQuestion,
} = questionSlice.actions;

export const useQuestionActions = () => {
  const dispatch = useAppDispatch();
  return {
    setQuestionModel: (payload: IQuestion | null) =>
      dispatch(setQuestionModel(payload)),
    setAnswerType: (payload: IAnswerType) => dispatch(setAnswerType(payload)),
    updateQuestionText: (payload: string) =>
      dispatch(updateQuestionText(payload)),
    addOption: () => dispatch(addOption()),
    addQuestion: (payload: IQuestion) => dispatch(addQuestion(payload)),
    removeOption: (payload: number) => dispatch(removeOption(payload)),
    resetForm: () => dispatch(resetForm()),
    setToggleQuestionForm: (payload: boolean) =>
      dispatch(setToggleQuestionForm(payload)),
    setToggleQuestionChoice: () => dispatch(setToggleQuestionChoice()),
    removeQuestion: (payload: string) => dispatch(removeQuestion(payload)),
  };
};

export default questionSlice.reducer;
