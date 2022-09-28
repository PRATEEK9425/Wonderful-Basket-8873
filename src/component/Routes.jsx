import { AiOutlineLogin } from "react-icons/ai";
import { Route,  Routes } from "react-router-dom";
import Login from "./login";



import { Mobileverify } from "./mobileverify";


export default function Routering(){

    return (
        <div>
<Routes>
   <Route   path = "/men"  element = {<>Men</>}   />
   <Route   path = "/women"  element = {<>women</>}   />
   <Route   path = "/kids"  element = {<>kids</>}   />
   <Route   path = "/homeliving"  element = {<>homeliving</>}   />
   <Route   path = "/studio"  element = {<>studio</>}   />
   <Route  path="/mobileverify" element={<Mobileverify/>} />
   <Route   path = "/login"  element = {<Login/>}   />
 
</Routes>

        </div>

    )
}