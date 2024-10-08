import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/store'
// 스토어 가지고 오기

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 사용할 아이콘 불러오기
import { faBarsStaggered, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// 아이콘 등록하기
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App)
// 가지고 온 스토어를 연결해주기
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')