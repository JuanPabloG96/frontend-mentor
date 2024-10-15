export const cardTemplate = (id, src, content) => {
  return `<picture class="card-picture" key="${id}">
  <img src="${src}" alt="${content} image" class="creation-img" width="100%">
  <h2 class="card-title">${content}</h2>
</picture>`
}