//          Tác giả : Đinh Đức Anh
//          Mail    : anh.dd182330@sis.hust.edu.vn
//                    dinhanh21092000@gmail.com

// Object chứa giá trị cần hiển thị
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

let arrYear= initialValue.year.split('')
let arrContent=(initialValue.content.split(""))
let arrIcon= initialValue.icon.split('')
let arrMess= initialValue.mess.split('')

let arrYearResult=[]
let arrContentResult=[]
let arrIconResult=[]
let arrMessResult=[]

// Hiển thị tin nhắn muốn hiển thị
const displayMess = () => {
    setTimeout( () =>{
        const timeOut =setInterval( ()=> {
            arrMessResult.push( arrMess.shift())           
            mess.innerHTML = arrMessResult.join("")         
            if(arrMess.length ==0){
                clearInterval(timeOut)
                displayIcon()
            }
        },1000) // thời gian lấy ra từng chữ 1 và hiển thị
      },2000) // thời gian delay
}

// Hiển thị nội dung lời chúc
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

// hiển thị icon
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

// function chạy đầu tiên
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
