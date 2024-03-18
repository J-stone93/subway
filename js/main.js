
new Swiper('.visual .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  },
  pagination: { // 페이지네이션 사용
    el: '.visual .swiper-pagination', // 페이지네이션 요소 선택자
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.visual .swiper-button-next',
    prevEl: '.visual .swiper-button-prev',
  },
});

// 유튜브 섹션 위에 애니메이션
gsap.to('.float1', 1.5, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: 15, // 수직으로 얼마나 움직일지 설정, transform: translateY(수치); 와 같음
  repeat: -1, // 몇 번 반복할지 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // 타이밍 함수 적용, 느리게-빠르게-느리게
});
gsap.to('.float2', 2, {
  delay: 0.5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

// 클랙식 샌드위치
// const clasicEl = document.querySelector('.clasic');
// const menuClasicEl = document.querySelector('.menu-clasic');
// console.log(menuClasicEl);
// clasicEl.addEventListener('click', function() {
//   menuClasicEl.classList.toggle('hide');
// });

// 프레쉬 샌드위치
// const fleshEl = document.querySelector('.flesh');
// const menuFleshEl = document.querySelector('.menu-flesh');
// console.log(menuFleshEl);
// fleshEl.addEventListener('click', function() {
//   menuFleshEl.classList.toggle('show');
// });

// 프리미엄 샌드위치


// const clasicEl = document.querySelector('.clasic');
// const menuClasicEl = document.querySelector('.menu-clasic');
// const fleshEl = document.querySelector('.flesh');
// const menuFleshEl = document.querySelector('.menu-flesh');
// const premiumEl = document.querySelector('.premium');
// const menuPremiumEl = document.querySelector('.menu-premium');
// const morningEl = document.querySelector('.morning');
// const menuMorningEl = document.querySelector('.menu-morning');



// const clasicEl = document.querySelector('.clasic');
// const menuClasicEl = document.querySelector('.menu-clasic');
// clasicEl.addEventListener('click', function(){
//   if (menuClasicEl.classList.contains('hidden')) {
//     menuClasicEl.classList.remove('hidden');
//   } else {
//     menuMorningEl.classList.add('hidden');
//     menuPremiumEl.classList.add('hidden');
//     menuFleshEl.classList.add('hidden');
//     menuClasicEl.classList.add('hidden');
//   }
// });
// const fleshEl = document.querySelector('.flesh');
// const menuFleshEl = document.querySelector('.menu-flesh');
// fleshEl.addEventListener('click', function(){
//   if (menuFleshEl.classList.contains('hidden')) {
//     menuFleshEl.classList.remove('hidden');
//     menuClasicEl.classList.add('hidden');
//   } else {
//     menuMorningEl.classList.add('hidden');
//     menuPremiumEl.classList.add('hidden');
//     menuFleshEl.classList.add('hidden');
//   } 
// });
// const premiumEl = document.querySelector('.premium');
// const menuPremiumEl = document.querySelector('.menu-premium');
// premiumEl.addEventListener('click', function(){
//   if (menuPremiumEl.classList.contains('hidden')) {
//     menuPremiumEl.classList.remove('hidden');
//   } else {
//     menuPremiumEl.classList.add('hidden');
//   } 
// });
// const morningEl = document.querySelector('.morning');
// const menuMorningEl = document.querySelector('.menu-morning');
// morningEl.addEventListener('click', function(){
//   if (menuMorningEl.classList.contains('hidden')) {
//     menuMorningEl.classList.remove('hidden');
//   } else {
//     menuMorningEl.classList.add('hidden');
//   } 
// });

// const clasicEl = document.querySelector('.clasic');
// const menuClasicEl = document.querySelector('.menu-clasic');
// clasicEl.addEventListener('click', function(){
//   menuClasicEl.classList.contains('hidden')
//   menuClasicEl.classList.remove('hidden')
//   menuFleshEl.classList.add('hidden')
//   menuPremiumEl.classList.add('hidden')
//   menuMorningEl.classList.add('hidden')
// });

// const fleshEl = document.querySelector('.flesh');
// const menuFleshEl = document.querySelector('.menu-flesh');
// clasicEl.addEventListener('click', function(){
//   menuFleshEl.classList.contains('hidden')
//   menuFleshEl.classList.remove('hidden')
//   menuClasicEl.classList.add('hidden')
//   menuPremiumEl.classList.add('hidden')
//   menuMorningEl.classList.add('hidden')
// });

// const premiumEl = document.querySelector('.premium');
// const menuPremiumEl = document.querySelector('.menu-premium');

// const morningEl = document.querySelector('.morning');
// const menuMorningEl = document.querySelector('.menu-morning');

