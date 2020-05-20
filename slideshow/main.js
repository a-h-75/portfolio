(() => {
    'use strict';

    var images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg'
    ];

    var current = 0;
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var page = document.getElementById('page');
    var thumbnails = document.getElementById('thumbnails');  
    var mainImage = document.getElementById('main_image');

    // var thumbs = document.querySelectorAll('.thumbnail_image');
    // for (var i=0; i<thumbs.length; i++) {
    //     thumbs[i].addEventListener('click', function() {
    //         mainImage.src = 'images/' + this.dataset.image;
    //         current = this.dataset.index;
    //         displayPageNumber();
    //     });
    // }

    function createThumbnails() {
        var li;
        var img;
        for (var i=0; i<images.length; i++) {
            li = document.createElement('li');
            li.dataset.index = i;
            li.addEventListener('click', function() {
                thumbnails.children[current].className = '';
                mainImage.src = this.children[0].src;
                current = this.dataset.index;
                this.className = 'current_image';
                displayPageNumber();
            });

            if (i == 0) {
                li.className = 'current_image';
            } else {
                li.className = '';
            }

            img = document.createElement('img');
            img.src = images[i];
            img.className = 'thumbnail_image';
            li.appendChild(img);
            thumbnails.appendChild(li);
        }
    }

    function displayPageNumber() {
        page.textContent = (Number(current) + 1) + '/' + images.length;
    }

    displayPageNumber();
    createThumbnails();

    prev.addEventListener ('click', function() {
        thumbnails.children[current].className = '';
        current--;
        if (current < 0) {
            current = images.length - 1;
        }

        mainImage.src = images[current];
        thumbnails.children[current].className = 'current_image';
        displayPageNumber();
    });

    next.addEventListener ('click', function() {
        thumbnails.children[current].className = '';
        current++;
        if (current > images.length -1 ) {
            current = 0;
        }

        mainImage.src = images[current];
        thumbnails.children[current].className = 'current_image';
        displayPageNumber();
    });

})();