        // Global state
        let activeDropdown = null;
        let isSearchOpen = false;
        let isBookmarksOpen = false;
        let isTopicsExpanded = false;
        let isPlaying = false;

        // Dropdown functionality
        function toggleDropdown(dropdownName) {
            const dropdown = document.getElementById(dropdownName + 'Dropdown');
            const isCurrentlyActive = dropdown.classList.contains('active');
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
            
            // If it wasn't active, open it
            if (!isCurrentlyActive) {
                dropdown.classList.add('active');
                activeDropdown = dropdownName;
            } else {
                activeDropdown = null;
            }
        }

        // Search functionality
        function toggleSearch() {
            const searchPanel = document.getElementById('searchPanel');
            const bookmarksPanel = document.getElementById('bookmarksPanel');
            
            isSearchOpen = !isSearchOpen;
            isBookmarksOpen = false;
            
            if (isSearchOpen) {
                searchPanel.classList.add('active');
                bookmarksPanel.classList.remove('active');
            } else {
                searchPanel.classList.remove('active');
            }
        }

        // Bookmarks functionality
        function toggleBookmarks() {
            const searchPanel = document.getElementById('searchPanel');
            const bookmarksPanel = document.getElementById('bookmarksPanel');
            
            isBookmarksOpen = !isBookmarksOpen;
            isSearchOpen = false;
            
            if (isBookmarksOpen) {
                bookmarksPanel.classList.add('active');
                searchPanel.classList.remove('active');
            } else {
                bookmarksPanel.classList.remove('active');
            }
        }

        // Close panel functionality
        function closePanel(panelType) {
            if (panelType === 'search') {
                document.getElementById('searchPanel').classList.remove('active');
                isSearchOpen = false;
            } else if (panelType === 'bookmarks') {
                document.getElementById('bookmarksPanel').classList.remove('active');
                isBookmarksOpen = false;
            }
        }

        // Language functionality
        function setLanguage(lang) {
            console.log('Language set to:', lang);
            // Close dropdown
            document.getElementById('languageDropdown').classList.remove('active');
            activeDropdown = null;
        }

        // Topics toggle functionality
        function toggleTopics() {
            isTopicsExpanded = !isTopicsExpanded;
            const topicsContent = document.getElementById('topicsContent');
            const chevron = document.getElementById('chevron');
            
            if (isTopicsExpanded) {
                topicsContent.classList.add('expanded');
                chevron.classList.add('rotated');
            } else {
                topicsContent.classList.remove('expanded');
                chevron.classList.remove('rotated');
            }
        }

        // Audio player functionality
        function togglePlay() {
            const playIcon = document.getElementById('playIcon');
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
            } else {
                playIcon.innerHTML = '<polygon points="5,3 19,12 5,21"></polygon>';
            }
        }

        // Form submission
        function submitForm(event) {
            event.preventDefault();
            alert('Thank you for your question! We will get back to you soon.');
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
                activeDropdown = null;
            }
            
            if (!event.target.closest('.panel') && !event.target.closest('.icon-button')) {
                document.getElementById('searchPanel').classList.remove('active');
                document.getElementById('bookmarksPanel').classList.remove('active');
                isSearchOpen = false;
                isBookmarksOpen = false;
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Keyboard navigation support
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                // Close all open panels and dropdowns
                document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
                document.getElementById('searchPanel').classList.remove('active');
                document.getElementById('bookmarksPanel').classList.remove('active');
                activeDropdown = null;
                isSearchOpen = false;
                isBookmarksOpen = false;
            }
        });

        // // Auto-hide header on scroll down, show on scroll up
        // let lastScroll = window.pageYOffset;
        // const header = document.querySelector('.header');
        // const headerHeight = header.offsetHeight;

        // window.addEventListener('scroll', function() {
        //     const currentScroll = window.pageYOffset;

        //     if (currentScroll > lastScroll && currentScroll > headerHeight) {
        //         // Scrolling down, hide header and remove fixed position
        //         header.classList.remove('fixed');
        //         header.classList.remove('hide');
        //     } else if (currentScroll < lastScroll && currentScroll > headerHeight) {
        //         // Scrolling up, show header as fixed overlay, with animation
        //         header.classList.add('fixed');
        //         // Use a slight delay to allow the browser to apply position before removing .hide
        //         setTimeout(() => {
        //             header.classList.remove('hide');
        //         }, 10); // 10ms is enough
        //     } else if (currentScroll <= headerHeight) {
        //         // At top of page, header is part of normal flow
        //         header.classList.remove('fixed');
        //         header.classList.remove('hide');
        //     }
        //     lastScroll = currentScroll;
        // });
