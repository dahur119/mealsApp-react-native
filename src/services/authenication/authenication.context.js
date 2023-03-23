import React, { createContext, useState, useEffect } from "react";

import firebase from "./authenication.services";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUsers(authUser);
        setIsLoading(false);
      } else {
        // User is signed out
        setUsers(null);
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  function handleLogin(email, password) {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // setUsers(user);
        setIsLoading(false);

        // ...
      })
      .catch((err) => {
        setError(err.toString());
      });
  }

  // const handleLogin = async (email, password) => {
  //   try {
  //     await  auth().signInWithEmailAndPassword(email, password);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSignUp = (email, password, confirmPassword) => {
    setIsLoading(true);
    if (password !== confirmPassword) {
      setError("Error: password does not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUsers(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then((u) => {
        setUsers(u);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        handleLogin,
        handleSignUp,
        error,
        isLoading,
        users,
        handleLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
