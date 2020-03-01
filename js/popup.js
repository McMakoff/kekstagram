'use strict';

(function() {
    var fileChooser = document.querySelector('#upload-file');
    var uploadOverlay = document.querySelector('.upload-overlay');
    var uploadCancel = uploadOverlay.querySelector('#upload-cancel');
    var preview = document.querySelector('.effect-image-preview');
    var ESC_PRESS = 27;
    var ENTER_PRESS = 13;
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

    var onPopupEscPress = function(e) {
        if(e.keyCode === ESC_PRESS) {
            closePopup();
        }
    };

    var openPopup = function() {
        uploadOverlay.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEscPress)
    };

    var closePopup = function() {
        uploadOverlay.classList.add('hidden');
        uploadFile.value = '';
        document.removeEventListener('keydown', onPopupEscPress)
    };

    fileChooser.addEventListener('change', function() {
      var file = fileChooser.files[0];
      var fileName = file.name.toLowerCase();
      var matches = FILE_TYPES.some(function(el) {
        return fileName.endsWith(el);
      });

      if(matches) {
        openPopup();
        var reader = new FileReader();

        reader.addEventListener('load', function() {
          preview.src = reader.result;
        });

        reader.readAsDataURL(file);
      }
    });

    uploadCancel.addEventListener('click', closePopup);

    uploadCancel.addEventListener('keydown', function(e) {
        if(e.keyCode === ENTER_PRESS) {
            closePopup();
        }
    });
})();