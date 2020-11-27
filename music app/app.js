//윈도우에 이벤트 리스너 추가 'load'되면 함수가 에로우 실행되게
//html모든 오디오태그에sound class가 추가 되어있어야함
//쿼리셀렉터올 로 모든 오디오 태그 불러와서 묶어준다
//querySelectorAll로 모든 오디오의 부모 태그 불러옴

//소리나게 하기
//각각의 패드에 동작할 함수를 만든다 매개변수를 pad와 인덱스로 받아온다
// 패드에는 이벤트 리스너를 준다 클릭했을때 사운드는 인덱스 번호와 같다 그걸 플래이해줌
// 플래이 앞에 사운드의 현재 시간을 항상 0으로 리셋해준다

//비쥬얼 색 부분
//쿼리셀렉터로 비쥬얼 부분 불러옴 
//색 선언하고 배열로 색깔 정보 넣어줌
//버블을 만들어주는 함수 하나를 만들어줌
// 그안에 버블이라는 변수를 하나 만든다 document.createElement('div') --버블이 될 div
//이걸 비쥬얼 안에 appendChild 메소드로 넣어줌
//버블의 색을 바꿔주자 .style.backgroundColor = colors[index]
//index를 받아오려면 함수의 매개 변수에 인덱스를 담아주고 
//소리나게하는 함수안에서 이 함수를 실행하고(index를 넣어준다)--이럼 연결됨
//버블의 스타일 애니메이션을 설정해준다
//css가서 애니메이션 설정후 버블모양 만들어주기

//버블을 누를떄마다 div가 엄청 생김이걸 해결하기위해
//버블에 이벤트 리스너만들고 animationend 일떄 함수 설정
//함수 --visual.removeChild(this)

window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound'),
            pads = document.querySelectorAll('.pads div'),
            visual = document.querySelector('.visual'),
            colors = [
                "palevioletred",
                "palegreen",
                "lightseagreen",
                "gold",
                "cornflowerblue",
                "rgb(92, 76, 196)"
            ];

    //lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function (){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    //create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease'; 
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };



});