import { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { Dashboard } from "../Body/Dashboard";
import { SignIn } from "../SignInForm/SignInForm";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../Context/MainContext";


function GoogleSignIn() {
  const {user,setUser} = useContext(MainContext)
  // const [user, setUser] = useState({});

  const [isShow, setIsShow] = useState(false)


    const navigate = useNavigate();



  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token" + response.credential);

    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    setIsShow(true);
  }

 

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
        "38111871990-vrga13euflrsjnnjclbkf56upg3dnpb7.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    
  }, []);

  // const handleRedirect=()=>{
  //   navigate("/dashboard");
  // }
  useEffect(()=>{
    if(Object.keys(user).length !== 0){     
      navigate("/dashboard")
    }
  })
  

  return (
    <div className="App">
      <div id="signInDiv"></div>
       {/* {Object.keys(user).length !== 0 && (
          <>
            <Dashboard user={user} setUser={setUser}/> 
          </>
         
      )
    } */}
    </div>
  );
}

export default GoogleSignIn;
