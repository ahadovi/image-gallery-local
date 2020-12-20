// Selector
const thumbImg = document.querySelector('#thumbImg');
const images = document.querySelector('.avatar-images');

// Images Array
const avatarImgs = [
    {
        avatar : 'assets/img/img0.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img1.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img2.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img3.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img4.jpg',
        selected: false,
    },
    {
        avatar : 'assets/img/img5.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img6.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img7.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img8.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img9.webp',
        selected: false,
    },
    {
        avatar : 'assets/img/img10.webp',
        selected: false,
    },
]

// Initially Selected
thumbImg.src = avatarImgs[0].avatar;

// Every Image loop
avatarImgs.forEach( e => {
    // Create Element for Every Image
    const img = document.createElement('img')
    img.src = e.avatar;

    // Image Click to Show
    img.addEventListener('click', (e) => {
        thumbImg.src = e.target.src;
    });

    images.appendChild(img);
});


