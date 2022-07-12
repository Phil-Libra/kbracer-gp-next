import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages'));
const Total = lazy(() => import('./pages/Total'));
const Original = lazy(() => import('./pages/Original'));
const Mod = lazy(() => import('./pages/Mod'));

const Routers = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Navigate to="/total" />} />
                    <Route path="/" element={<Home />} >
                        <Route path="/total" element={<Total />} />
                        <Route path="/original" element={<Original />} />
                        <Route path="/mod" element={<Mod />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
};

export default Routers;