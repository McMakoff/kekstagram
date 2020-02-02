'use strict';

(function() {
  var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
  var pictureContainer = document.querySelector('.pictures');

  window.render = function(data, quantity = data.length > 25 ? 25 : data.length) {
    pictureContainer.innerHTML = '';
    for (let i = 0; i <= quantity; i++) {
      let imagesBackgroundElement = pictureTemplate.cloneNode(true);
      imagesBackgroundElement.querySelector('img').src = data[i].url;
      imagesBackgroundElement.querySelector('.picture-comments').textContent = data[i].comments.length;
      imagesBackgroundElement.querySelector('.picture-likes').textContent = data[i].likes;
      pictureContainer.appendChild(imagesBackgroundElement);
    }
  };
})();