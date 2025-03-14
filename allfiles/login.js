document.addEventListener("DOMContentLoaded", () => {
    const userTab = document.getElementById("user-tab")
    const restaurantTab = document.getElementById("restaurant-tab")
    const loginForm = document.getElementById("login-form")
    // Tab switching functionality
    if (userTab && restaurantTab) {
      userTab.addEventListener("click", () => {
        userTab.classList.add("active")
        restaurantTab.classList.remove("active")
        loginForm.setAttribute("data-user-type", "user")
      })
  
      restaurantTab.addEventListener("click", () => {
        restaurantTab.classList.add("active")
        userTab.classList.remove("active")
        loginForm.setAttribute("data-user-type", "restaurant")
      })
    }
  
    // Form submission
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const userType = loginForm.getAttribute("data-user-type") || "user"
  
        // In a real app, this would send credentials to the server
        console.log("Login attempt:", { email, password, userType })
  
        // Simulate login success for demo purposes
        if (email && password) {
          // Redirect based on user type
          if (userType === "restaurant") {
            window.location.href = "restaurant-dashboard.html"
          } else {
            window.location.href = "index.html"
            // You would typically set a cookie or localStorage item here to maintain the session
          }
        } else {
          alert("Please enter both email and password")
        }
      })
    }
  
    // Social login buttons (for demo purposes)
    const googleBtn = document.querySelector(".btn-google")
    const facebookBtn = document.querySelector(".btn-facebook")
  
    if (googleBtn) {
      googleBtn.addEventListener("click", () => {
        alert("In a real app, this would redirect to Google OAuth")
      })
    }
  
    if (facebookBtn) {
      facebookBtn.addEventListener("click", () => {
        alert("In a real app, this would redirect to Facebook OAuth")
      })
    }
  })
  
  