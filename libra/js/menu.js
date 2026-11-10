document.addEventListener('DOMContentLoaded', function() {
  function createMenuItem(item) {
    const typeIcon = item.type === 'spicy' ? '<i class="icon-spicy"></i>' : 
                     item.type === 'vegan' ? '<i class="icon-vegan"></i>' : '';
    
    return `
      <li class="menu_tab-list_item" ${item.type !== 'normal' ? `data-type="${item.type}"` : ''}>
        <div class="main h5">
          <a class="main_name" href="#">${typeIcon} ${item.name}</a>
          <span class="main_price">${item.price}</span>
        </div>
        <p class="description text--md">
          ${item.description}
        </p>
      </li>
    `;
  }

  function populateMenuSection(categoryId, items) {
    const menuList = document.querySelector(`#${categoryId}`);
    if (menuList) {
      menuList.innerHTML = items.map(item => createMenuItem(item)).join('');
    }
  }

  // Populate all menu sections
  populateMenuSection('starters', menuData.starters);
  populateMenuSection('breakfasts', menuData.breakfasts);
  populateMenuSection('desserts', menuData.desserts);
  populateMenuSection('beverages', menuData.beverages);
}); 