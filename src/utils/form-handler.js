/**
 * Handles form submission and sends data to the server
 * @param {Event} e - Form submit event
 * @param {string} formType - Type of form (contact, course, teacher-training, franchise)
 */
export async function handleFormSubmit(e, formType = 'contact') {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    try {
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            course: formData.get('course') || formType,
            message: formData.get('message') || ''
        };

        // Send data to server
        const response = await fetch('https://fairfineduhub.com/api/send_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (result.success) {
            // Show success message
            alert(result.message);
            form.reset();
            
            // Close modal if exists
            const modal = form.closest('.modal');
            if (modal) {
                const modalInstance = bootstrap.Modal.getInstance(modal);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        } else {
            throw new Error(result.message || 'Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending your message. Please try again later.');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
}

/**
 * Initializes all forms on the page
 */
export function initializeForms() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'contact'));
    }

    // Course inquiry form
    const courseForm = document.getElementById('course-inquiry-form');
    if (courseForm) {
        courseForm.addEventListener('submit', (e) => handleFormSubmit(e, 'course-inquiry'));
    }

    // Teacher training form
    const teacherForm = document.getElementById('teacher-training-form');
    if (teacherForm) {
        teacherForm.addEventListener('submit', (e) => handleFormSubmit(e, 'teacher-training'));
    }

    // Franchise form
    const franchiseForm = document.getElementById('franchise-form');
    if (franchiseForm) {
        franchiseForm.addEventListener('submit', (e) => handleFormSubmit(e, 'franchise-inquiry'));
    }
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeForms);
