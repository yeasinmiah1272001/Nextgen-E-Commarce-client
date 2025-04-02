import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.Config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // saved user db
  const savedUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: "user",
      status: "veryfied",
    };
    const { data } = await axios.put(
      "https://next-gen-ecommarce-server.vercel.app/users",
      currentUser
    );
    // console.log("data", data);
    return data;
  };

  // token genarate
  const getToken = async (user) => {
    const email = user?.email;
    const { data } = await axios.post(
      "https://next-gen-ecommarce-server.vercel.app/jwt",
      email
    );
    if (data.token) {
      console.log("token", data.token);
      localStorage.setItem("token", data.token);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        savedUser(currentUser);
        getToken(currentUser);
        setLoading(false);
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }

      console.log("currentUser", currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    updateUserProfile,
    logout,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
