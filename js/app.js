// all about Health Article 
function swapRight() {
    const articles = document.querySelector('.articles');
    const contentItems = Array.from(articles.children);
    articles.appendChild(contentItems[0]);
}

function swapLeft() {
    const articles = document.querySelector('.articles');
    const contentItems = Array.from(articles.children);
    articles.insertBefore(contentItems[contentItems.length - 1], contentItems[0]);
}

// all about Health Article2
document.addEventListener('DOMContentLoaded', function() {
    const view2 = document.querySelector('.view2');
    const close2 = document.querySelector('.close2');
    const articles = document.querySelector('#articles');

    view2.addEventListener('click', function() {
        articles.classList.add('show');
        view2.style.display = 'none'
        close2.style.display = 'block'
    });

    close2.addEventListener('click', function() {
        articles.classList.remove('show');
        close2.style.display = 'none'
        view2.style.display = 'block'
    });
});


// swiper
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// health-swiper
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container-2', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,

        navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left',
        },
    });
});

// swiper2
document.addEventListener('DOMContentLoaded', function() {
    const view = document.getElementById('view');
    const closeAll = document.querySelector('.close');
    const swp1 = document.querySelector('.swiper1');

    view.addEventListener('click', function() {
        swp1.classList.add('show');
        view.style.display = 'none'
        closeAll.style.display = 'block'
    });
    
    closeAll.addEventListener('click', function() {
        swp1.classList.remove('show');
        closeAll.style.display = 'none'
        view.style.display = 'block'
    });
});



// FORM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new');
    const toast = document.getElementById('toast');
    const submitButton = document.querySelector('button[type="submit"]')

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            firstName: formData.get('firstName'),
            email: formData.get('email'),
            feedback: formData.get('FeedBack'),
            user: formData.get('goldlee')
        };

        submitButton.textContent = "Sending..."

        try {
            const response = await fetch('https://class-contact-form.onrender.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showToast('Message sent successfully!');
            } else {
                showToast('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            showToast('An error occurred while sending the message.');
        }

        submitButton.textContent = "Send Message"
    });

    function showToast(message) {
        toast.textContent = message;
        toast.className = 'toast show';
        setTimeout(() => { toast.className = 'toast'; }, 3000);
    }
});

async function fetchMessages(user) {
    try {
        const response = await fetch(`https://class-contact-form.onrender.com/${goldlee}/contacts`);
        
        if (response.ok) {
            const messages = await response.json();
            console.log('Messages:', messages);
            // Handle the messages as needed
        } else {
            console.error('Failed to retrieve messages.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}



// Script for navigation bar
    document.addEventListener('DOMContentLoaded', function() {
        const bar = document.getElementById('bar');
        const close = document.getElementById('close');
        const navbar = document.querySelector('.navbar');

        bar.addEventListener('click', function() {
            navbar.classList.add('show');
        });

        close.addEventListener('click', function() {
            navbar.classList.remove('show');
        });
    });

