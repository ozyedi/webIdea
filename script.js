document.addEventListener('DOMContentLoaded', () => {
  // --- SLIDER ---
  const slides  = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-nav.prev');
  const nextBtn = document.querySelector('.slider-nav.next');
  const dots    = document.querySelectorAll('.dot');
  let current   = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    current = index;
  }

  function startAutoSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);
  }

  // İlk slaytı göster ve otomatik başlat
  showSlide(current);
  startAutoSlide();

  // Ok navigasyonu
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
    startAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
    startAutoSlide();
  });

  // Nokta navigasyonu
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      current = Number(dot.dataset.index);
      showSlide(current);
      startAutoSlide();
    });
  });

  // --- SABİT MENÜ GÖSTER/GİZLE ---
  const menu = document.querySelector('.scroll-menu');
  window.addEventListener('scroll', () => {
    menu.classList.toggle('visible', window.scrollY > 0);
  });

  // --- SMOOTH SCROLL + OFFSET ---
  const links = document.querySelectorAll(
    '.scroll-menu a[href^="#"], .slide-content a[href^="#"]'
  );

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl || !menu) return;

      const menuHeight = menu.offsetHeight;
      const elementY   = targetEl.getBoundingClientRect().top + window.pageYOffset;
      const targetY    = elementY - menuHeight;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });

      history.pushState(null, '', `#${targetId}`);
    });
  });
});



  // --- ScrollTop ---
var scrollTop = document.getElementById("scrollTop");

window.onscroll = function(){
    scrollfunction()
};
function scrollfunction(){

    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}

scrollTop.addEventListener("click", function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})


  // --- Call ScrollTop ---
$('#scrollTop').popup();