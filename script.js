// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Navigation active state
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

// Update active nav link on scroll
function updateActiveLink() {
  const scrollPosition = window.scrollY

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", updateActiveLink)
updateActiveLink()

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn")
let menuOpen = false

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    const navList = document.querySelector(".nav-list")
    navList.style.display = navList.style.display === "flex" ? "none" : "flex"
    navList.style.position = "absolute"
    navList.style.top = "100%"
    navList.style.left = "0"
    navList.style.width = "100%"
    navList.style.flexDirection = "column"
    navList.style.backgroundColor = "var(--dark-color)"
    navList.style.padding = "20px"
    navList.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    menuOpen = true
  } else {
    document.querySelector(".nav-list").style.display = "none"
    menuOpen = false
  }
})

// Project filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block"
      } else {
        const categories = card.getAttribute("data-category").split(" ")
        if (categories.includes(filter)) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      }
    })
  })
})

// Contact form submission
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Simple form validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  submitBtn.disabled = true
  submitBtn.textContent = "Sending..."

  // Simulate API call
  setTimeout(() => {
    alert("Message sent successfully!")
    contactForm.reset()
    submitBtn.disabled = false
    submitBtn.textContent = originalText
  }, 1500)
})

// Duplicate skill items for infinite scroll animation
function duplicateSkillItems() {
  const trackLeft = document.querySelector(".track-left")
  const trackRight = document.querySelector(".track-right")

  // Clone the skill items
  const leftItems = trackLeft.innerHTML
  const rightItems = trackRight.innerHTML

  // Add the cloned items to create the infinite scroll effect
  trackLeft.innerHTML = leftItems + leftItems
  trackRight.innerHTML = rightItems + rightItems
}

duplicateSkillItems()

