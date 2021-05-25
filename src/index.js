const init = () => {

    // Challenge 1 code: load images into img elements
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
        const imgContainer = document.querySelector('#dog-image-container');
        
        // data returns an object with a key 'message' and a value containing an array of image urls
        const imgArray = data.message;
        imgArray.map((element) => {
            const imgElement = document.createElement('img');
            imgElement.src = element;
            imgContainer.appendChild(imgElement);
        })
    })

    // Challenge 2 code: load breed names into ul element
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const ulContainer = document.querySelector('#dog-breeds');

        // data returns an object with a key 'message' and a value containing another object of dog breeds and subbreeds
        const breedObject = data.message;
        const breeds = Object.keys(breedObject);

        breeds.map(breed => {
            const liElement = document.createElement('li');
            liElement.innerText = breed;
            ulContainer.appendChild(liElement);
            liElement.addEventListener('click', changeColor);
        })

        // Challenge 4 (filter breeds via dropdown)
        const dropDown = document.querySelector('select');

        dropDown.addEventListener('change', function() {
            ulContainer.innerText = '';
            breeds.map(breed => {
                if (breed.startsWith(dropDown.value)) {
                    console.log(breed);
                    const liElement = document.createElement('li');
                    liElement.innerText = breed;
                    ulContainer.appendChild(liElement);
                    liElement.addEventListener('click', changeColor);
                }
            })
        })
    })

    // Challenge 3 code: change breed name on click event
    function changeColor(event) {
        event.target.style.color = 'purple';
        event.target.style.backgroundColor = 'rgb(191, 205, 178)';
    }
}

document.addEventListener('DOMContentLoaded', init);
