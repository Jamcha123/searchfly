import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'

const config = {
    apiKey: "",
    authDomain: "searchly-97fb1.firebaseapp.com",
    projectId: "searchly-97fb1",
    storageBucket: "searchly-97fb1.firebasestorage.app",
    messagingSenderId: "608430859369",
    appId: "1:608430859369:web:84703586885232cc5daef8",
    measurementId: "G-HCT3NL7VC6"
}

const app = initializeApp(config)

const appcheck  = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LcSf3MrAAAAAAHTrnIbDy0nyv_ZBMJZuOLQWL4X"), 
    isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app)
auth.useDeviceLanguage()

signInAnonymously(auth)

onAuthStateChanged(auth, (user) => {
    if(user == null){
        console.log("user, not found")
    }else{
        console.log("user, logged in")
    }
})