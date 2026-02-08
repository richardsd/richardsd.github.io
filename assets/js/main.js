/**
 * Main JavaScript for Ricardo Dias' personal site
 * Handles mobile navigation and active section highlighting
 */

(function() {
  'use strict';

  // ========================================
  // Mobile Navigation
  // ========================================
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  if (menuToggle && navMenu) {
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (!isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.focus();
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ========================================
  // Active Section Highlighting
  // ========================================
  
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-menu a[href^="#"]');
  
  function highlightNavigation() {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (href === `#${currentSection}`) {
        item.classList.add('active');
      }
    });
  }
  
  // Highlight on scroll with throttling
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(highlightNavigation);
  });
  
  // Highlight on load
  highlightNavigation();

  // ========================================
  // Smooth Scroll Enhancement
  // ========================================
  
  // Add smooth scroll behavior for older browsers
  navItems.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      }
    });
  });

  // ========================================
  // Loading Animation (fade-in on scroll)
  // ========================================
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Apply fade-in animation to cards, timeline items, etc.
  const animatedElements = document.querySelectorAll(
    '.project-card, .timeline-item, .publication-item, .now-item, .highlights'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ========================================
  // External Link Handling
  // ========================================
  
  // Add security attributes to external links
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('target', '_blank');
    }
  });

  // ========================================
  // Performance: Preload hover images
  // ========================================
  
  // If we had any hover images, we'd preload them here
  // For now, this is a placeholder for future enhancements

  console.log('✨ Site loaded successfully');
  
})();
