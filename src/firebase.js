// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDulPb2z9_TljO6nCzUVAPX-YMQK3yhdwQ",
  authDomain: "where-is-waldo-3e1e5.firebaseapp.com",
  projectId: "where-is-waldo-3e1e5",
  storageBucket: "where-is-waldo-3e1e5.appspot.com",
  messagingSenderId: "325872712843",
  appId: "1:325872712843:web:e06353c0205e988312a88e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get data from firestore (percentage of the character on the screen)
export const getPercentageData = async (character, location) => {
  console.log(character);
  let collectionRef = collection(db, "characters");
  let characterRef = doc(collectionRef, character);
  let locationRef = collection(characterRef, "location");
  let percentageRef = doc(locationRef, "percentage");
  let percentage = await getDoc(percentageRef);
  percentage = percentage.data();

  return percentage[location];
};
