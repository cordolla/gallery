import  { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAs7FEJq-NWbkF5rEovF8ODQzBmiEE-vPE",
  authDomain: "gallerycordollats.firebaseapp.com",
  projectId: "gallerycordollats",
  storageBucket: "gallerycordollats.appspot.com",
  messagingSenderId: "660290740299",
  appId: "1:660290740299:web:5a27cfed9599be5f52adce"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);