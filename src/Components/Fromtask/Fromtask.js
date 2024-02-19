import { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from "../Landing Page/LandingPage";
import SignupForm from "../SingUp/SingupForm";
import LoginForm from "../Login/Login";
import Home from "../HomePage/Home";


function Fromtask() {
  const [user,setUser]=useState(null);

  return (
    <div>
        <Router>
           <LandingPage user={user} setUser={setUser}/>
           <Routes>
            <Route path="/" Component={Home} />
            <Route path="/singup" Component={()=><SignupForm setUser={setUser}/>}/>
            <Route path="/login" Component={()=><LoginForm setUser={setUser}/>}/>
           </Routes>
        </Router>
        
       
       
    </div>
  );
}

export default Fromtask;
