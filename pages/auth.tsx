import React from "react";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

const uiConfig = {
    signInSuccessUrl:"/",
    signInOptions:[firebase]

}