// Common functionality shared across pages

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        const mainNav = document.querySelector(".main-nav")
        const authButtons = document.querySelector(".auth-buttons")
  
        if (mainNav) mainNav.classList.toggle("active")
        if (authButtons) authButtons.classList.toggle("active")
      })
    }
  
    // Close modals when clicking outside
    const modals = document.querySelectorAll(".modal")
    modals.forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none"
        }
      })
  
      const closeBtn = modal.querySelector(".close-modal")
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none"
        })
      }
    })
  })
  
  // Utility functions
  function formatCurrency(amount) {
    return "$" + Number.parseFloat(amount).toFixed(2)
  }
  
  function formatTime(timeString) {
    const options = { hour: "numeric", minute: "numeric", hour12: true }
    const date = new Date()
    const [hours, minutes] = timeString.split(":")
    date.setHours(Number.parseInt(hours, 10))
    date.setMinutes(Number.parseInt(minutes, 10))
    return date.toLocaleTimeString("en-US", options)
  }
  
  
