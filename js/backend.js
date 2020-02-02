'use strict';
(function(){
  var URL_UPLOAD = 'https://js.dump.academy/kekstagram';
  var URL_LOAD = 'https://js.dump.academy/kekstagram/data';
  var SUCCESS_STATUS = 200;

  var config = function (onSuccess) {
    var timeOutError = 'Время истекло';
    var onError = function(status, txt) {
      alert(`Произошла ошибка ${status} ${txt}`);
    };
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 2000;
    xhr.addEventListener('load', function() {

      if(xhr.status === SUCCESS_STATUS) {
        onSuccess(xhr.response);
      } else {
        onError(xhr.status, xhr.statusText);
      }
    });
    xhr.addEventListener('error', function() {
      onError(xhr.status, xhr.statusText);
    });
    xhr.addEventListener('timeout', function() {
      alert(timeOutError);
    });
    return xhr;
  };


  window.backend = {
    save: function (data, onSuccess) {
      var xhr = config(onSuccess);
      xhr.open('POST', URL_UPLOAD);
      xhr.send(data);
    },
    load: function(onSuccess) {
      var xhr = config(onSuccess);
      xhr.open('GET', URL_LOAD);
      xhr.send();
    }
  }
})();