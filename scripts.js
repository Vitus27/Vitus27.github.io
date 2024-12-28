document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.slideshow').forEach(slideshow => {
        const slides = slideshow.querySelector('.slides');
        const images = slides.children;
        const dotsContainer = slideshow.querySelector('.dots');
        let index = 0;

        // Tworzenie kropek
        for (let i = 0; i < images.length; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                showSlide(i);
            });
            dotsContainer.appendChild(dot);
        }

        const dots = dotsContainer.children;

        // Funkcja wyświetlania slajdu
        const showSlide = (i) => {
            index = (i + images.length) % images.length;
            slides.style.transform = `translateX(${-index * 100}%)`;
            updateDots();
        };

        // Aktualizacja kropek
        const updateDots = () => {
            Array.from(dots).forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        };

        // Obsługa przycisków "prev" i "next"
        slideshow.querySelector('.prev').addEventListener('click', () => {
            showSlide(index - 1);
        });

        slideshow.querySelector('.next').addEventListener('click', () => {
            showSlide(index + 1);
        });

        // Inicjalizacja pierwszej kropki jako aktywnej
        showSlide(0);
    });
});