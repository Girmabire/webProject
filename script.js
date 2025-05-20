document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Sticky Navigation on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menu Tab System
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuItemsContainer = document.querySelector('.menu-items');
    
    // Menu data
    const menuData = {
        coffee: [
            {
                name: "Espresso",
                price: "$3.50",
                description: "A concentrated coffee beverage brewed by forcing hot water under pressure through finely ground coffee.",
                image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Cappuccino",
                price: "$4.50",
                description: "Equal parts espresso, steamed milk, and milk foam, often dusted with cocoa powder.",
                image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Latte",
                price: "$4.75",
                description: "Espresso with a larger amount of steamed milk and a small amount of foam.",
                image: "https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Americano",
                price: "$3.75",
                description: "Espresso diluted with hot water, giving it a similar strength to drip coffee but different flavor.",
                image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Mocha",
                price: "$5.00",
                description: "Espresso with chocolate syrup or powder, steamed milk, and often topped with whipped cream.",
                image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Flat White",
                price: "$4.75",
                description: "Similar to a latte but with a higher ratio of coffee to milk and a velvety microfoam.",
                image: "https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            }
        ],
        tea: [
            {
                name: "Earl Grey",
                price: "$3.00",
                description: "Black tea flavored with oil of bergamot, served with lemon or milk.",
                image: "https://images.unsplash.com/photo-1564894809616-9aa2a8e602e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Chamomile",
                price: "$3.00",
                description: "Herbal tea made from chamomile flowers, known for its calming properties.",
                image: "https://images.unsplash.com/photo-1564894809616-9aa2a8e602e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Green Tea",
                price: "$3.25",
                description: "Unoxidized tea with a light, fresh flavor and many health benefits.",
                image: "https://images.unsplash.com/photo-1564894809616-9aa2a8e602e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Chai Latte",
                price: "$4.50",
                description: "Spiced tea with steamed milk, combining black tea with aromatic spices.",
                image: "https://images.unsplash.com/photo-1564894809616-9aa2a8e602e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            }
        ],
        pastries: [
            {
                name: "Croissant",
                price: "$3.50",
                description: "Buttery, flaky pastry of Austrian origin, made with a yeast-leavened dough.",
                image: "https://images.unsplash.com/photo-1587814213271-7a6625b76c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Blueberry Muffin",
                price: "$3.75",
                description: "Sweet muffin studded with juicy blueberries, perfect with coffee.",
                image: "https://images.unsplash.com/photo-1587814213271-7a6625b76c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Cinnamon Roll",
                price: "$4.25",
                description: "Sweet roll with a cinnamon-sugar filling, often topped with icing.",
                image: "https://images.unsplash.com/photo-1587814213271-7a6625b76c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Chocolate Chip Cookie",
                price: "$2.50",
                description: "Classic cookie loaded with melty chocolate chips.",
                image: "https://images.unsplash.com/photo-1587814213271-7a6625b76c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            }
        ]
    };
    
    // Product data
    const productData = [
        {
            name: "Ethiopian Yirgacheffe",
            price: "$16.99",
            description: "Medium roast with floral and citrus notes",
            image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Colombian Supremo",
            price: "$14.99",
            description: "Dark roast with rich chocolate and nutty flavors",
            image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "French Press",
            price: "$29.99",
            description: "Stainless steel French press for perfect brewing",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Brew Haven Mug",
            price: "$12.99",
            description: "Ceramic mug with our signature logo",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Guatemalan Antigua",
            price: "$15.99",
            description: "Medium-dark roast with smoky and spicy notes",
            image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Pour Over Kit",
            price: "$24.99",
            description: "Complete kit for pour over coffee brewing",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        }
    ];
    
    // Function to load menu items
    function loadMenuItems(category) {
        menuItemsContainer.innerHTML = '';
        
        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h3>${item.name}</h3>
                        <span>${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                </div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }
    
    // Function to load products
    function loadProducts() {
        const productGrid = document.querySelector('.product-grid');
        productGrid.innerHTML = '';
        
        productData.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="product-price">${product.price}</span>
                    <p>${product.description}</p>
                    <button class="btn">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }
    
    // Initialize with coffee menu
    loadMenuItems('coffee');
    loadProducts();
    
    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load the corresponding menu items
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialSlides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Animate numbers in about section
    function animateNumbers() {
        const numberElements = document.querySelectorAll('.number');
        
        numberElements.forEach(element => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000; // Animation duration in ms
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            
            const updateNumber = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    element.textContent = target;
                }
            };
            
            updateNumber();
        });
    }
    
    // Trigger number animation when about section is in view
    const aboutSection = document.querySelector('.about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(aboutSection);
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon at ${email}.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter soon.`);
            
            emailInput.value = '';
        });
    }
});