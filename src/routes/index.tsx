import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignIn from "../pages/Signin";
import SignUp from "../pages/SignUp";

const Rotas: React.FC = () => ( 
    <Routes>
        console.log("Passou por aqui");
        
        <Route path='/*' element={<SignIn/>} />
        <Route path='/singup' element={<SignUp/>}/>
    </Routes>
);

export default Rotas;