'use strict';

(function() {
    var uploadFile = document.querySelector('#upload-file');
    var uploadOverlay = document.querySelector('.upload-overlay');
    var uploadCancel = uploadOverlay.querySelector('#upload-cancel');
    var ESC_PRESS = 27;
    var ENTER_PRESS = 13;

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

    uploadFile.addEventListener('change', openPopup);

    uploadCancel.addEventListener('click', closePopup);

    uploadCancel.addEventListener('keydown', function(e) {
        if(e.keyCode === ENTER_PRESS) {
            closePopup();
        }
    });
})();