const videos = document.querySelectorAll('.video-box video');
        const modal = document.getElementById('videoModal');
        const popupVideo = document.getElementById('popupVideo');
        const closeBtn = document.querySelector('.close-btn');

        videos.forEach(video => {
            video.addEventListener('click', () => {

                const src = video.querySelector('source').src;

                popupVideo.src = src;
                modal.classList.add('active');
                popupVideo.play();
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            popupVideo.pause();
            popupVideo.currentTime = 0;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                popupVideo.pause();
                popupVideo.currentTime = 0;
            }
        });