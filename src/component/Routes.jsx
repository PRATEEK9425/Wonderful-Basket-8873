
import { Route,  Routes } from "react-router-dom";
import Kidspage from "../Allpage/kidspage";
import Menpage from "../Allpage/Mens";
import ShowResult from "../Allpage/showpage";
import Womenpage from "../Allpage/women";
import Login from "./login";
import { Mobileverify } from "./mobileverify";


export default function Routering(){

    return (
        <div>
<Routes>
   <Route   path = "/"  element = {<Menpage/>}   />
   <Route   path = "/women"  element = {<Womenpage/>}   />
   <Route   path = "/kids"  element = {<Kidspage/>}   />
   <Route   path = "/homeliving"  element = {<>homeliving</>}   />
   <Route   path = "/studio"  element = {<>studio</>}   />
   <Route  path="/mobileverify" element={<Mobileverify/>} />
   <Route   path = "/login"  element = {<Login/>}   />
 <Route  path="/showresults" element={< ShowResult/>} />

</Routes>

        </div>

    )
}