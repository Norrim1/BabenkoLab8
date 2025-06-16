let cat = document.getElementById('cat-button');
let dog = document.getElementById('dog-button');
let fox = document.getElementById('fox-button');

let animal;

cat.addEventListener('click', goToCats);
dog.addEventListener('click', goToDogs);
fox.addEventListener('click', goToFoxes);

async function loadAnimal(animal) {
    try {
        let url = `https://api.some-random-api.com/animal/` + animal;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        let data = await response.json();
        const container = document.getElementById('api-content');
        container.innerHTML = `
        <img src="${data.image}" width=300>
        <p>${data.fact}</p>`;

    } catch (error) {
        console.error(error);
        return;
    }
}

function changeScreen(){
    document.getElementById("second-screen").style.display = 'none';
    document.getElementById("third-screen").style.display = 'flex';
}

function goToCats(){
    changeScreen();
    loadAnimal("cat");
    animal = "cat";
}

function goToDogs(){
    changeScreen();
    loadAnimal("dog");
    animal = "dog";
}

function goToFoxes(){
    changeScreen();
    loadAnimal("fox");
    animal = "fox";
}