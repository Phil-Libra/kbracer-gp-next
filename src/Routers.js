import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Skeleton } from 'antd';

const Home = lazy(() => import('./pages'));
const Total = lazy(() => import('./pages/Total'));
const Original = lazy(() => import('./pages/Original'));
const Mod = lazy(() => import('./pages/Mod'));

const Routers = () => {
    return (
        <Router basename="/">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={process.env.REACT_APP_URL} element={<Home />} >
                        <Route path={process.env.REACT_APP_URL} element={<Total />} />
                        <Route path={`${process.env.REACT_APP_URL}original`} element={<Original />} />
                        <Route path={`${process.env.REACT_APP_URL}mod`} element={<Mod />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
};

const Loading = () => (
    <Skeleton
        title={false}
        paragraph={{
            rows: 25
        }}
        active
    />
);

export default Routers;