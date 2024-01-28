
       
        function loadpk(frente__costas) {

            if(frente__costas == "frente"){
                front__rew = "front_default"
            }                
            else if(frente__costas == "costas"){
                front__rew = "front_shiny"
            }
                
            
            //imput que vem o número do id
             id = document.getElementById("id__nome__pokemon")
            let url = 'https://pokeapi.co/api/v2/pokemon/';

            
            if (id.value.length == 0) {

                // solo = url;
                // fetch(solo)
                //     .then((response) => {
                //         return response.json();
                //     })
                //     .then((data) => {
                //         console.clear();
                //         console.log(data);
                //         document.getElementById("descricao").innerHTML = data['results']['12']['name']
                //         document.getElementById("id").innerHTML = data['results']['0']['name']
                //         let img = ""
                //         document.getElementById("pic").setAttribute('src', img);
                //     })
            } else {
               
                solo = url + id.value.toLowerCase() + '/'

                fetch(solo)
                    .then((response) => {
                        return response.json();
                    })

                    .then((data) => {
                        console.clear();
                        console.log(data);

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



                        img = data['sprites']['other']['official-artwork']['front_default'];

                        document.getElementById("poderes").innerHTML =
                        `                     
                        Tamanho: ${data['height']}<br>
                        Peso: ${data['weight']}<br>
                        Habilidade 1: ${data['abilities']['0']['ability']['name'].toUpperCase()}<br>
                        Habilidade 2: ${data['abilities']['1']['ability']['name'].toUpperCase()}<br>
                        Tipo: ${data['types'][0]['type']['name']}
                        `                       
                          
                         
                        document.getElementById("img__pokemon").innerHTML=
                        `
                        <img style="background-color: ${fundo};" class="img__pokemonn" src="${img}" alt="${data['name']}"></img>
                        
                        `
                        document.getElementById("retorna__nome").innerHTML = data['name'].toUpperCase()

                        document.getElementById("numero__id").innerHTML = data['id']
                      
                    })

                   
            }

        }
      
     