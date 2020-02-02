'use strict';

(function() {
    var hashTagInput = document.querySelector('.upload-form-hashtags');
    hashTagInput.addEventListener('change', function() {
        var hashTagInputValue = hashTagInput.value.split('#');
        hashTagInputValue.splice(0, 1);
        for(var i = 0; i < hashTagInputValue.length; i++) {
            if (hashTagInputValue[i].length > 25) {
                hashTagInput.setCustomValidity('Длина хештега превышает 20 символов');
                break;
            } if (hashTagInputValue[i].length < 2) {
                hashTagInput.setCustomValidity('Длина хештега меньше 2 символов');
                break;
            } else {
                hashTagInput.setCustomValidity(``);
            }
        }
    });
})();

