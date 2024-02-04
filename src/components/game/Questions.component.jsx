import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useQuestionsStore } from "../../store/questions.store"
import { darkTheme } from "../../main";

export const Questions = ({info, language}) => {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)

    const listItemHandleClick = (answerIndex) => () => {
        selectAnswer(info.id, answerIndex)
    }

    return(
        <Card 
            variant = "outlined" sx = {{p : 2, bgcolor : '#222', textAlign : 'left'}}
        >
            <Typography variant = "h5" sx = {{textAlign : 'center'}}>
                {info.question}
            </Typography>

            <SyntaxHighlighter language = {language} style = {vs2015}>
                {info.code}
            </SyntaxHighlighter>

            <List sx = {{bgcolor : '#333'}} disablePadding>
                {
                    info.answers.map((answer, index) =>(
                        <ListItem key={index} disablePadding divider
                            sx={{backgroundColor : getBackgroundColor(info, index)}}
                        >
                            <ListItemButton onClick={listItemHandleClick(index)}
                                disabled = {info.userSelectedAnswer != null}
                            >
                                <ListItemText primary={answer}/>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Card>
    )
}

const getBackgroundColor = (info, index) => {
    const { userSelectedAnswer, correctAnswer } = info

    if (userSelectedAnswer == null) return 'transparent'
    if (index != userSelectedAnswer && index != correctAnswer) return 'transparent'
    if (index === correctAnswer) return darkTheme.palette.action.main
    if (index === userSelectedAnswer) return darkTheme.palette.error.main

    return 'transparent'
}