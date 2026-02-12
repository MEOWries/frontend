importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyAWljzAd51YQVH5UKyXWwx65QpiU2dQwOM",
  authDomain: "bloodrush-75407.firebaseapp.com",
  projectId: "bloodrush-75407",
  messagingSenderId: "364825822803",
  appId: "1:364825822803:web:e3d460591411e647cee8a6",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo.png",
  });
});
