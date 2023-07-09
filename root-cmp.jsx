const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Header } from './cmps/header.jsx'
import { About } from './pages/about.jsx'
import { City } from './pages/city.jsx'
import { Home } from './pages/home.jsx'

export function App() {
    return <Router>
        <section className="app">
            {/* <header className="app-header">
                wolt
            </header> */}
            <Header />
            <main>
                <Routes>
                    {/* <Route element={<Home />} path="/" />
                    <Route element={<City />} path="/city" />
                    <Route element={<About />} path="/about" /> */}

                    {/* <Route element={<City />} path="/israel" /> */}

                    <Route element={<Home />} path="/" />
                    {/* <Route element={<About />} path="/about" /> */}
                    <Route element={<City />} path="/city/:city" />
                </Routes>
            </main>
        </section>
    </Router>

}