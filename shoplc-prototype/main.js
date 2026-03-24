/* ============================================
   DERA — Interactive Behaviors
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- URL Parameter Handling (Collection Page) ---
    const params = new URLSearchParams(window.location.search);
    const gemParam = params.get('gem');
    if (gemParam) {
        const gemNames = {
            'tanzanite': 'Tanzanite', 'lab-diamond': 'Lab-Grown Diamond', 'sapphire': 'Sapphire',
            'emerald': 'Emerald', 'morganite': 'Morganite', 'opal': 'Opal', 'ruby': 'Ruby', 'aquamarine': 'Aquamarine'
        };
        const gemLabel = gemNames[gemParam] || gemParam;

        // Update heading to show gemstone collection
        const title = document.querySelector('.collection-title');
        if (title) title.textContent = gemLabel.toUpperCase();

        const desc = document.querySelector('.collection-description');
        if (desc) desc.textContent = 'Certified ' + gemLabel + ' jewelry — rings, necklaces, earrings, and bracelets at direct-to-you prices.';

        const crumbSpan = document.querySelector('.breadcrumb span');
        if (crumbSpan) crumbSpan.textContent = gemLabel;

        // Auto-check the matching gemstone filter
        document.querySelectorAll('.filter-option').forEach(label => {
            if (label.textContent.toLowerCase().includes(gemParam.replace('-', ' '))) {
                const checkbox = label.querySelector('input[type="checkbox"]');
                if (checkbox) checkbox.checked = true;
            }
        });

        // Hide category tabs since we're browsing by gemstone
        const catBar = document.querySelector('.category-tabs-bar');
        if (catBar) catBar.style.display = 'none';
    }

    // --- Announcement Bar Carousel ---
    const slides = document.querySelectorAll('.announcement-slide');
    if (slides.length > 1) {
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 4000);
    }

    // Close announcement bar
    const annClose = document.querySelector('.announcement-close');
    if (annClose) {
        annClose.addEventListener('click', () => {
            annClose.closest('.announcement-bar').style.display = 'none';
        });
    }

    // --- Cart Drawer ---
    const cartToggle = document.querySelector('.cart-toggle');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartClose = document.querySelector('.cart-close');

    function openCart() {
        if (cartDrawer) cartDrawer.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        if (cartDrawer) cartDrawer.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (cartToggle) cartToggle.addEventListener('click', openCart);
    if (cartClose) cartClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // --- Filter Sidebar Toggle (Mobile) ---
    const filterToggleBtn = document.getElementById('filterToggle');
    const filterSidebar = document.getElementById('filterSidebar');
    const filterCloseBtn = document.querySelector('.filter-close');

    if (filterToggleBtn && filterSidebar) {
        filterToggleBtn.addEventListener('click', () => {
            filterSidebar.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }
    if (filterCloseBtn && filterSidebar) {
        filterCloseBtn.addEventListener('click', () => {
            filterSidebar.classList.remove('open');
            document.body.style.overflow = '';
        });
    }

    // --- Filter Accordion Toggles ---
    document.querySelectorAll('.filter-toggle').forEach(toggle => {
        if (toggle.id === 'filterToggle') return; // skip mobile button
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            const options = toggle.nextElementSibling;
            if (options) options.classList.toggle('show');
        });
    });

    // --- Category Tabs (Collection Page) ---
    const categoryData = {
        'Rings': { count: '6,196', desc: 'From solitaire tanzanite to lab-grown diamond halos — certified gemstone rings designed to be worn every day, at prices that let you build a real collection.', pills: ['All Rings','Solitaire','Halo','Tennis','Cocktail','Stacking','Promise','Engagement',"Men's"] },
        'Necklaces': { count: '1,384', desc: 'Pendant necklaces, tennis chains, and layering pieces — set with certified gemstones in sterling silver, gold vermeil, and 14K gold.', pills: ['All Necklaces','Pendants','Tennis','Chains','Layering','Chokers','Statement'] },
        'Earrings': { count: '1,225', desc: 'Studs, drops, hoops, and huggies — certified gemstone earrings that go from everyday to evening without missing a beat.', pills: ['All Earrings','Studs','Drops','Hoops','Huggies','Chandelier','Climbers'] },
        'Bracelets': { count: '1,269', desc: 'Tennis bracelets, bangles, and cuffs — certified gemstones set in designs you can stack or wear solo.', pills: ['All Bracelets','Tennis','Bangles','Cuffs','Chain','Charm'] },
        'Pendants': { count: '256', desc: 'Standalone certified gemstone pendants — pair with your favorite chain for a look that\'s uniquely yours.', pills: ['All Pendants','Solitaire','Halo','Cluster','Heart','Cross'] },
        'Sets': { count: '1,556', desc: 'Coordinated ring, earring, and necklace sets — certified gemstone jewelry designed to match, at a bundled price.', pills: ['All Sets','Ring + Earring','Necklace + Earring','3-Piece','Bridal'] },
    };

    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const name = tab.textContent.trim();
            const data = categoryData[name];
            if (!data) return;

            // Update active tab
            document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update page heading
            const title = document.querySelector('.collection-title');
            if (title) title.textContent = name.toUpperCase();

            // Update breadcrumb
            const crumbSpan = document.querySelector('.breadcrumb span');
            if (crumbSpan) crumbSpan.textContent = name;

            // Update description
            const desc = document.querySelector('.collection-description');
            if (desc) desc.textContent = data.desc;

            // Update product count
            const countEl = document.querySelector('.result-count');
            if (countEl) countEl.textContent = data.count + ' Products';
            const showingEl = document.querySelector('.showing-count');
            if (showingEl) showingEl.textContent = 'Showing 8 of ' + data.count + ' products';

            // Update subcategory pills
            const pillsWrap = document.querySelector('.subcategory-pills');
            if (pillsWrap) {
                pillsWrap.innerHTML = data.pills.map((p, i) =>
                    `<button class="pill${i === 0 ? ' active' : ''}">${p}</button>`
                ).join('');
                // Re-bind pill clicks
                pillsWrap.querySelectorAll('.pill').forEach(pill => {
                    pill.addEventListener('click', () => {
                        pillsWrap.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
                        pill.classList.add('active');
                    });
                });
            }
        });
    });

    // --- Subcategory Pills ---
    document.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // --- Product Gallery (PDP) ---
    const thumbs = document.querySelectorAll('.thumb');
    const gallerySlides = document.querySelectorAll('.gallery-slide');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.dataset.index);
            thumbs.forEach(t => t.classList.remove('active'));
            gallerySlides.forEach(s => s.classList.remove('active'));
            thumb.classList.add('active');
            if (gallerySlides[index]) gallerySlides[index].classList.add('active');
        });
    });

    // --- PDP Accordions ---
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.closest('.accordion').classList.toggle('open');
        });
    });

    // --- Variant Swatches ---
    document.querySelectorAll('.variant-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatch.closest('.variant-options')
                .querySelectorAll('.variant-swatch')
                .forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
        });
    });

    // --- Size Buttons ---
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.variant-sizes')
                .querySelectorAll('.size-btn')
                .forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // --- Wishlist Toggle ---
    document.querySelectorAll('.wishlist-btn, .btn-wishlist-pdp').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            btn.classList.toggle('wishlisted');
            const svg = btn.querySelector('svg path');
            if (svg) {
                if (btn.classList.contains('wishlisted')) {
                    svg.setAttribute('fill', '#d4838f');
                    svg.setAttribute('stroke', '#d4838f');
                } else {
                    svg.setAttribute('fill', 'none');
                    svg.setAttribute('stroke', 'currentColor');
                }
            }
        });
    });

    // --- Quick Add Animation ---
    document.querySelectorAll('.quick-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const original = btn.innerHTML;
            btn.innerHTML = '✓ Added to Cart';
            btn.style.background = 'var(--color-black)';
            btn.style.color = 'var(--color-white)';
            btn.style.borderColor = 'var(--color-black)';

            // Update cart count
            const countEl = document.querySelector('.cart-count');
            if (countEl) {
                countEl.textContent = parseInt(countEl.textContent) + 1;
            }

            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 1500);
        });
    });

    // --- Add to Cart (PDP) ---
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const original = addToCartBtn.textContent;
            addToCartBtn.textContent = '✓ Added to Cart to Bag';
            addToCartBtn.style.background = 'var(--color-success)';
            addToCartBtn.style.borderColor = 'var(--color-success)';

            const countEl = document.querySelector('.cart-count');
            if (countEl) {
                countEl.textContent = parseInt(countEl.textContent) + 1;
            }

            setTimeout(() => {
                addToCartBtn.textContent = original;
                addToCartBtn.style.background = '';
                addToCartBtn.style.borderColor = '';
                openCart();
            }, 1200);
        });
    }

    // --- Mobile Menu ---
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.getElementById('mobileMenuOverlay');

    function openMobileMenu() {
        if (navLinks) navLinks.classList.add('mobile-open');
        if (mobileToggle) mobileToggle.classList.add('open');
        if (mobileOverlay) mobileOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        if (navLinks) navLinks.classList.remove('mobile-open');
        if (mobileToggle) mobileToggle.classList.remove('open');
        if (mobileOverlay) mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.contains('mobile-open') ? closeMobileMenu() : openMobileMenu();
        });
    }
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // --- Mobile Dropdown Toggle ---
    const dropdownParent = document.querySelector('.nav-item.has-dropdown > a');
    if (dropdownParent) {
        dropdownParent.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = dropdownParent.nextElementSibling;
                if (dropdown) dropdown.classList.toggle('mobile-dropdown-open');
            }
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Header hide on scroll (subtle) ---
    let lastScroll = 0;
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll > 200 && scroll > lastScroll) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        header.style.transition = 'transform 0.3s ease';
        lastScroll = scroll;
    });

});
