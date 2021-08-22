
// MORI's Way for animating navbar

// const menu = document.querySelector('.menu')
// const navbar = document.querySelector('.navbar')
// let condition = 0
// menu.addEventListener('click', toggleMenu)

// function toggleMenu() {

//     if ( !condition ) {
//         document.querySelector('.navbar').style.top = 0
//         document.querySelector('.menu').style.top = '15rem'

//         condition = 1
//     } else {
//         document.querySelector('.navbar').style.top = '-13.8rem'
//         document.querySelector('.menu').style.top = '1rem'

//         condition = 0
//     }
// }

// End of MORI's Way

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(() => {
    
    i++
    // console.log('i ', i)
    
    const icon = document.querySelector('.section-1-icons .change')
    
    
    // console.log('len ', icons.length);
    if (i > icons.length) {
        // console.log('if i ', i)
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }
    
    icon.classList.remove('change')
    
}, 4000)
  
