
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import firebaseConfig from "./firebaseConfig";

const apps = getApps();
if (!apps.length) {
  initializeApp(firebaseConfig);
}

export const analytics = isSupported().then(yes => yes ? getAnalytics() : null);
