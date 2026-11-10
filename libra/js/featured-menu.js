document.addEventListener('DOMContentLoaded', function() {
  function createFeaturedMenuItem(item) {
    return `
      <div class="presentation_slider-slide swiper-slide">
        <a class="link" href="#">
          <div class="media">
            <picture>
              <source data-srcset="${item.image}" srcset="${item.image}" type="image/webp" />
              <img 
                class="lazy"
                data-src="${item.image}"
                src="${item.image}"
                alt="${item.name}"
              />
            </picture>
          </div>
          <div class="main">
            <span class="main_price h5">${item.price}</span>
            <span class="main_title h5">${item.name}</span>
            <p class="main_ingredients text--md text--medium">
              ${item.description}
            </p>
          </div>
        </a>
      </div>
    `;
  }

  function populateFeaturedMenu() {
    const presentationSlider = document.querySelector('.presentation_slider .swiper-wrapper');
    if (presentationSlider) {
      presentationSlider.innerHTML = featuredMenuData.presentation
        .map(item => createFeaturedMenuItem(item))
        .join('');
    }
  }

  populateFeaturedMenu();
}); 