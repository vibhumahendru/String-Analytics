document.addEventListener('DOMContentLoaded', () => {

  let answer = document.querySelector('#heading')
  let counterBtn = document.querySelector('#counter')
  let stringInput = document.querySelector('#stringInput')
  let display = document.querySelector('#display')


  // var string = "llkhsdfljbfbkrbfjkb"

  function charCounter(string){

    let lowCaseString = string.toLowerCase()

    let charAr = [...lowCaseString]
    let charObj={}

        charAr.forEach((char) => {
          if(char !== " "){
          charObj[char] = 0
            }
        })
        charAr.forEach((char)=>{
          if(char !== " "){
          charObj[char] += 1
            }
        })

    return charObj
   }

  counterBtn.addEventListener('click', ()=>{
    display.innerHTML = ""
    let answerObj = charCounter(stringInput.value)

    for (var key in answerObj){
      display.innerHTML += `<h1>${key} : ${answerObj[key]}</h1>`
    }
    stringInput.value = ""
  }) /// END EVENT LIST

}) //// END DOM CONTENT LOADED
