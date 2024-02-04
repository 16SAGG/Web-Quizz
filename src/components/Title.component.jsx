import { Stack, Typography } from "@mui/material"
import { JavaScriptLogo } from "../assets/JavaScript.logo"
import { darkTheme } from "../main"

export const Title = ({language = undefined, logo = <JavaScriptLogo/>}) => {
    return(
        <Stack direction = 'row' gap = {2} alignItems = 'center' justifyContent = 'center'
            marginBottom = {3}
            >
            {logo}
            
            {language && 
                <Typography variant = 'h3' component = 'h2'>
                    {language} <span style={{color : darkTheme.palette.secondary.main}}>Quizz</span>
                </Typography>
            }
        </Stack>
    )
}

const titles = {}

titles.javascript = () =>{
    
}