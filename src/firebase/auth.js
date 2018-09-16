import { auth } from "./firebase";

//To Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);

//To Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// To Sign Out
export const doSignOut = () => auth.signOut();

// To Reset Password
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// To Change Password
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
