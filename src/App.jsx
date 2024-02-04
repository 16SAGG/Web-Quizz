import { Container} from '@mui/material'

import { useQuestionsStore } from './store/questions.store'

import { Start } from './components/Start.component'
import { Game } from './components/game/Game.component'

import './App.css'

function App() {

  const questions = useQuestionsStore(state => state.questions)

  return (
    <>
      <Container sx={{display : 'flex', flexDirection : 'column', maxWidth : { xs : '308px', sm : 'none'}}}>
        {questions.length === 0 && <Start/>}
        {questions.length > 0 && <Game/>}
      </Container>
    </>
  )
}

export default App
