import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector("ul.gallery");
for (const item of galleryItems) {
    const contentHtml = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
    gallery.insertAdjacentHTML("beforeend", contentHtml);
};

const originalPhoto = document.querySelectorAll("a.gallery__link");
originalPhoto.forEach(function (photo) {
    photo.addEventListener("click", (event) => {
        event.preventDefault();
        const itemOriginal = event.currentTarget.href;
        const instance = basicLightbox.create(`
        <img src="${itemOriginal}" width="800" height="600">`);
        instance.show();
        document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (instance.visible()) {
            instance.close();
            }
    }
        });
        return false;
    })    
});

console.log(galleryItems);