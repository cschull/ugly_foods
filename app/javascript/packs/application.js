// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------
// External imports
import "bootstrap";
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initChatroomCable } from '../channels/chatroom_channel.js';
import { initMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete.js';
import { initAutocompleteFlowers } from '../plugins/init_autocomplete.js';
import { initHideSelection } from '../plugins/init_autocomplete.js';
import { initFilters } from '../plugins/init_filters';
import { initFiltersTwo } from '../plugins/init_filters';
import { initFiltersThree } from '../plugins/init_filters';
import { initFiltersFive } from '../plugins/init_filters';
import { initFiltersSix } from '../plugins/init_filters';
import { initFiltersSeven } from '../plugins/init_filters';
import { initCartAnim } from '../plugins/init_cart_animation';
import { initIntersectionObserver  } from '../plugins/init_scroll';
// import { initLandingPage } from '../plugins/init_landing_page'




document.addEventListener('turbolinks:load', () => {

  initMapbox();
  initAutocomplete();
  initAutocompleteFlowers();
  // initHideSelection();
  initFilters();
  initFiltersTwo();
  initFiltersThree();
  // initLandingPage();
  initFiltersFive();
  initFiltersSix();
  initFiltersSeven();
  initIntersectionObserver();

  initCartAnim();
})

  initChatroomCable();
