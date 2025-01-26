import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"

export const RouterPage =()=>{
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
        </Routes>
    )
}