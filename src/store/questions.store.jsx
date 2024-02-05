import { create } from "zustand";
import { javascriptQuestionsData } from "../data/javascriptQuestionsData";
import { pythonQuestionsData } from "../data/pythonQuestionsData";
import { javaQuestionsData } from "../data/javaQuestionsData";

const questionsData = {
  "javascript" : javascriptQuestionsData,
  "python" : pythonQuestionsData,
  "java" : javaQuestionsData,
}

export const useQuestionsStore = create((set, get) => ({
    currentLanguage : {},
    questions : [],
    currentQuestion : 0,
    limitQuestions : 5,

    restartValues : () => {
      set({
        questions : [],
        currentQuestion : 0,
      })
    },

    nextQuestion : () => {
      const { currentQuestion } = get()

      const newCurrentQuestion = currentQuestion + 1 
      
      set({currentQuestion : newCurrentQuestion})
    },

    fetchQuestion : async (language) => {
      const { limitQuestions } = get()

      const lowerLanguage = language.toLowerCase()

      const questions = questionsData[lowerLanguage].sort(() => Math.random() - 0.5).slice(0, limitQuestions)
      
      set({ questions })
    },

    setLimitQuestions : (newLimit) => {
      set({ limitQuestions : newLimit})
    },

    setLanguage : ({language, logo}) => {
      set({
        currentLanguage : {
          language : language,
          logo : logo,
        }
      })
    },

    selectAnswer : (questionID, answerID) => {
      const { questions } = get()

      const newQuestions = structuredClone(questions)
      const questionIndex = newQuestions.findIndex(question => question.id === questionID)
      const questionInfo = newQuestions[questionIndex]

      const isCorrectUserAnswer = questionInfo.correctAnswer === answerID

      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer : answerID,
      }

      set({questions : newQuestions})
    }
}))