
const texts  = ['puppu', 'lunch', 'kiss'];

let count = 0;
//text 의 각 단어개수
let index = 0;
//각 단어의 글자
let currentText = '';
let letter = '';

//typing effect

(function type(){
 
    if (count === texts.length) {
        count = 0;
    }
    //각 단어가 끝나면 다음단어로 넘어가는 것

    currentText = texts[count];
    //현재 몇번째 단어에 잇는지
    letter = currentText.slice(0, ++index);
    //현재 있는 단어의 알파벳으로 조갬그리고 거기에 1씩 더함

    document.querySelector('.typing').textContent = letter;
     if(letter.length === currentText.length){
         count++;
         index = 0;
          
     }
     //만약 한 단어의 알파벳 길이가 지금 쳐진 단어와 일치하면 다음 단어로 넘어감

     setTimeout(type, 500); 
    }());