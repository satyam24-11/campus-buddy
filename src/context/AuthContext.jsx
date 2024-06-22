import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, googleProvider } from "../lib/firebase";
import { setDoc, doc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});


  const signInWithGoogle = async () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
      return await signOut(auth);
  };

  useEffect(() => {
    // Create a subscription to the auth state change events.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the state variable with the current user.
      setUser(currentUser);
    });

    // Return a function that unsubscribes from the auth state change events.
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider
      value={{ signInWithGoogle, logOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
