// Utility function voor event delegation
function delegate(element, eventType, selector, handler) {
    element.addEventListener(eventType, function(event) {
        let target = event.target.closest(selector);
        if (target && element.contains(target)) {
            handler.call(target, event);
        }
    });
}

// Document ready handler
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchBox = document.querySelector('.search-box');
    let searchTimeout;
    
    searchBox.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                console.log('Zoeken naar:', searchTerm);
                // Implement search logic here
            }
        }, 300); // Debounce search input
    });

    // Category items delegation
    const sidebar = document.querySelector('.sidebar');
    delegate(sidebar, 'click', '.category-item', function(event) {
        const categoryName = this.querySelector('span').textContent;
        console.log('Categorie geselecteerd:', categoryName);
        // Implement category filter logic here
    });

    // Document cards delegation
    const documentsGrid = document.querySelector('.documents-grid');
    delegate(documentsGrid, 'click', '.document-card', function(event) {
        if (!event.target.closest('.action-btn')) {
            const title = this.querySelector('.document-title').textContent;
            console.log('Document geopend:', title);
            // Implement document navigation here
        }
    });

    // Action buttons delegation
    delegate(documentsGrid, 'click', '.action-btn', function(event) {
        event.stopPropagation();
        if (this.textContent.includes('Bewaren')) {
            this.innerHTML = '⭐ Bewaard';
            this.style.background = '#ffc107';
            this.style.color = 'white';
        }
        console.log('Actie:', this.textContent);
        // Implement action logic here
    });

    // View options delegation
    const viewOptions = document.querySelector('.view-options');
    delegate(viewOptions, 'click', '.view-btn', function() {
        viewOptions.querySelectorAll('.view-btn').forEach(btn => 
            btn.classList.remove('active')
        );
        this.classList.add('active');
        
        const viewType = this.textContent.toLowerCase();
        console.log('View gewijzigd naar:', viewType);
        // Implement view change logic here
    });

    // Navigation items delegation
    const navBar = document.querySelector('.nav-bar');
    delegate(navBar, 'click', '.nav-item', function() {
        navBar.querySelectorAll('.nav-item').forEach(item => 
            item.classList.remove('active')
        );
        this.classList.add('active');
        
        const section = this.textContent;
        console.log('Navigatie naar:', section);
        // Implement navigation logic here
    });
}); 