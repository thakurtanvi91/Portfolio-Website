$.get("index.html", function(data){
  $("#loading").replaceWith(data);
});


$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( ".loader-wrapper" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".loader-wrapper" ).remove(); //makes page more lightweight 
  });   
}

document.querySelector('button').addEventListener('click', function(evt) {
  this.textContent = this.textContent === 'hide' ? 'show' : 'hide';
  document.querySelector('html').classList.toggle('loading');
}, false);