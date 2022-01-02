let initialValue = {
    year:"2022",
    content:"Happy New Year !",
    icon: " ❤❤❤❤",
    mess:""
}

const year = document.querySelector('.year')
const content = document.querySelector('.content')
const icon = document.querySelector('.icon')
const mess = document.querySelector('.mess')

let arrYear
let arrContent=[]
let arrIcon
let arrMess
arrYear= initialValue.year.split('')
arrContent=(initialValue.content.split(""))
arrIcon= initialValue.icon.split('')
arrMess= initialValue.mess.split('')


let arrYearResult=[]
let arrContentResult=[]
let arrIconResult=[]
let arrMessResult=[]

const displayMess = () => {
    setTimeout( () =>{
        const timeOut =setInterval( ()=> {
            arrMessResult.push( arrMess.shift())           
            mess.innerHTML = arrMessResult.join("")
         
            if(arrMess.length ==0){
                clearInterval(timeOut)
                displayIcon()
            }
        },1000)
      },2000)
}

const displayContent = () => {
    setTimeout( () =>{
        const timeOut =setInterval( ()=> {
            arrContentResult.push( arrContent.shift())           
            content.innerHTML = arrContentResult.join("")
         
            if(arrContent.length ==0){
                clearInterval(timeOut)
                displayMess()
            }
        },1000)
      },2000)
}

const displayIcon = () => {
    setTimeout( () =>{
        const timeOut =setInterval( ()=> {
            arrIconResult.push( arrIcon.shift())           
            icon.innerHTML = arrIconResult.join("")
         
            if(arrIcon.length ==0){
                clearInterval(timeOut)
                
            }
        },1000)
      },2000)
}

function display() {
    setTimeout( () =>{
      const timeOut =setInterval( ()=> {
          arrYearResult.push( arrYear.shift())
          year.classList.add('.animation')
          year.innerHTML = arrYearResult.join("")
          year.classList.remove('.animation')
          if(arrYear.length ==0){
              clearInterval(timeOut)
              displayContent()
          }
      },1000)
    },2000)


}
display()
