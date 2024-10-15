function toggleMenu(dropMenu) {
  dropMenu.classList.toggle('show-menu');
  document.body.classList.toggle('lock-body');
  window.scrollTo(0, 0);
}

function closeMenu(dropMenu) {
  dropMenu.classList.remove('show-menu');
  document.body.classList.remove('lock-body');
}

function setCards(data, container, template) {
  let temp = '';
  data.map(card => {
    temp += template(card.id, card.src, card.content)
  })
  container.innerHTML = temp;
}

export function manageDropMenu(openCloseBtn, menuLinks, dropMenu) {
  openCloseBtn.forEach(btn => {
    btn.addEventListener('click', () => { toggleMenu(dropMenu) })
  })

  menuLinks.forEach(link => {
    link.addEventListener('click', () => { closeMenu(dropMenu) })
  })
}

export async function useFetch(url) {
  const response = await fetch(url);
  return await response.json();
}

export function setCardsOnScreenChange(mobileData, desktopData, cardContainer, cardTemplate) {
  const changeSize = 752;
  cardContainer.innerHTML = ""
  if (window.innerWidth <= changeSize) {
    setCards(mobileData, cardContainer, cardTemplate)
  }
  else {
    setCards(desktopData, cardContainer, cardTemplate)
  }
}