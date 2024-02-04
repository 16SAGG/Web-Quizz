import { Button, Typography } from "@mui/material"
import { useQuestionsStore } from "../../store/questions.store"

import { Questions } from "./Questions.component"
import { Title } from "../Title.component"
import { darkTheme } from "../../main"
import confetti from "canvas-confetti"

export const Game = () =>{
    const currentLanguage = useQuestionsStore(state => state.currentLanguage)

    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)

    return (
        <>
            <Title language = {currentLanguage.language} logo = {currentLanguage.logo}/>
            
            {currentQuestion < questions.length ? 
                showQuestions(questions, currentQuestion, currentLanguage.language.toLowerCase()) 
            : 
                showResults(questions)
            }
        </>
    )
}

const showQuestions = (questions = [], currentQuestion = 0, currentLanguage) => {
    const questionInfo = questions[currentQuestion]
    const nextQuestion = useQuestionsStore(state => state.nextQuestion)

    return (
        <>
            <Questions info={questionInfo} language = {currentLanguage}/>

            {questionInfo.userSelectedAnswer != null ?
                    <Button 
                        onClick={nextQuestion}
                        variant="contained" sx={{marginTop : 2 }}
                    >
                        Continuar
                    </Button>
                :
                    <Typography component={'p'} sx={{marginTop : 2}}>
                        ({currentQuestion + 1} / {questions.length})
                    </Typography>
            }
        </>
    )
}

function showResults (questions) {
    const restartValues = useQuestionsStore(state => state.restartValues)
    const correctAnswersCount = questions.filter(
        (question) => { return question.isCorrectUserAnswer }
    ).length
    const {resultColor, resultText, resultConfetti} = getResult(correctAnswersCount, questions.length)

    if (resultConfetti) {
        confetti()
    }

    return (
        <>
            <Typography component = {"p"} sx = {
                {color : resultColor}}>
                Resultado : {correctAnswersCount} / {questions.length}
            </Typography>

            <Typography component = {"p"} sx = {
                {marginBottom : 3}
            }>
                {resultText}
            </Typography>

            <Button 
                onClick={restartValues}
                variant="contained" sx={{marginTop : 2 }}
            >
                Volver
            </Button>
        </>
    )
}

const getResult = (correctAnswersCount, questionsCount) => {
    const goalPercent = correctAnswersCount*100/questionsCount;

    if (goalPercent > 50) {
        return {
            resultColor: darkTheme.palette.action.light,
            resultText : 'Bien hecho!',
            resultConfetti : true,
        }
    }

    return {
        resultColor: darkTheme.palette.error.light,
        resultText : 'Sigue intentándolo',
        resultConfetti : false,
    }
}