// let btn = document.getElementById('submit')

// let result = document.getElementById('result')
// console.log(btn);
// console.log(result)


// function bd(e) {


//     const num = document.getElementById('number').value
//     if (num === '') {
//         alert("enter a number")
//     }
//     if (num < 0) {
//         alert('positive number')
//     } else {
//         result.style.visibility = 'visible'
//     }
//     bainaryNumber = Number(num).toString(2)
//     result.innerHTML = bainaryNumber
//     console.log(bainaryNumber)
// }

// btn.addEventListener('click', bd)


let card = document.querySelector('.card')
let container = document.querySelector('.container')
let senaker = document.querySelector('.snaker img ')
let title = document.querySelector('.title ')
    // console.log(card, container, title, senaker)


container.addEventListener('mouseenter', (e) => {
    card.style.transform = 'none'
    title.style.transform = 'translatez(100px)'
    senaker.style.transform = 'translateZ(100px) rotateZ(156deg)'


    // console.log(title)
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.2s ease';
    senaker.style.transition = 'all 0.2s ease';
    card.style.transform = `rotateY(0deg) rotatex(0deg)`;
    title.style.transform = 'translateZ(0px)'
    senaker.style.transform = 'translateZ(0px)'

})

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let Yaxis = (window.innerHeight / 2 - e.pageY) / 25;;
    card.style.transform = `rotateY(${Yaxis}deg) rotatex(${xAxis}deg)`;
    // console.log(e.pageX)



})



// container.addEventListener('mouseleave', e => {
//     title.style.transform = `translate`

// })