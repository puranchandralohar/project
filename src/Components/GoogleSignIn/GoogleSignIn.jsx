import { useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";

function GoogleSignIn() {
  const { user, setUser, usertype, setUsertype, isLoggedin, setIsLoggedIn } =
    useContext(MainContext);

  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
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

  useEffect(() => {
    if (Object.keys(user).length !== 0 && usertype === "Trainer") {
      navigate("/dashboard");
    }
    if (Object.keys(user).length !== 0 && usertype === "Student") {
      navigate("/users");
    }
    setIsLoggedIn(true);

    localStorage.setItem("User", JSON.stringify(user));
  });

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default GoogleSignIn;
