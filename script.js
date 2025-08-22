const sideMenu = document.querySelector('#sidemenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");


function opneMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50' ,'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.remove('bg-white','shadow-sm', 'bg-opacity-50');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})

  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("local-time").textContent = timeString;
  }
  updateTime();
  setInterval(updateTime, 60000); // har 1 minute me update hoga