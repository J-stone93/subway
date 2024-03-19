
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

// 샌드위치 

const menuNameEls = document.querySelectorAll('.menu-name li')
const menuContainerEls = document.querySelectorAll('.menu-container .menu-wrap')

menuNameEls.forEach((menuNameEl,index) => {
  menuContainerEls[index].style.display = 'none';
  menuContainerEls[0].style.display = 'flex';
  menuNameEls[index].addEventListener('click', () => {
    menuContainerEls.forEach((menuContainerEl) => {
      menuContainerEl.style.display = 'none';
      menuContainerEls[index].style.display = 'flex';
    })
  })
}); 


// 이벤트 슬라이드

var swiper = new Swiper(".swiper-event", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  slidesPerView: 1,
  spaceBetween: 100,
  loopAdditionalSlides : 1,
  loop : true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
