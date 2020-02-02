'use strict';

(function() {
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadEffectLevel = uploadOverlay.querySelector('.upload-effect-level');
  var uploadEffectLevelLine = uploadEffectLevel.querySelector('.upload-effect-level-line');
  var pin = uploadEffectLevel.querySelector('.upload-effect-level-pin');
  var uploadEffectLevelVal = uploadEffectLevel.querySelector('.upload-effect-level-val');
  var uploadRadios = uploadOverlay.querySelectorAll('input[name=effect]');
  var effectImagePreview = uploadOverlay.querySelector('.effect-image-preview');

  var levelLineStart = 0;
  var levelLineEnd = 455;
  var uploadRadiosValue = 'none';
  var pinVal = pin.offsetLeft;
  var maxInvert = 100;
  var maxBlur = 10;
  var brightness = 10;

  var changeFilter = function (filter) {
    switch(filter) {
      case 'none':
        effectImagePreview.style.filter = 'none';
        break;
      case 'chrome':
        effectImagePreview.style.filter = `grayscale(${pinVal / levelLineEnd})`;
        break;
      case 'sepia':
        effectImagePreview.style.filter = `sepia(${pinVal / levelLineEnd})`;
        break;
      case 'marvin':
        effectImagePreview.style.filter = `invert(${pinVal * maxInvert / levelLineEnd}%)`;
        break;
      case 'phobos':
        effectImagePreview.style.filter = `blur(${pinVal * maxBlur / levelLineEnd}px)`;
        break;
      case 'heat':
        effectImagePreview.style.filter = `brightness(${pinVal * brightness / levelLineEnd})`;
        break;

    }
    filter === 'none' ? uploadEffectLevel.classList.add('visibility-hidden') : uploadEffectLevel.classList.remove('visibility-hidden');
  };

  for (var r = 0; r < uploadRadios.length; r++) {
    uploadRadios[r].addEventListener('change', function (eRadio) {
      uploadRadiosValue = eRadio.currentTarget.value;
      changeFilter(uploadRadiosValue);
    });
  }

  var onClickFilterLine = function (eClick) {
    var shift = eClick.clientX - pin.getBoundingClientRect().left;
    pinVal = pin.offsetLeft + shift - 9;
    pin.style.left = pinVal + 'px';
    uploadEffectLevelVal.style.width = pinVal + 'px';
    changeFilter(uploadRadiosValue);
  };

  uploadEffectLevelLine.addEventListener('click', onClickFilterLine);

  pin.addEventListener('mousedown', function (eDown) {
    var dragged = false;
    var startCoords = eDown.clientX;
    var onMouseMove = function(eMove) {
      dragged = true;
      var shift = eMove.clientX - startCoords;
      pinVal = pin.offsetLeft + shift;

      if (pinVal <= levelLineStart) {
        pinVal = levelLineStart;
      } else if(pinVal >= levelLineEnd) {
        pinVal = levelLineEnd;
      }

      startCoords = eMove.clientX;
      pin.style.left = pinVal + 'px';
      uploadEffectLevelVal.style.width = pinVal + 'px';
      changeFilter(uploadRadiosValue);
    };

    var onMouseUp = function() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();