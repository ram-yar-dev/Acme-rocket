const initApp = () => {
    const hamburgerbtn = document.getElementById('hambuger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerbtn.classList.toggle('toggle-btn')
    }

    hamburgerbtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
} 

document.addEventListener('DOMContentLoaded', initApp)