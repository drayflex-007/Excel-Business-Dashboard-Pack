‎// Excel Business Dashboard Pack — interactions
‎// Mobile nav toggle + FAQ accordion. No dependencies, no backend.
‎
‎document.addEventListener('DOMContentLoaded', function () {
‎
‎  // ---- Mobile nav toggle ----
‎  var navToggle = document.getElementById('navToggle');
‎  var mainNav = document.querySelector('.main-nav');
‎
‎  if (navToggle && mainNav) {
‎    navToggle.addEventListener('click', function () {
‎      var isOpen = mainNav.classList.toggle('open');
‎      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
‎    });
‎
‎    // Close menu after tapping a link (mobile)
‎    mainNav.querySelectorAll('a').forEach(function (link) {
‎      link.addEventListener('click', function () {
‎        mainNav.classList.remove('open');
‎        navToggle.setAttribute('aria-expanded', 'false');
‎      });
‎    });
‎  }
‎
‎  // ---- FAQ accordion ----
‎  var faqButtons = document.querySelectorAll('.faq-q');
‎
‎  faqButtons.forEach(function (button) {
‎    var answer = button.nextElementSibling;
‎
‎    button.addEventListener('click', function () {
‎      var isOpen = button.getAttribute('aria-expanded') === 'true';
‎
‎      // Close all other answers
‎      faqButtons.forEach(function (otherButton) {
‎        if (otherButton !== button) {
‎          otherButton.setAttribute('aria-expanded', 'false');
‎          otherButton.nextElementSibling.style.maxHeight = null;
‎        }
‎      });
‎
‎      // Toggle this one
‎      if (isOpen) {
‎        button.setAttribute('aria-expanded', 'false');
‎        answer.style.maxHeight = null;
‎      } else {
‎        button.setAttribute('aria-expanded', 'true');
‎        answer.style.maxHeight = answer.scrollHeight + 'px';
‎      }
‎    });
‎  });
‎
‎});
‎
