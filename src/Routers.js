import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { BASE_URL } from './utlis';

const Home = lazy(() => import('./pages'));
const Total = lazy(() => import('./pages/Total'));
const Original = lazy(() => import('./pages/Original'));
const Mod = lazy(() => import('./pages/Mod'));

const Routers = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={BASE_URL} element={<Navigate to={`${BASE_URL}/total`} />} />
                    <Route path={BASE_URL} element={<Home />} >
                        <Route path={`${BASE_URL}/total`} element={<Total />} />
                        <Route path={`${BASE_URL}/original`} element={<Original />} />
                        <Route path={`${BASE_URL}/mod`} element={<Mod />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
};

const Loading = () => (
    <div>Loading...</div>
);

export default Routers;