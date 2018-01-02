import firebase from 'firebase'

export const init = () => {
    const configDev = {
        apiKey: "AIzaSyCK4qBLbIUGCXf937tMgnzWy5kr_Bgqmwg",
        authDomain: "moneydi-f61bd.firebaseapp.com",
        databaseURL: "https://moneydi-f61bd.firebaseio.com",
        projectId: "moneydi-f61bd",
        storageBucket: "moneydi-f61bd.appspot.com",
        messagingSenderId: "710399914064"
    };
    const configProd = {
        apiKey: "AIzaSyChvM_r7NS8ffNCaMEIB8H2gY9HJAfKc-o",
        authDomain: "moneydi-5556d.firebaseapp.com",
        databaseURL: "https://moneydi-5556d.firebaseio.com",
        projectId: "moneydi-5556d",
        storageBucket: "moneydi-5556d.appspot.com",
        messagingSenderId: "196389492792"
    };
    firebase.initializeApp(configProd);
};