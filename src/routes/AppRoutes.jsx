import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/Home"
import IntroPage from "../pages/Intro/Intro"
import Game from "../pages/Game/Game"


const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path='/quote' element={<QuotePage />} /> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/start' element={<IntroPage />} />
            <Route path='/playing/:level' element={<Game />} />

        </Routes>
    )
}

export default AppRoutes;