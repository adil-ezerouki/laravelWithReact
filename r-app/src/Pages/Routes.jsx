import React from 'react'
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Index from './Index/';
import Show from './Show/';
import Create from './create';

export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='index' element={<Index />}></Route>
                <Route path='show/:id' element={<Show />}></Route>
                <Route path='create' element={<Create />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

