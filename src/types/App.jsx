import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../routes/index.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
