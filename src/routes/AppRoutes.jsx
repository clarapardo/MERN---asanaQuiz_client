import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/Home"
import Intro from "../pages/Intro/Intro"
import Game from "../pages/Game/Game"


const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path='/quote' element={<QuotePage />} /> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/start' element={<Intro />} />
            <Route path='/playing/:level' element={<Game />} />
            <Route path='/replaying' element={<IntroRetry />} />

        </Routes>
    )
}

export default AppRoutes;