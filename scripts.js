document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                // Close all answers
                document.querySelectorAll('.faq-answer').forEach(function(item) {
                    item.style.display = 'none';
                });
                answer.style.display = 'block';
            }
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formStatus = document.getElementById('form-status');
        formStatus.textContent = 'Sending message...';

        // Simulate form submission process
        setTimeout(function() {
            formStatus.textContent = 'Thank you for your message. We will get back to you shortly.';
            contactForm.reset();
        }, 2000);
    });
});
