(function() {
    var picturesContainer = document.querySelector('.pictures');
    var galleryOverlay = document.querySelector('.gallery-overlay');
    var galleryOverlayImg = galleryOverlay.querySelector('.gallery-overlay-image');
    var galleryOverlayComments = galleryOverlay.querySelector('.comments-count');
    var galleryOverlayLikes = galleryOverlay.querySelector('.likes-count');
    var galleryOverlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
    picturesContainer.addEventListener('click', function(e) {
      e.preventDefault();
      if(e.target.tagName === 'IMG') {
        var index = [e.target.getAttribute('data-index')];
        galleryOverlayImg.src = window.actualImages[index].url;
        galleryOverlayComments.textContent = window.actualImages[index].comments.length;
        galleryOverlayLikes.textContent = window.actualImages[index].likes;
        galleryOverlay.classList.remove('hidden');
      }
    });
  galleryOverlayClose.addEventListener('click', function() {
    galleryOverlay.classList.add('hidden');
  });
})();