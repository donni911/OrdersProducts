import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faClock,
  faUsers,
  faBars,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(faClock, faUsers, faBars, faTrash);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("icon", FontAwesomeIcon, {});
});
