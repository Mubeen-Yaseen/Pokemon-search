const statsHP = document.getElementById('hp');
const attact = document.getElementById('attact');
const defence = document.getElementById('defence');
const spattact = document.getElementById('sp-attact');
const spdefence = document.getElementById('sp-defence');
const Speed = document.getElementById('speed');
const searchbtn = document.getElementById('btn');
const inputtext = document.getElementById('inputtext');
const Name = document.getElementById('name');
const ID = document.getElementById('Id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const pokemon = document.getElementById('pokemon');
const types = document.getElementById('types');

const GetPokemon = async () => {
    try {

        pokemonorid = inputtext.value.toLowerCase();
        const Response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonorid}`);
        const data = await Response.json()

        // pokemon power
        statsHP.textContent = data.stats[0].base_stat;
        attact.textContent = data.stats[1].base_stat;
        defence.textContent = data.stats[2].base_stat;
        spattact.textContent = data.stats[3].base_stat;
        spdefence.textContent = data.stats[4].base_stat;
        Speed.textContent = data.stats[5].base_stat;


        // Pokemon Info
        Name.textContent = data.name.toUpperCase();
        ID.textContent = ` #${data.id}`
        weight.textContent = `Weight: ${data.weight}  `
        height.textContent = `  Height: ${data.height}`
        pokemon.innerHTML = `<img  id="pokemon-img"src="${data.sprites.front_default}" alt="${data.name} #${data.id}">`;

        // pokemon types 
        types.innerHTML = data.types.map(pot => `<span class="type ${pot.type.name}">${pot.type.name.toUpperCase()}</span>`)
            .join('');



        // In the case of error 

    } catch (err) {
        resettpokemon()
        alert('Pokémon not Found');
        console.log(`Pokemon not Found: ${err}`)
    }
}

const resettpokemon = () => {
    statsHP.textContent = '';
    attact.textContent = '';
    defence.textContent = '';
    spattact.textContent = '';
    spdefence.textContent = '';
    Speed.textContent = '';
    types.innerHTML = '';
    Name.textContent = '';
    ID.textContent = '';
    weight.textContent = '';
    height.textContent = '';
    pokemon.innerHTML = '';
    inputtext.value='';
}
// Add event Listener 

searchbtn.addEventListener('click', function () {
    GetPokemon('inputtext.value')
});