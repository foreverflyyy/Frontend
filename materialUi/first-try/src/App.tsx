import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignupPage from './pages/SignUp';

function App() {
    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
        </>
    );
}

export default App;