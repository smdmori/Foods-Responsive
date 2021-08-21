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
  
