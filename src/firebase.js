import firebase from 'firebase'

export const init = () => {
    var config = {
        apiKey: "AIzaSyCK4qBLbIUGCXf937tMgnzWy5kr_Bgqmwg",
        authDomain: "moneydi-f61bd.firebaseapp.com",
        databaseURL: "https://moneydi-f61bd.firebaseio.com",
        projectId: "moneydi-f61bd",
        storageBucket: "moneydi-f61bd.appspot.com",
        messagingSenderId: "710399914064"
    };
    firebase.initializeApp(config);
};