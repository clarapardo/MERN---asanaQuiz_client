import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/Home"
import Intro from "../pages/Intro/Intro"
import Game from "../pages/Game/Game"
import IntroRetry from "../pages/IntroRetry/IntroRetry"
import GameRetry from "../pages/GameRetry/GameRetry"


const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path='/quote' element={<QuotePage />} /> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/start' element={<Intro />} />
            <Route path='/playing/:level' element={<Game />} />
            <Route path='/restart' element={<IntroRetry />} />
            <Route path='/replaying' element={<GameRetry />} />

        </Routes>
    )
}

export default AppRoutes;