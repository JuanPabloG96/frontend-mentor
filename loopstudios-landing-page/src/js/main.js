import { cardTemplate } from "./constants.js";
import { manageDropMenu, useFetch, setCardsOnScreenChange } from "./utils.js";

const cardContainer = document.querySelector('.card-container');
const openCloseBtn = document.querySelectorAll('.open-close-btn');
const dropMenu = document.querySelector('.dropdown-menu');
const menuLinks = document.querySelectorAll('.menu-link');

const path = 'src/json/creationData.json';
const cardData = await useFetch(path);
const mobileData = cardData.mobile
const desktopData = cardData.desktop

manageDropMenu(openCloseBtn, menuLinks, dropMenu);
setCardsOnScreenChange(mobileData, desktopData, cardContainer, cardTemplate);

window.addEventListener('resize', () => {
  setCardsOnScreenChange(mobileData, desktopData, cardContainer, cardTemplate);
});