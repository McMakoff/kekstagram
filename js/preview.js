(function() {
  var fileChooser = document.querySelector('.upload-file');
  var preview = document.querySelector('.effect-image-preview');
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  fileChooser.addEventListener('change', function() {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();
    var matches = FILE_TYPES.some(function(el) {
      return fileName.endsWith(el);
    });

    if(matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function() {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();