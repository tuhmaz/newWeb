(function(){const f=document.querySelector(".layout-navbar"),r=document.getElementById("hero-animation"),o=document.querySelectorAll(".hero-dashboard-img"),i=document.querySelectorAll(".hero-elements-img"),c=document.getElementById("swiper-clients-logos"),d=document.getElementById("swiper-reviews"),l=document.getElementById("reviews-previous-btn"),u=document.getElementById("reviews-next-btn"),m=document.querySelector(".swiper-button-prev"),p=document.querySelector(".swiper-button-next"),n=document.querySelector(".price-duration-toggler"),w=[].slice.call(document.querySelectorAll(".price-monthly")),y=[].slice.call(document.querySelectorAll(".price-yearly"));screen.width>=1200&&r&&(r.addEventListener("mousemove",function(t){i.forEach(e=>{e.style.transform="translateZ(1rem)"}),o.forEach(e=>{const s=(window.innerWidth-2*t.pageX)/100,a=(window.innerHeight-2*t.pageY)/100;e.style.transform=`perspective(1200px) rotateX(${a}deg) rotateY(${s}deg) scale3d(1, 1, 1)`})}),f.addEventListener("mousemove",function(t){i.forEach(e=>{e.style.transform="translateZ(1rem)"}),o.forEach(e=>{const s=(window.innerWidth-2*t.pageX)/100,a=(window.innerHeight-2*t.pageY)/100;e.style.transform=`perspective(1200px) rotateX(${a}deg) rotateY(${s}deg) scale3d(1, 1, 1)`})}),r.addEventListener("mouseout",function(){i.forEach(t=>{t.style.transform="translateZ(0)"}),o.forEach(t=>{t.style.transform="perspective(1200px) scale(1) rotateX(0) rotateY(0)"})})),d&&new Swiper(d,{slidesPerView:1,spaceBetween:0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,loopAdditionalSlides:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:3},992:{slidesPerView:2}}}),document.addEventListener("DOMContentLoaded",function(){function t(){n&&n.checked?(y.forEach(e=>e.classList.remove("d-none")),w.forEach(e=>e.classList.add("d-none"))):(y.forEach(e=>e.classList.add("d-none")),w.forEach(e=>e.classList.remove("d-none")))}u&&p&&u.addEventListener("click",function(){p.click()}),l&&m&&l.addEventListener("click",function(){m.click()}),c&&new Swiper(c,{slidesPerView:2,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{992:{slidesPerView:5},768:{slidesPerView:3}}}),n&&(t(),n.addEventListener("change",t))})})();
