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






  function accum(s) {
  	let charAr = [...s]
    let countObj = {}
    let counter = 1
    let newAr = []
    charAr.forEach((el)=> {
      countObj[el] = counter
      counter++
    })
    let string=""
    for(key in countObj){
      count = 0
      while (count < countObj[key]) {
        if (count === 0) {
          string += key.toUpperCase()
          count += 1
        }else{
        string += key.toLowerCase()
        count += 1
        }
      }
      string+="-"
    }
    return string.slice(0, -1)
  }

function digitalRoot(num) {
  let string = ""
  string += num
  let intAr = string.split("")
  let counter = 0
  intAr.forEach((el)=> {
    counter += parseInt(el)
  })

  if (counter >= 10) {
    return digitalRoot(counter)
  }


  return counter
}

function openOrSenior(data){
  let answerAr = []
  data.forEach((el)=>{
    if (el[0]>= 55 && el[1] > 7) {
      answerAr.push('Senior')
    }
    else {
      answerAr.push('Open')
    }
  })
  return answerAr
}

function DNAStrand(dna){
  let string = ''
  let dnaAr = dna.split("")

  dnaAr.forEach((el)=>{
    if (el === "A") {
      string+= "T"
    }
    else if (el === "T") {
      string+= "A"
    }
    else if (el === "C") {
      string+= "G"
    }
    else {
      string += "C"
    }

  })
}


function XO(str) {
  let obj = {}
  let charAr = [...str]
  charAr.forEach((el)=>{

    obj[el.toLowerCase()]=0
  })

  charAr.forEach((el)=>{
    obj[el.toLowerCase()] += 1
  })

  if (obj["x"] === obj["o"]) {
    return true
  } else {return false}


}

function reverser(string) {
  let wordAr = string.split(" ")
  let newAr = []
  wordAr.forEach((el)=> {
    if (el.length >= 5) {
        newAr.push(el.split("").reverse().join(""))
    }
    else {newAr.push(el)}
  })



return newAr.join(" ")
}

function dirReduc(arr){
  let newAr = []
  let copyAr = [...arr]

  arr.forEach((el, idx)=>{
    if (el === "NORTH" && arr[idx+1] !== "SOUTH" && arr[idx-1] !== "SOUTH") {
      newAr.push(el)
    }

    if (el === "SOUTH" && arr[idx+1] !== "NORTH" && arr[idx-1] !== "NORTH") {
      newAr.push(el)
    }

    if (el === "EAST" && arr[idx+1] !== "WEST" && arr[idx-1] !== "WEST") {
      newAr.push(el)
    }

    if (el === "WEST" && arr[idx+1] !== "EAST" && arr[idx-1] !== "EAST") {
      newAr.push(el)
    }

  })

  return newAr
}

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

function towerBuilder(nFloors) {
  let counter = 0
  let secondCount = -1

  let newAr = []
  let answerAr = []

 while (counter < nFloors){
   secondCount += 2
   newAr.push(secondCount)
   counter++
 }

  newAr.forEach((el)=>{
    let count = 0
    let str = ""
    while(count < parseInt(el)){
      str += "*"
      count++
    }
    answerAr.push(str)
  })

   answerAr.forEach((el)=>{

   })


    return answerAr
}

function towerBuilder(nFloors) {
  let counter = 0
  let secondCount = -1

  let newAr = []
  let secAr = []
  let answerAr = []

 while (counter < nFloors){
   secondCount += 2
   newAr.push(secondCount)
   counter++
 }

  newAr.forEach((el)=>{
    let count = 0
    let str = ""
    while(count < parseInt(el)){
      str += "*"
      count++
    }
    answerAr.push(str)
  })

  let finalNum = answerAr[answerAr.length-1].length
   let count = 1
   answerAr.forEach((el)=>{
   let secStr = ""
   let gap = (finalNum-count)/2
   let gapCount = 0
   let gapStr = ""
   while(gapCount < gap){
     gapStr += " "
     gapCount += 1
   }

   secStr = gapStr + el + gapStr
   secAr.push(secStr)
   console.log(gap)
    count +=2
   })


    return secAr
}

function cakes(recipe, available) {
    let newAr = []
  for(var key in recipe){
    if(available[key]===undefined){return 0}
    let num = 0
    num = Math.floor(available[key]/recipe[key])
  newAr.push(num)
  }

  return newAr.sort()[0]
}
///// ASK PETE THE BAKER

array1 = [14, 1, 18, 23, 12, 8, 16] // 15
array2 = [14, 1, 18, 23, 12, 16] // 13
array3 = [5,4,3,2,1]

function greatestLoss(stockArray) {
  let loss = 0
  let copyAr = [...stockArray]
    stockArray.forEach((el)=>{
      copyAr.forEach((secondEl)=>{
        if (el-secondEl > loss ) {
          loss = el-secondEl
        }
      })
      copyAr.shift()
    })
    return loss
}




var maxSequence = function(arr){

  if(arr.length === 0){return 0}

  function sum(array){
    let sumCounter = 0
    array.forEach((el)=>{
      sumCounter += el
    })
    return sumCounter
  }

  let copyAr = [...arr]
  let totAr = []
  let counter = 0
  arr.forEach((el)=>{
    let eachElAr = [el]
    copyAr.shift()
    copyAr.forEach((secEl)=>{
      eachElAr.push(secEl)
      // console.log(sum(eachElAr));
      if (sum(eachElAr)>counter) {
        counter = sum(eachElAr)
      }

    })
})

    arr.forEach((el)=>{
      if (el>counter) {
        counter = el
      }
    })

    return counter
}

let x = 8
x=7

const p = 6






function chess(char, len) {


  for (var i = 0; i < 10; i++) {
      if (i%2 == 0) {
        let str = ""
        let count = 0
        while (count<len) {
          str += char
          str+= " "
          count+=1
        }
        console.log(str);
      }else {
        str = ""
        count = 0
        while (count<len) {
          str+= " "
          str += char
          count+=1
        }
        console.log(str);
      }
    }

  }
  // let y = "sup"
  function wrapValue(n) {
  let local = n;
  return () => local;
  }


































  function whoIsNext(names, r){
  let copyNames = [...names]

  let counter = 0

  while (counter < r-5) {
    // console.log(copyNames);
    let removedName = copyNames.shift()
    copyNames.push(removedName)
    if (copyNames.length === r) {
      break
    }
    copyNames.push(removedName)
    counter += 1
  }


return copyNames[r-1]

}

function removeNb (n) {
  let numAr = []
  let pairAr = []
  let counter = 0
  while(counter <= n){
    numAr.push(counter)
    counter++
  }
  numAr.forEach((main)=>{
    numAr.forEach((el)=>{
    if(el != main){
        pairAr.push([main, el])
      }
    })
  })
  let sum = 0
  numAr.forEach((num)=>{
    sum += num
  })
  console.log(sum);
  let answer = []
  pairAr.forEach((el)=>{
    let mult = el[0]*el[1]
    if (mult === (sum - el[0] - el[1])) {
      answer = [[el[0], el[1]],[el[1], el[0]]]
    }

  })
  return answer
}

let sup = "hib"

let bob= []

 bob.push({sup})
let mob= {"hib": 2, "hi": 3}
console.log(bob);




}) //// END DOM CONTENT LOADED












//
