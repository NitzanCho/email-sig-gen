function monitorButtonAttributes() {
    const button = document.getElementById('accessibe-button');

    if (!button) {
        console.error('Button not found');
        return;
    }

    // Create a MutationObserver instance to observe changes in the button's attributes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // Check if the mutation is an attribute change
            if (mutation.type === 'attributes') {
                // Add a new attribute 'beTrigger' with value 'true'
                button.setAttribute('beTrigger', 'true');
            }
        });
    });

    // Configure the observer to listen for attribute changes
    const config = {
        attributes: true, // Observe changes to attributes
        attributeFilter: ['class', 'style', 'disabled', 'data-*'], // Optional: specify which attributes to monitor
    };

    // Start observing the button element
    observer.observe(button, config);

    // Optionally, disconnect the observer after a certain time or event if needed
    // setTimeout(() => observer.disconnect(), 5000);  // Example: disconnect after 5 seconds
}

// Call the function to start monitoring the button
monitorButtonAttributes();
