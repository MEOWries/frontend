// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
import axiosInstance from "../helpers/axiosHelper";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWljzAd51YQVH5UKyXWwx65QpiU2dQwOM",
  authDomain: "bloodrush-75407.firebaseapp.com",
  projectId: "bloodrush-75407",
  storageBucket: "bloodrush-75407.firebasestorage.app",
  messagingSenderId: "364825822803",
  appId: "1:364825822803:web:e3d460591411e647cee8a6",
  measurementId: "G-0HGB51QJPW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const messaging = getMessaging(app);

export const initNotifications = async (Uid) => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return;

  const token = await getToken(messaging, {
    vapidKey:
      "BC8J2cdbCTidFKnH9yTPii8RehcpykF4lpHc_ABtno6lw3VT6ahlf8FBe5dilE-0YZDe5LvwgfGu6hu28a5lKu4",
  });

  await axiosInstance.post(`/auth/users/${Uid}/fcm-token`, { token });
};
