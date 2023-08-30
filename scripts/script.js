const cardData = [
    {
        imgSrc: 'assets/Website.png',
        title: 'EdFRAX Web App Project',
        description: 'NFT Website - I have created this dummy website with React.JS.',
        link: 'https://edfrax.netlify.app/'
    },
    {
        imgSrc: 'assets/Natours.png',
        title: 'Advanced CSS And SASS project',
        description: 'This project has Sass and advanced css. It is designed by Jonas Schmedtmann',
        link: 'https://edfrax.github.io/Natours/'
    },
    {
        imgSrc: 'assets/erc-721a.png',
        title: 'Minting Dapp ERC-721A',
        description: 'Minting Dapp ERC-721A - This was nft minting dapp with ERC-721A contract on Polygon testnet, it may not work now',
        link: 'https://edfrax.netlify.app/templates/temp_2'
    },
    {
        imgSrc: 'assets/erc-721.png',
        title: 'Minting Dapp ERC-721',
        description: 'Minting Dapp ERC-721 - This was nft minting dapp with ERC-721 contract on Rinkeby testnet, it may not work now.',
        link: 'https://3dshapes.netlify.app/'
    },
    {
        imgSrc: 'assets/phn-task.png',
        title: 'PHN Task',
        description: 'PHN Task - The only thing that is impressive about this small project is that there is no framework and javascript used in this and still it is fully responsive.',
        link: 'https://phn-task.netlify.app/'
    },
];

const dataContainer = document.getElementById('data');

cardData.forEach(card => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card_container', 'col-md-6', 'mb-2');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.src = card.imgSrc;
    imgElement.alt = card.title;
    imgElement.classList.add('card_img');
    imgElement.style.width = '100%';

    const cardCenter = document.createElement('div');
    cardCenter.classList.add('card_center');

    const cardText = document.createElement('div');
    cardText.classList.add('card_text');
    cardText.innerHTML = `${card.description} <br><a href="${card.link}" target="_blank">Click here to view</a>`;

    cardCenter.appendChild(cardText);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardCenter);

    cardContainer.appendChild(cardElement);

    dataContainer.appendChild(cardContainer);
});