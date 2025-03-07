import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  const authInfo = {
    signUp,
    update,
    user,
    login,
    logout,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
