
// how
function swapLeft() {
    const articles = document.querySelector('.articles');
    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');
    const content3 = document.querySelector('.content3');

    // Rotate positions: content1 -> content2, content2 -> content3, content3 -> content1
    articles.insertBefore(content1, content3.nextSibling);
    
    // Update class names to reflect the new order
    content1.className = 'content3 article';
    content2.className = 'content1 article';
    content3.className = 'content2 article';
}

function swapRight() {
    const articles = document.querySelector('.articles');
    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');
    const content3 = document.querySelector('.content3');
    

    // Rotate positions: content3 -> content2, content2 -> content1, content1 -> content3
    articles.insertBefore(content3, content1);
    
    // Update class names to reflect the new order
    content1.className = 'content2 article';
    content2.className = 'content3 article';
    content3.className = 'content1 article';
}


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



// FORM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new');
    const toast = document.getElementById('toast');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            firstName: formData.get('firstName'),
            email: formData.get('email'),
            feedback: formData.get('FeedBack'),
            user: formData.get('goldlee')
        };

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

