let nameLabel = document.getElementById('name-label');
let reroll = document.getElementById('reroll-button');
let next = document.getElementById('next-button');

next.addEventListener('click', () => {
    document.getElementById("first-screen").style.display = 'none';
    document.getElementById("second-screen").style.display = 'flex';
});

reroll.addEventListener('click', changeName);

async function loadName() {
    try {
        const response = await fetch(`https://api.randomdatatools.ru/?typeName=rare&params=FirstName`);
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        let name = await response.json();
        return name.FirstName;
    } catch (error) {
        console.error(error);
        return;
    }
}

async function setupName() {
    let name = await loadName()
    nameLabel.textContent += " "
    nameLabel.textContent += name
    nameLabel.textContent += ", ок?"
}

async function changeName() {
    let name = await loadName()
    nameLabel.textContent = `Хм... Тогда что насчёт ${name} ?`;
}

setupName()