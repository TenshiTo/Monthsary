let currentPage = 0;
        function nextPage(index) {
            const pages = document.querySelectorAll('.page');
            if (index < pages.length - 1) {
                pages[currentPage].classList.add('flipped');
                currentPage++;
            }
        }