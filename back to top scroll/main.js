
        /*
         * - 변수 지정하기
         * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
         * - 스크롤과 클릭 이벤트 작성하기
         */
const btn = document.getElementById('back-to-top'),
    docEl = document.documentElement;
    //문서자체의 길이
  let offset, 
        scrollPos,
        docHeight;
       
        // 문서 높이 계산하기
        docHeight = Math.max(docEl.scrollHeight,docEl.offsetHeight);
         //scrollHeight 와 offsetHeight;
        
        if(docHeight !== 0){
            offset = docHeight / 4;
        }; 

        //문서의 높이가 0이 아니면 offset의 값은 전체길이의 4분의1
  // 스크롤 이벤트 추가
  window.addEventListener('scroll',function(){
    scrollPos = docEl.scrollTop;
    //실시간 스크롤양 확인

   
    btn.className = (scrollPos > offset) ? 'visible' : '';
// 버튼에 클래스 네임은 스크롤 양이 옵셋보다 많아? 
// 그럼 visible이고 아니면 빈값
  });

   // 클릭 이벤트 추가

   btn.addEventListener('click', function(e){
    e.preventDefault();
    scrollToTop();
   });
        

function scrollToTop(){
    // 일정시간마다 할일
    // let scrollInterval = setInterval(할일, 시간);
    //time=0.0015 = 15ms
    //  할일 = function(){
    //      //스크롤 양이 0이 아닐때
    //     //  window.scrollBy(x,y); x=0 y=-55
    //     //위로 올리는 것15ms마다 -55씩올라감
            //스크롤 양이 0이면
            //clearInterval(scrollInterval);
    //  }
    
    let scrollInterval = setInterval(function(){
        if(scrollPos !== 0){
         window.scrollBy(0, -55);
        } else {
         clearInterval(scrollInterval);
        };
    }, 15);
    
};
