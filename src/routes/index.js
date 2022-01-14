import React from 'react';

import { BrowserRouter, Route,Routes  } from "react-router-dom";
import Index from '../pages/index'
import Home from '../pages/home'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="" element={<Index />} />
                <Route  path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;