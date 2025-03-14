document.addEventListener("DOMContentLoaded", () => {
    // Sample data - in a real app, this would come from an API
    const allDeals = [
      {
        id: 1,
        title: "Pasta Surprise Box",
        restaurant: "Pasta Paradise",
        description:
          "A selection of our freshly made pasta dishes from today. May include lasagna, spaghetti bolognese, or carbonara.",
        originalPrice: 24.99,
        currentPrice: 9.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoAUQXVVAJ4Dx7uEYu4AafCXr0HtetegouA&s",
        quantity: 5,
        pickupStart: "18:00",
        pickupEnd: "19:30",
        distance: 0.8,
        cuisine: "italian",
      },
      {
        id: 2,
        title: "Sushi Variety Box",
        restaurant: "Sakura Sushi",
        description: "Mix of maki rolls, nigiri, and sashimi from today's menu. Perfect for 1-2 people.",
        originalPrice: 35.0,
        currentPrice: 14.5,
        image: "https://image.made-in-china.com/2f0j00pTdqZtHEYIbj/Variety-Size-Available-Disposable-Plastic-Pet-PS-Sushi-Box-with-Clear-Lid.webp",
        quantity: 3,
        pickupStart: "19:00",
        pickupEnd: "20:00",
        distance: 1.2,
        cuisine: "japanese",
      },
      {
        id: 3,
        title: "Bakery Assortment",
        restaurant: "Fresh Bake",
        description:
          "A selection of our freshly baked goods including croissants, muffins, and pastries. Great for breakfast!",
        originalPrice: 18.5,
        currentPrice: 7.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGcLTCbHcd1y8cAdH_1jtMCxxMx7y5KOSgA&s",
        quantity: 8,
        pickupStart: "16:30",
        pickupEnd: "18:00",
        distance: 0.5,
        cuisine: "bakery",
      },
      {
        id: 4,
        title: "Pizza Surprise",
        restaurant: "Pizza Palace",
        description:
          "Two medium pizzas with a variety of toppings from our daily menu. May include pepperoni, vegetarian, or supreme.",
        originalPrice: 29.99,
        currentPrice: 12.99,
        image: "https://images.timesfoodie.com/photo/msid-112504095,thumbsize-87672,width-1280,height-420,resizemode-75/112504095.jpg",
        quantity: 4,
        pickupStart: "20:00",
        pickupEnd: "21:30",
        distance: 1.5,
        cuisine: "italian",
      },
      {
        id: 5,
        title: "Taco Tuesday Box",
        restaurant: "Taco Fiesta",
        description: "A mix of our popular tacos: beef, chicken, and vegetarian options with all the toppings.",
        originalPrice: 22.5,
        currentPrice: 8.99,
        image: "https://www.foodandwine.com/thmb/y5d3BgzgQyPI2NoyeJTg1ywhrkA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Taco-Bell-5-Taco-Box-FT-BLOG0424-02-1f4194c84158498ca601a6062922e718.jpg",
        quantity: 2,
        pickupStart: "19:30",
        pickupEnd: "21:00",
        distance: 2.0,
        cuisine: "mexican",
      },
      {
        id: 6,
        title: "Burger & Fries Combo",
        restaurant: "Burger Joint",
        description: "Gourmet burgers with a side of fries. Choices may include classic beef, chicken, or veggie burger.",
        originalPrice: 19.99,
        currentPrice: 7.5,
        image: "https://b.zmtcdn.com/data/pictures/chains/3/18381233/8fdf6db930d2adc060eadda4ac683364.jpg?fit=around|960:500&crop=960:500;*,*",
        quantity: 6,
        pickupStart: "19:00",
        pickupEnd: "20:30",
        distance: 1.1,
        cuisine: "american",
      },
      {
        id: 7,
        title: "Thai Food Box",
        restaurant: "Thai Delight",
        description: "Assortment of Thai favorites including pad thai, curry, and spring rolls.",
        originalPrice: 28.5,
        currentPrice: 11.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6TAqob5GK4FZfzdxndqXRJYP3U70xwTkGw&s",
        quantity: 3,
        pickupStart: "18:30",
        pickupEnd: "20:00",
        distance: 1.8,
        cuisine: "thai",
      },
    ]
  
    // Helper function to format currency
    function formatCurrency(amount) {
      return "$" + amount.toFixed(2)
    }
  
    // Helper function to format time
    function formatTime(time) {
      const [hours, minutes] = time.split(":")
      let period = "AM"
      let formattedHours = Number.parseInt(hours, 10)
  
      if (formattedHours >= 12) {
        period = "PM"
        if (formattedHours > 12) {
          formattedHours -= 12
        }
      }
  
      if (formattedHours === 0) {
        formattedHours = 12
      }
  
      return `${formattedHours}:${minutes} ${period}`
    }
  
    // Render all deals initially
    const dealsContainer = document.getElementById("deals-container")
  
    function renderDeals(deals) {
      if (dealsContainer) {
        dealsContainer.innerHTML = ""
  
        if (deals.length === 0) {
          dealsContainer.innerHTML =
            '<p class="no-results">No deals match your search criteria. Try adjusting your filters.</p>'
          return
        }
  
        deals.forEach((deal) => {
          const dealCard = document.createElement("div")
          dealCard.classList.add("deal-card")
          dealCard.innerHTML = `
            <div class="deal-image">
              <img src="${deal.image}" alt="${deal.title}">
            </div>
            <div class="deal-content">
              <p class="deal-restaurant">${deal.restaurant} · ${deal.distance} mi away</p>
              <h3 class="deal-title">${deal.title}</h3>
              <p class="deal-description">${deal.description}</p>
              <div class="deal-pricing">
                <span class="deal-current-price">${formatCurrency(deal.currentPrice)}</span>
                <span class="deal-original-price">${formatCurrency(deal.originalPrice)}</span>
              </div>
              <div class="deal-footer">
                <span class="deal-pickup">Pickup: ${formatTime(deal.pickupStart)} - ${formatTime(deal.pickupEnd)}</span>
                <span class="deal-quantity">${deal.quantity} left</span>
              </div>
            </div>
            <div class = "deal-card-btn"><a href="#" class="btn btn-primary btn-full" style="margin: 0 20px 20px;">Reserve Now</a></div>
          `
          dealsContainer.appendChild(dealCard)
        })
      }
    }
  
    // Initial render
    renderDeals(allDeals)
  
    // Filter functionality
    const cuisineFilter = document.getElementById("cuisine-filter")
    const priceFilter = document.getElementById("price-filter")
    const sortBy = document.getElementById("sort-by")
    const locationInput = document.getElementById("location-input")
    const useCurrentLocationBtn = document.getElementById("use-current-location")
  
    function applyFilters() {
      let filteredDeals = [...allDeals]
  
      // Apply cuisine filter
      if (cuisineFilter.value) {
        filteredDeals = filteredDeals.filter((deal) => deal.cuisine === cuisineFilter.value)
      }
  
      // Apply price filter
      if (priceFilter.value) {
        switch (priceFilter.value) {
          case "under-5":
            filteredDeals = filteredDeals.filter((deal) => deal.currentPrice < 5)
            break
          case "5-10":
            filteredDeals = filteredDeals.filter((deal) => deal.currentPrice >= 5 && deal.currentPrice <= 10)
            break
          case "10-15":
            filteredDeals = filteredDeals.filter((deal) => deal.currentPrice > 10 && deal.currentPrice <= 15)
            break
          case "over-15":
            filteredDeals = filteredDeals.filter((deal) => deal.currentPrice > 15)
            break
        }
      }
  
      // Apply sorting
      switch (sortBy.value) {
        case "distance":
          filteredDeals.sort((a, b) => a.distance - b.distance)
          break
        case "price-low":
          filteredDeals.sort((a, b) => a.currentPrice - b.currentPrice)
          break
        case "price-high":
          filteredDeals.sort((a, b) => b.currentPrice - a.currentPrice)
          break
        case "discount":
          filteredDeals.sort((a, b) => {
            const discountA = a.originalPrice - a.currentPrice
            const discountB = b.originalPrice - b.currentPrice
            return discountB - discountA
          })
          break
        case "pickup-time":
          filteredDeals.sort((a, b) => {
            const timeA = a.pickupStart.replace(":", "")
            const timeB = b.pickupStart.replace(":", "")
            return timeA - timeB
          })
          break
      }
  
      renderDeals(filteredDeals)
    }
  
    // Event listeners for filters
    cuisineFilter.addEventListener("change", applyFilters)
    priceFilter.addEventListener("change", applyFilters)
    sortBy.addEventListener("change", applyFilters)
  
    // Simple search by location
    locationInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        // In a real app, this would trigger geolocation search
        alert(`Searching for deals near "${locationInput.value}"`)
      }
    })
  
    // Use current location
    useCurrentLocationBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        useCurrentLocationBtn.textContent = "Locating..."
  
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // In a real app, these coordinates would be sent to the server
            const lat = position.coords.latitude
            const lng = position.coords.longitude
  
            // For demo purposes, we'll just show an alert
            locationInput.value = "Current location"
            useCurrentLocationBtn.textContent = "Use current location"
            alert(`Located at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
          },
          (error) => {
            useCurrentLocationBtn.textContent = "Use current location"
            alert("Unable to retrieve your location")
            console.error("Geolocation error:", error)
          },
        )
      } else {
        alert("Geolocation is not supported by your browser")
      }
    })
  
    // Load more button functionality
    const loadMoreBtn = document.getElementById("load-more")
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        // In a real app, this would load the next page of results
        alert("In a real app, this would load more results from the server.")
      })
    }
  })
  
  