'use strict';
(function() {
    var form = document.querySelector('.upload-form');
    form.addEventListener('submit', function(e) {
        window.backend.save(new FormData(form), function(response){
            form.classList.add('hidden');
        });
        e.preventDefault();
    });
})();