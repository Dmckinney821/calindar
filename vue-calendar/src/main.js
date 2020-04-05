import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';

import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyAXPny8G4CSVTehPcACSH-PapliLxNT_bQ",
    authDomain: "vue-cal-30482.firebaseapp.com",
    databaseURL: "https://vue-cal-30482.firebaseio.com",
    projectId: "vue-cal-30482",
    storageBucket: "vue-cal-30482.appspot.com",
    messagingSenderId: "597221213112",
    appId: "1:597221213112:web:2c76e040fd482e5ef6454d"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
