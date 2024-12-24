document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            message: document.querySelector('#message').value
        };

        // Validate form
        if (!validateForm(formData)) return;

        // Show sending state
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Here you would typically send to a server
            // Simulating send delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert('Message sent successfully!');
            contactForm.reset();
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        }
    });
});

function validateForm(data) {
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
}