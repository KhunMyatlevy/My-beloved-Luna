// gallery.js
const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close');
const modalCaption = document.getElementById('modal-caption');

// Function to open modal with the clicked image
function openModal(src, alt) {
    modal.style.display = 'block'; // Show the modal
    modalImg.src = src; // Set the source of the modal image
    modalCaption.textContent = alt; // Set the caption
}

// Function to close the modal
function closeModalFunction() {
    modal.style.display = 'none'; // Hide the modal
}

// Add click event listeners to all gallery images
galleryImages.forEach(img => {
    img.addEventListener('click', () => openModal(img.src, img.alt));
});

// Event listener to close the modal when the close button is clicked
closeModal.addEventListener('click', closeModalFunction);
