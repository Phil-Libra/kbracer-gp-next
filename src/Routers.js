import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages'));
const Total = lazy(() => import('./pages/Total'));
const Original = lazy(() => import('./pages/Original'));
const Mod = lazy(() => import('./pages/Mod'));

const Routers = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={process.env.REACT_APP_URL} element={<Navigate to={`${process.env.REACT_APP_URL}total`} />} />
                    <Route path={process.env.REACT_APP_URL} element={<Home />} >
                        <Route path={`${process.env.REACT_APP_URL}total`} element={<Total />} />
                        <Route path={`${process.env.REACT_APP_URL}original`} element={<Original />} />
                        <Route path={`${process.env.REACT_APP_URL}mod`} element={<Mod />} />
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