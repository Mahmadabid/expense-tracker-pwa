import firebase from "./firebase";

const messaging = firebase.messaging();

export function getNotifications() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("TOKEN", currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}