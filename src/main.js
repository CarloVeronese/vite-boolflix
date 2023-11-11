import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faStar as faStarSolid, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
library.add(faStarSolid, faStarRegular, faChevronRight, faChevronLeft);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
