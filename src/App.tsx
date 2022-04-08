import { Navbar } from "components";
import Details from "pages/Details";
import Home from "pages/Home";
import LogIn from "pages/LogIn";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "context/AuthProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase.config";

function App() {
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState({ name: user.displayName, photo: user.photoURL });
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {authState.name ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/details/:slug" element={<Details />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LogIn />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
