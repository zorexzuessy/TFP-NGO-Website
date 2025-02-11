// gallery.js

// Sample data structure for gallery items
const galleryData = {
  2024: [
    { src: "./Batch 2024/batch20241.png", caption: "" },
    { src: "./Batch 2024/batch20242.jpg", caption: "" },
    // ... more images
  ],
  // ... other years
};

// Generate filter squares
function createFilters() {
  const filterContainer = document.querySelector('.gallery-filters');
  filterContainer.innerHTML = '<div data-filter="all" class="filter-square">All</div>'; // Add "All" filter

  Object.keys(galleryData).forEach(year => {
    const filterSquare = document.createElement('div');
    filterSquare.className = 'filter-square';
    filterSquare.setAttribute('data-filter', year);
    filterSquare.innerHTML = `<span class="year">${year}</span>`;
    filterContainer.appendChild(filterSquare);
  });
}

// Generate gallery items
function createGalleryItems(filter = 'all') {
  const galleryGrid = document.querySelector('.gallery-grid');
  galleryGrid.innerHTML = '';

  const items = filter === 'all' ? Object.values(galleryData).flat() : galleryData[filter];
  items.forEach(item => addGalleryItem(item, galleryGrid));
}

// Helper function to create individual gallery items
function addGalleryItem(item, container) {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  galleryItem.innerHTML = `
    <a href="${item.src}" data-fancybox="gallery" data-caption="" class="gallery-link">
      <img src="${item.src}" alt="" class="gallery-image">
      <div class="image-overlay"><span class="image-caption"></span></div>
    </a>
  `;
  container.appendChild(galleryItem);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  createFilters();
  createGalleryItems();

  document.querySelector('.gallery-filters').addEventListener('click', (e) => {
    const filterSquare = e.target.closest('.filter-square');
    if (filterSquare) {
      document.querySelectorAll('.filter-square').forEach(square => square.classList.remove('active'));
      filterSquare.classList.add('active');
      createGalleryItems(filterSquare.getAttribute('data-filter'));
    }
  });

  // Initialize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {});
});