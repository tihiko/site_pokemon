

function loadpk(normalGif) {





    //imput que vem o número do id
    id = document.getElementById("id__nome__pokemon")
    let url = 'https://pokeapi.co/api/v2/pokemon/';


    if (id.value.length == 0) {


    } else {

        solo = url + id.value.toLowerCase() + '/'

        fetch(solo)
            .then((response) => {
                return response.json();
            })

            .then((data) => {

                //Switch que define a cor de fundo de cada card
                switch (data['types'][0]['type']['name']) {
                    case "fire":
                        fundo = "orange"
                        break;
                    case "normal":
                        fundo = "white"
                        break;
                    case "poison":
                        fundo = "black"
                        break;
                    case "electric":
                        fundo = "gray"
                        break;
                    case "grass":
                        fundo = "green"
                        break;
                    case "psychic":
                        fundo = "tomato"
                        break;
                    case "ice":
                        fundo = "aquamarine"
                        break;
                    case "bug":
                        fundo = "burlywood"
                        break;
                    case "steel":
                        fundo = "darkslategrey"
                        break;
                    case "fighting":
                        fundo = "blueviolet"
                        break;
                    case "rock":
                        fundo = "lawngreen"
                        break;
                    case "ground":
                        fundo = "brown"
                        break;
                    case "water":
                        fundo = "aqua"
                        break;
                    case "fairy":
                        fundo = "lightgreen"
                        break;

                    default:
                        fundo = "white"
                        break;
                }

                if (normalGif == "normal") {
                    tipoImg = data['sprites']['other']['official-artwork']['front_default']
                }
                else if (normalGif == "gif") {

                    if (data['sprites']['other']['showdown']['front_default'] == null) {
                        tipoImg = data['sprites']['other']['official-artwork']['front_default']
                    } else {
                        tipoImg = data['sprites']['other']['showdown']['front_default']

                    }

                }

                document.getElementById("poderes").innerHTML =
                    `                     
                        Tamanho: ${data['height']}<br>
                        Peso: ${data['weight']}<br>
                        Habilidade 1: ${data['abilities']['0']['ability']['name'].toUpperCase()}<br>
                       
                        Tipo: ${data['types'][0]['type']['name']}
                        `
                //   Habilidade 2: ${data['abilities']['1']['ability']['name'].toUpperCase()}<br>

                document.getElementById("img__pokemon").innerHTML =
                    `
                        <img style="background-color: ${fundo};" class="img__pokemonn" src="${tipoImg}" alt="${data['name']}"></img>
                      
                        `
                document.getElementById("retorna__nome").innerHTML = data['name'].toUpperCase()

                document.getElementById("numero__id").innerHTML = data['id']

            })
    }
}

