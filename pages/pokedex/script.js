
       
        function loadpk(frente__costas) {

            if(frente__costas == "frente"){
                front__rew = "front_default"
            }                
            else if(frente__costas == "costas"){
                front__rew = "back_default"
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

                        img = data['sprites'][front__rew];

                        document.getElementById("poderes").innerHTML =
                        `                     
                        Tamanho: ${data['height']}<br>
                        Peso: ${data['weight']}<br>
                        Habilidade 1: ${data['abilities']['0']['ability']['name'].toUpperCase()}<br>
                        Habilidade 2: ${data['abilities']['1']['ability']['name'].toUpperCase()}<br>
                        `                       
                         
                         
                        document.getElementById("img__pokemon").innerHTML=
                        `
                        <img class="img__pokemonn" src="${img}" alt="${data['name']}"></img>
                        
                        `
                        document.getElementById("retorna__nome").innerHTML = data['name'].toUpperCase()

                        document.getElementById("numero__id").innerHTML = data['id']
                      
                    })

                   
            }

        }
      
     