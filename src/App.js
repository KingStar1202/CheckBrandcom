import {Route, Routes,} from 'react-router-dom';
import Persons from '../src/Routing/persons/persons';
import Brands from '../src/Routing/brands/brands';
import AppLayout from '../src/Routing/AppLayout';
import Stats from '../src/Routing/statistic/stats';

import './style.scss';
import './assets/fonts/fonts.scss'

import NotFound from "./Routing/Notfound/Notfound";
import Brand from "./Components/brandPage/brand";
import AboutPlatform from './Components/aboutPlatform/about';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AppLayout/>}>
                    <Route index element={<Persons/>}/>
                    <Route path='Stats' element={<Stats/>}/>
                    <Route path='Brands' element={<Brands/>}/>
                    <Route path='Brand/:id' element={<Brand/>}/>
                    <Route path='about' element={<AboutPlatform/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>


        </>
    );
}

export default App;
