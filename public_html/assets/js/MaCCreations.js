document.addEventListener('DOMContentLoaded', function () {
    const scrollToPortfolioButton = document.getElementById('scrollToPortfolio');
    const portfolioSection = document.getElementById('portfolio');

    scrollToPortfolioButton.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the portfolio section with a slow, smooth animation
        slowScroll(portfolioSection);
    });

    function slowScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollAmount = easeInOut(timeElapsed, startPosition, distance, 2000); // 2000ms duration (2 seconds)

            window.scrollTo(0, scrollAmount);

            if (timeElapsed < 2000) { // 2000ms is the total duration for scrolling
                requestAnimationFrame(animation);
            }
        }

        function easeInOut(t, b, c, d) {
            let newT = t / (d / 2);
            if (newT < 1) return (c / 2) * newT * newT + b;
            newT--;
            return (-c / 2) * (newT * (newT - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});
/*!
=========================================================
* MaCCreations Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});