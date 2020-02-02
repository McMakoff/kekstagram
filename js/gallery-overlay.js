(function() {
  window.onload = function(){
    var picturesContainer = document.querySelector('.pictures');

    picturesContainer.addEventListener('click', function(e) {
      e.preventDefault();
      if(e.target.tagName === 'IMG') {
        console.log(e.target.closest('.picture'));
      }
    });

    /*for (var i = 0; i < pictures.length; i++) {
      pictures[i].addEventListener('click', function(event) {
        debugger;
        alert('rerfr');
        event.preventDefault();
      });
    }*/
  }
})();