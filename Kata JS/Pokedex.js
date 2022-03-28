const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon0.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeNam = data.name;
            pokesName(pokeNam);
            console.log("Este es el nombre" + pokeNam);

            let pokeId = data.id;
            pokeIdi(pokeId);
            console.log("Este es el ID" + pokeId);

            let pokeType = data.types[0].type.name;
            pokeTipo(pokeType);
            console.log("Este es el Tipo" + pokeType);

            let pokeStat = {
               hp: data.stats[0].base_stat,
               attack: data.stats[1].base_stat,
               defense: data.stats[2].base_stat,
               speed: data.stats[5].base_stat
            
            }

            hp(pokeStat.hp);
            attack(pokeStat.attack);
            defense(pokeStat.defense);
            speed(pokeStat.speed);

           
            let pokeMove = {
                movimiento0: data.moves[0].move.name,
                movimiento1: data.moves[1].move.name,
                movimiento2: data.moves[2].move.name,
                movimiento3: data.moves[3].move.name,
                movimiento4: data.moves[4].move.name,
                movimiento5: data.moves[5].move.name
            }

            pokeMoves(pokeMove.movimiento0);
            pokeMoves0(pokeMove.movimiento0);
            pokeMoves1(pokeMove.movimiento1);
            pokeMoves2(pokeMove.movimiento2);
            pokeMoves3(pokeMove.movimiento3);
            pokeMoves4(pokeMove.movimiento4);
            pokeMoves5(pokeMove.movimiento5);


            let pokeHeight = data.height;
            pokeAltura(pokeHeight);

            let pokeWeight = data.weight;
            pokePeso(pokeWeight);
        
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


const pokesName = (url) => {
    X = url;
    const pokeNames = document.getElementById("pokeNam").innerHTML = X;
    }


const pokeIdi = (url) => {
        X = url;
        const pokesId = document.getElementById("pokeId").innerHTML = "#"+X;
        }
    

const pokeTipo = (url) => {
        X = url;
        const pokestype = document.getElementById("pokeType").innerHTML = "TYPE: " + X;
        }
    
const hp = (url) => {
        X = url;
        const pokesstats = document.getElementById("hp").innerHTML = "HEALTH: " + X;
        }

const attack = (url) => {
        X = url;
        const pokesstats = document.getElementById("attack").innerHTML = "ATTACK: " + X;
        }

const defense = (url) => {
        X = url;
        const pokesstats = document.getElementById("defense").innerHTML = "DEFENSE: " + X;
        }

const speed = (url) => {
        X = url;
        const pokesstats = document.getElementById("speed").innerHTML = "SPEED: " + X;
        }


const pokeMoves0 = (url) => {
        X = url;
        const pokesmoves = document.getElementById("pokeMove0").innerHTML = X;
        }

const pokeMoves1 = (url) => {
    X = url;
    const pokesmoves = document.getElementById("pokeMove1").innerHTML = X;
    }

const pokeMoves2 = (url) => {
    X = url;
    const pokesmoves = document.getElementById("pokeMove2").innerHTML = X;
    }

const pokeMoves3 = (url) => {
    X = url;
    const pokesmoves = document.getElementById("pokeMove3").innerHTML = X;
    }

const pokeMoves4 = (url) => {
    X = url;
    const pokesmoves = document.getElementById("pokeMove4").innerHTML = X;
    }

const pokeMoves5 = (url) => {
    X = url;
    const pokesmoves = document.getElementById("pokeMove5").innerHTML = X;
    }

const pokeMoves = (url) => {
    X = url;
    const pokesmoves = document.getElementById("pokeMove").innerHTML = "MOVES: ";
    }

const pokeAltura = (url) => {
        X = url;
        const pokestype = document.getElementById("pokeHeight").innerHTML = "ALTURA: " + X;
        }

const pokePeso = (url) => {
        X = url;
        const pokestype = document.getElementById("pokeWeight").innerHTML = "PESO: " + X;
        }