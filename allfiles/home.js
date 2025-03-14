document.addEventListener("DOMContentLoaded", () => {
    // Helper function to format currency
    function formatCurrency(amount) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
    }
  
    // Helper function to format time
    function formatTime(time) {
      const [hours, minutes] = time.split(":")
      const period = hours >= 12 ? "PM" : "AM"
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12 // Convert to 12-hour format
      return `${formattedHours}:${minutes} ${period}`
    }
  
    // Sample data - in a real app, this would come from an API
    const featuredDeals = [
      {
        id: 1,
        title: "Pasta Surprise Box",
        restaurant: "Pasta Paradise",
        description:
          "A selection of our freshly made pasta dishes from today. May include lasagna, spaghetti bolognese, or carbonara.",
        originalPrice: 24.99,
        currentPrice: 9.99,
        image: "https://cdn.prod.website-files.com/59b85cfc56db830001760b29/646d325144d3aeeebe744350_pasta-subscription-box.jpg",
        quantity: 5,
        pickupStart: "18:00",
        pickupEnd: "19:30",
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
      },
    ]
  
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        location: "New York",
        avatar: "https://thumb.photo-ac.com/7a/7a706ac91fa3a2330382e7f4c11c6b3e_t.jpeg",
        rating: 5,
        text: "I've saved so much money using FoodSaver! The meals are always delicious and it feels great knowing I'm helping reduce food waste.",
      },
      {
        id: 2,
        name: "Michael Chen",
        location: "San Francisco",
        avatar: "https://suitmeup.pictures/full-demo/26.webp",
        rating: 5,
        text: "As a student on a budget, this app has been a lifesaver. I get quality restaurant food at a fraction of the price.",
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        location: "Chicago",
        avatar: "https://asset.gecdesigns.com/img/wallpapers/realistic-young-woman-in-a-water-ai-generated-wallpaper-image-sr14062407-cover.webp",
        rating: 4,
        text: "It's a win-win for everyone - restaurants sell food that would otherwise go to waste, and I get delicious meals for less!",
      },
    ]
  
    // Render featured deals
    const featuredDealsContainer = document.getElementById("featured-deals-container")
    if (featuredDealsContainer) {
      featuredDealsContainer.innerHTML = ""
      featuredDeals.forEach((deal) => {
        const dealCard = document.createElement("div")
        dealCard.classList.add("deal-card")
        dealCard.innerHTML = `
          <div class="deal-image">
            <img src="${deal.image}" alt="${deal.title}">
          </div>
          <div class="deal-content">
            <p class="deal-restaurant">${deal.restaurant}</p>
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
        `
        featuredDealsContainer.appendChild(dealCard)
      })
    }
  
    // Render testimonials
    const testimonialSlider = document.getElementById("testimonial-slider")
    if (testimonialSlider) {
      testimonialSlider.innerHTML = ""
      testimonials.forEach((testimonial) => {
        // Create star rating HTML
        let starsHtml = ""
        for (let i = 0; i < 5; i++) {
          if (i < testimonial.rating) {
            starsHtml += "★"
          } else {
            starsHtml += "☆"
          }
        }
  
        const testimonialCard = document.createElement("div")
        testimonialCard.classList.add("testimonial-card")
        testimonialCard.innerHTML = `
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <img src="${testimonial.avatar}" alt="${testimonial.name}" class = "testimonial-img">
            </div>
            <div>
              <div class="testimonial-name">${testimonial.name}</div>
              <div class="testimonial-location">${testimonial.location}</div>
            </div>
          </div>
          <div class="testimonial-stars">${starsHtml}</div>
          <p class="testimonial-text">${testimonial.text}</p>
        `
        testimonialSlider.appendChild(testimonialCard)
      })
    }
  })
  
  