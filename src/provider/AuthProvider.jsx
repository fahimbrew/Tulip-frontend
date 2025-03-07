import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const provider = new GoogleAuthProvider();
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const update = (username, image) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: image,
    });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = {
    signUp,
    update,
    user,
    login,
    logout,
    loader,
    googleSignIn,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
