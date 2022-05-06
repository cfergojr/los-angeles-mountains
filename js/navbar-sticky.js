const navbar = document.getElementById('navbar')

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 75 - add navbar-stuck class
  if (scroll > 75) {
    navbar.classList.add("navbar-stuck");
  } else {
    navbar.classList.remove("navbar-stuck")
  }
}

// Use the function
window.addEventListener('scroll', onScroll)
