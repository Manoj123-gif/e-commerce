
// Slide Bar Navigation

const slideNav = document.getElementById('slide-nav');
const arrow = document.getElementById('arrow')

arrow.addEventListener('click', ()=>{
    const categoryShow = slideNav.getAttribute("data-category");

    if (categoryShow === 'false') {
        slideNav.setAttribute('data-category',true)
        arrow.setAttribute('data-category',true)
    } else {
        slideNav.setAttribute('data-category', false)
        arrow.setAttribute('data-category',false)
    }
})