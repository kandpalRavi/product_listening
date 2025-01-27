import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"
import { Listening } from "../components/Listening"

export const RouterPage =()=>{
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/listening" element ={<Listening/>} />
        </Routes>
    )
}