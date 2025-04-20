// Script of zoom Image

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Attach event to all eye icons
  document.querySelectorAll('.gallery-card a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const imgSrc = this.getAttribute('href');
      lightboxImg.src = imgSrc;
      lightbox.style.display = "flex";
    });
  });

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  }

