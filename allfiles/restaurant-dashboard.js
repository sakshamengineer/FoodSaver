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
      const formattedHours = hours % 12 || 12 // Convert to 12-hour format
      return `${formattedHours}:${minutes} ${period}`
    }
  
    // Sample data - in a real app, this would come from an API
    const activeDeals = [
      {
        id: 1,
        title: "Pasta Surprise Box",
        description: "A selection of our freshly made pasta dishes from today.",
        originalPrice: 24.99,
        currentPrice: 9.99,
        image: "/placeholder.svg?height=120&width=200",
        quantity: 5,
        sold: 2,
        pickupStart: "18:00",
        pickupEnd: "19:30",
      },
      {
        id: 2,
        title: "Garlic Bread Basket",
        description: "Freshly baked garlic bread with herbs and butter.",
        originalPrice: 12.5,
        currentPrice: 4.99,
        image: "/placeholder.svg?height=120&width=200",
        quantity: 8,
        sold: 3,
        pickupStart: "17:30",
        pickupEnd: "19:00",
      },
      {
        id: 3,
        title: "Tiramisu Special",
        description: "Our famous homemade tiramisu dessert.",
        originalPrice: 8.99,
        currentPrice: 3.5,
        image: "/placeholder.svg?height=120&width=200",
        quantity: 10,
        sold: 5,
        pickupStart: "19:00",
        pickupEnd: "20:30",
      },
    ]
  
    const todayOrders = [
      {
        id: "ORD-1234",
        customerName: "John Smith",
        items: "Pasta Surprise Box",
        pickupTime: "18:30",
        status: "Pending",
        orderedAt: "14:22",
      },
      {
        id: "ORD-1235",
        customerName: "Maria Garcia",
        items: "Garlic Bread Basket",
        pickupTime: "18:45",
        status: "Confirmed",
        orderedAt: "15:10",
      },
      {
        id: "ORD-1236",
        customerName: "David Johnson",
        items: "Tiramisu Special",
        pickupTime: "19:15",
        status: "Ready",
        orderedAt: "15:30",
      },
      {
        id: "ORD-1237",
        customerName: "Sarah Williams",
        items: "Pasta Surprise Box",
        pickupTime: "19:00",
        status: "Completed",
        orderedAt: "16:05",
      },
    ]
  
    // Render active deals
    const activeDealsContainer = document.getElementById("active-deals")
    if (activeDealsContainer) {
      activeDealsContainer.innerHTML = ""
      activeDeals.forEach((deal) => {
        const dealCard = document.createElement("div")
        dealCard.classList.add("deal-card")
  
        // Calculate discount percentage
        const discountPercentage = Math.round((1 - deal.currentPrice / deal.originalPrice) * 100)
  
        dealCard.innerHTML = `
          <div class="deal-image">
            <img src="${deal.image}" alt="${deal.title}">
          </div>
          <div class="deal-content">
            <h3 class="deal-title">${deal.title}</h3>
            <p class="deal-description">${deal.description}</p>
            <div class="deal-pricing">
              <span class="deal-current-price">${formatCurrency(deal.currentPrice)}</span>
              <span class="deal-original-price">${formatCurrency(deal.originalPrice)}</span>
              <span class="deal-discount">-${discountPercentage}%</span>
            </div>
            <div class="deal-stats">
              <span>${deal.sold}/${deal.quantity + deal.sold} sold</span>
              <span>Pickup: ${formatTime(deal.pickupStart)} - ${formatTime(deal.pickupEnd)}</span>
            </div>
            <div class="deal-actions">
              <button class="btn btn-outline btn-small edit-deal" data-id="${deal.id}">Edit</button>
              <button class="btn btn-outline btn-small pause-deal" data-id="${deal.id}">Pause</button>
            </div>
          </div>
        `
        activeDealsContainer.appendChild(dealCard)
      })
  
      // Add event listeners to deal action buttons
      document.querySelectorAll(".edit-deal").forEach((button) => {
        button.addEventListener("click", function () {
          const dealId = this.getAttribute("data-id")
          alert(`Edit deal ID: ${dealId} - This would open the edit deal form in a real app.`)
        })
      })
  
      document.querySelectorAll(".pause-deal").forEach((button) => {
        button.addEventListener("click", function () {
          const dealId = this.getAttribute("data-id")
          this.textContent = this.textContent === "Pause" ? "Resume" : "Pause"
          alert(`Deal ID: ${dealId} has been ${this.textContent === "Pause" ? "resumed" : "paused"}.`)
        })
      })
    }
  
    // Render today's orders
    const ordersTable = document.getElementById("orders-table")
    if (ordersTable) {
      ordersTable.innerHTML = ""
      todayOrders.forEach((order) => {
        const statusClass = order.status.toLowerCase()
        const tr = document.createElement("tr")
        tr.innerHTML = `
          <td>${order.id}</td>
          <td>${order.customerName}</td>
          <td>${order.items}</td>
          <td>${order.pickupTime}</td>
          <td><span class="status-badge ${statusClass}">${order.status}</span></td>
          <td>
            <button class="btn btn-text view-order" data-id="${order.id}">View</button>
            <button class="btn btn-text update-status" data-id="${order.id}">Update</button>
          </td>
        `
        ordersTable.appendChild(tr)
      })
  
      // Add event listeners to order action buttons
      document.querySelectorAll(".view-order").forEach((button) => {
        button.addEventListener("click", function () {
          const orderId = this.getAttribute("data-id")
          alert(`View order ID: ${orderId} - This would show the full order details in a real app.`)
        })
      })
  
      document.querySelectorAll(".update-status").forEach((button) => {
        button.addEventListener("click", function () {
          const orderId = this.getAttribute("data-id")
          alert(`Update status for order ID: ${orderId} - This would open a status update modal in a real app.`)
        })
      })
    }
  
    // Create new deal modal functionality
    const createDealBtn = document.getElementById("create-deal")
    const newDealModal = document.getElementById("new-deal-modal")
    const cancelDealBtn = document.getElementById("cancel-deal")
    const newDealForm = document.getElementById("new-deal-form")
  
    if (createDealBtn && newDealModal) {
      createDealBtn.addEventListener("click", () => {
        newDealModal.style.display = "block"
      })
    }
  
    if (cancelDealBtn) {
      cancelDealBtn.addEventListener("click", () => {
        newDealModal.style.display = "none"
      })
    }
  
    if (newDealForm) {
      newDealForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Collect form data
        const formData = new FormData(newDealForm)
        const dealData = {}
  
        formData.forEach((value, key) => {
          dealData[key] = value
        })
  
        // Handle allergens which is a multi-select
        const selectedAllergens = []
        document.querySelectorAll('input[name="allergens"]:checked').forEach((checkbox) => {
          selectedAllergens.push(checkbox.value)
        })
        dealData.allergens = selectedAllergens
  
        console.log("New deal data:", dealData)
        alert("Deal created successfully! In a real app, this would be saved to the database.")
  
        newDealModal.style.display = "none"
        newDealForm.reset()
      })
    }
  
    // Logout functionality
    const logoutBtn = document.getElementById("logout-btn")
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault()
  
        // In a real app, this would clear the session/token
        if (confirm("Are you sure you want to log out?")) {
          window.location.href = "index.html"
        }
      })
    }
  
    // Add some styling for status badges
    const style = document.createElement("style")
    style.textContent = `
      .status-badge {
        display: inline-block;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.85rem;
        font-weight: 500;
      }
      .status-badge.pending {
        background-color: #ffeeba;
        color: #856404;
      }
      .status-badge.confirmed {
        background-color: #d4edda;
        color: #155724;
      }
      .status-badge.ready {
        background-color: #cce5ff;
        color: #004085;
      }
      .status-badge.completed {
        background-color: #d1e7dd;
        color: #0f5132;
      }
      .deal-discount {
        background-color: #f44336;
        color: white;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.8rem;
        margin-left: 10px;
      }
      .deal-stats {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 0.9rem;
        color: var(--color-text-light);
      }
      .deal-actions {
        display: flex;
        gap: 10px;
      }
    `
    document.head.appendChild(style)
  })
  
  