// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// import { createApp } from "vue";
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// const app = createApp(App);
// app.use(VueAxios)
// app.use(axios)

// app.mount("#app");

import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);

// Axios를 Vue 프로토타입에 등록하여 전역으로 사용할 수 있도록 설정
app.config.globalProperties.$axios = axios;

app.mount('#app');
