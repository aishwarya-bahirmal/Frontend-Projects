function filterCategory(category) {
  let items = document.querySelectorAll('.menu-item');
  
  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block'; // Show all items
    } else if (item.classList.contains(category)) {
      item.style.display = 'block'; // Show items of selected category
    } else {
      item.style.display = 'none'; // Hide items not of selected category
    }
  });
}
