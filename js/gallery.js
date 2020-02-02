'use strict';

(function() {

  var images = [];
  var imagesCopy = [];
  var filters = document.querySelector('.filters');
  var filtersRadio = filters.querySelectorAll('.filters-radio');

  var onImagesFilter = function(filter) {
    switch (filter) {
      case 'popular':
        window.actualImages = imagesCopy.sort(function(left, right) {
          var diff = right.likes - left.likes;
          return diff === 0 ? right.comments.length - left.comments.length : diff;
        });
        window.render(window.actualImages);
        break;
      case 'discussed':
        window.actualImages = imagesCopy.sort(function(left, right){
          var diff = right.comments.length - left.comments.length;
          return diff === 0 ? right.likes - left.likes : diff;
        });
        window.render(window.actualImages);
        break;
      case 'random':
        window.actualImages = imagesCopy.sort(function(){
          return Math.random() - 0.5;
        });
        window.render(window.actualImages, 10);
        break;
      default:
        window.actualImages = images;
        window.render(window.actualImages);
        break;
    }
  };

  window.backend.load(function(data) {
    images = data;
    imagesCopy = images.slice();
    window.actualImages = imagesCopy;
    filters.classList.remove('hidden');
    window.render(window.actualImages);
  });

  for (var i = 0; i < filtersRadio.length; i++) {
    filtersRadio[i].addEventListener('change', function (eRadio) {
      var radiosValue = eRadio.currentTarget.value;
      onImagesFilter(radiosValue);
    });
  }
})();