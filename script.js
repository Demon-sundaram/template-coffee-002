// Menu data
const menuItems = {
    coffee: [
        {
            name: 'House Blend',
            description: 'Our signature medium roast with notes of chocolate and caramel',
            price: '$4.50',
            rating: 4.8,
            image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
            name: 'Ethiopian Single Origin',
            description: 'Bright and fruity with floral notes and wine-like acidity',
            price: '$5.25',
            rating: 4.9,
            image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
            name: 'Colombian Dark Roast',
            description: 'Rich and bold with smoky undertones and full body',
            price: '$4.75',
            rating: 4.7,
            image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
    ],
    espresso: [
        {
            name: 'Classic Espresso',
            description: 'Double shot of our premium espresso blend',
            price: '$3.25',
            rating: 4.8,
            image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
            name: 'Cappuccino',
            description: 'Espresso with steamed milk and velvety foam',
            price: '$4.50',
            rating: 4.9,
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
            name: 'Caramel Macchiato',
            description: 'Espresso with vanilla syrup, steamed milk, and caramel drizzle',
            price: '$5.25',
            rating: 4.6,
            image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
    ],
    cold: [
        {
            name: 'Cold Brew',
            description: 'Smooth and refreshing 12-hour cold extraction',
            price: '$4.25',
            rating: 4.7,
            image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
            name: 'Iced Latte',
            description: 'Espresso with cold milk over ice',
            price: '$4.75',
            rating: 4.5,
            image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
    ],
    pastries: [
        {
            name: 'Croissant',
            description: 'Buttery, flaky French pastry baked fresh daily',
            price: '$3.50',
            rating: 4.6,
            image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
            name: 'Blueberry Muffin',
            description: 'Moist muffin packed with fresh blueberries',
            price: '$3.25',
            rating: 4.4,
            image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
    ]
};

// DOM elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuGrid = document.getElementById('menuGrid');
const tabBtns = document.querySelectorAll('.tab-btn');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Header scroll effect
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking on nav links
function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
}

// Render menu items
function renderMenuItems(category) {
    const items = menuItems[category] || [];
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <div class="menu-item-rating">
                        <svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                        <span class="rating-text">${item.rating}</span>
                    </div>
                    <button class="add-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle menu tab clicks
function handleTabClick(event) {
    const category = event.target.dataset.category;
    
    // Update active tab
    tabBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Render menu items for selected category
    renderMenuItems(category);
}

// Handle contact form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    event.target.reset();
}

// Smooth scroll for navigation links
function handleNavClick(event) {
    event.preventDefault();
    
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    closeMobileMenu();
}

// Initialize the application
function init() {
    // Set up event listeners
    window.addEventListener('scroll', handleScroll);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Menu tab event listeners
    tabBtns.forEach(btn => {
        btn.addEventListener('click', handleTabClick);
    });
    
    // Navigation link event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Contact form event listener
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Initial menu render (coffee category)
    renderMenuItems('coffee');
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);