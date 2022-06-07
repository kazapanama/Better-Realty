const btn = document.querySelector('.hamburgerBtn');

const fullMenu = document.querySelector('.mob-menu');
const menuBg = document.querySelector('.mob-menu-bg');


function openMenu(){
    fullMenu.style.display = 'block';

    document.body.style.overflow='hidden';
}

function closeMenu(){
    fullMenu.style.display = 'none';
    document.body.style.overflow = '';




}


btn.addEventListener('click', openMenu)

fullMenu.addEventListener('click',(e)=>{
    if(e.taget = fullMenu && !e.target.classList.contains('mob-menu-bg')){
        closeMenu();
    }
})



// // window.addEventListener('click',(e)=>{
// //     if (fullMenu.style.display = block && e.target == menuBg) {
// //         closeMenu();
// //     }
// // })




