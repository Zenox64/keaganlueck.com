function redirectToIndex() {
    sessionStorage.removeItem('needsRedirect');
    window.location.replace('index.html');
}
const needsRedirect = sessionStorage.getItem('needsRedirect') || false;

if (needsRedirect) {
  redirectToIndex();
}
else {
  sessionStorage.setItem('needsRedirect', true);
} 
window.addEventListener('keydown', function(e){
      const key = e.which || e.keyCode;
      if (key === 27) {
          redirectToIndex();
      }
  }) 