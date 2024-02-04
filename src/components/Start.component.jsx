import { Button, Container, Input, Typography } from "@mui/material"

import { JavaScriptLogo } from "../assets/JavaScript.logo"
import { PythonLogo } from "../assets/Python.logo"
import { JavaLogo } from "../assets/Java.logo"

import { useQuestionsStore } from "../store/questions.store"
import { darkTheme } from "../main"

const MIN_LIMIT_QUESTIONS = 5
const MAX_LIMIT_QUESTIONS = 20

const JAVASCRIPT_INFO = {
    language : 'JavaScript',
    logo : <JavaScriptLogo/>,
}

const JAVA_INFO = {
    language : 'Java',
    logo : <JavaLogo/>,
}

const PYTHON_INFO = {
    language : 'Python',
    logo : <PythonLogo/>,
}

export const Start = () =>{
    const fetchQuestion = useQuestionsStore(state => state.fetchQuestion)
    const setLanguage = useQuestionsStore(state => state.setLanguage)

    const limitQuestions = useQuestionsStore(state => state.limitQuestions)
    const setLimitQuestions = useQuestionsStore(state => state.setLimitQuestions)

    const languageButtonHandleClick = (languageInfo) => () => {
        fetchQuestion(languageInfo.language, limitQuestions)
        setLanguage(languageInfo)
    }

    const limitQuestionsHandleChange = (event) => {
        const newValue = event.target.value
        if (newValue >= MIN_LIMIT_QUESTIONS && newValue <= MAX_LIMIT_QUESTIONS){
            setLimitQuestions(newValue)
        }
    }

    return (
        <Container sx = {{display : 'flex', flexDirection : 'column', gap : 4}}>
            <Typography variant="h2" component="h1">
                <strong>
                    Web <span style={{color : darkTheme.palette.secondary.main}}>Quizz</span>
                </strong>
            </Typography>

            <Typography variant="h5" component="h2">
                Seleccione un lenguaje
            </Typography>

            <Container sx = {{display : 'flex', gap : 2, justifyContent : 'center'}}>
                <Button 
                    onClick = {languageButtonHandleClick(JAVA_INFO)} 
                    variant = "outlined"
                    sx = {{borderColor : 'transparent', boxShadow : 'none'}}
                >
                    {JAVA_INFO.logo}
                </Button>

                <Button 
                    onClick = {languageButtonHandleClick(JAVASCRIPT_INFO)} 
                    variant = "outlined"
                    sx = {{borderColor : 'transparent', boxShadow : 'none'}}
                >
                    {JAVASCRIPT_INFO.logo}
                </Button>

                <Button 
                    onClick = {languageButtonHandleClick (PYTHON_INFO)} 
                    variant = "outlined"
                    sx = {{borderColor : 'transparent', boxShadow : 'none'}}
                >
                    {PYTHON_INFO.logo}
                </Button>
            </Container>

            <Input type="number" onChange={limitQuestionsHandleChange} value={limitQuestions}/>
        </Container>
    )
}
