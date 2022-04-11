//menu!

const links = document.querySelectorAll('nav li');
links.forEach(link => {
  link.addEventListener('click', () => {
 if  (document.querySelector(".active") ) {document.querySelector(".active").classList.remove('active')};
    link.classList.add('active');
    
  })
} )


window.addEventListener('load', function () {
  if (window.location.hash.length > 1) {
    if  (document.querySelector(".active") ) {
      document.querySelectorAll(".active").forEach(el => {el.classList.remove('active')})
    };
    document.querySelector(`nav a[href*='${window.location.hash}']`).closest('li').classList.add('active')
    }
    else {
      window.location.hash = "#hypercomics"
    }
})

window.addEventListener('hashchange', function () {
  if  (document.querySelector(".active") ) {document.querySelector(".active").classList.remove('active')};
  document.querySelector(`nav a[href*='${window.location.hash}']`).closest('li').classList.add('active')
});


