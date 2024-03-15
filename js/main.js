
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

// 클랙식 샌드위치
const clasicEl = document.querySelector('.clasic');
const menuClasicEl = document.querySelector('.menu-clasic');
console.log(menuClasicEl);
clasicEl.addEventListener('click', function() {
  menuClasicEl.classList.toggle('hide');
});

// 프레쉬 샌드위치
const fleshEl = document.querySelector('.flesh');
const menuFleshEl = document.querySelector('.menu-flesh');
console.log(menuFleshEl);
fleshEl.addEventListener('click', function() {
  menuFleshEl.classList.toggle('hide');
});