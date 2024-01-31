function showAnime(vlrMove) {   

    var showVideo = document.getElementById("trailer__apps")
    
showVideo.style.zIndex="5"

    switch (vlrMove) {
      
        case 1:
            var frame = ' <iframe class="iframe__video" width="480" height="279" src="https://www.youtube.com/embed/RP9mPXqgYTc" title="Pokemon Sleep - Official &#39;How to Sleep&#39; Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
           var temporada = "Trailer Pokémon Sleep"
            break;
        case 2:
            var frame = '<iframe class="iframe__video" width="480" height="279"src="https://www.youtube.com/embed/yQCREgz4tQY" title="Pokémon GO - Legendary Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            var temporada = "Trailer Pokémon GO"
            break;
        case 3:
            var frame = '<iframe class="iframe__video" width="480" height="279"src="https://www.youtube.com/embed/vcLZvFsFy5k" title="Pokémon UNITE - Trailer de Lançamento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            var temporada = "Trailer Pokémon Unite"
            break;
        case 4:
            var frame = '<iframe class="iframe__video" width="480" height="279"src="https://www.youtube.com/embed/hj0a5YrpGtU" title="Pokemon Quest - Official Announcement Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            var temporada = "Trailer Pokémon Quest"
            break;
        case 5:
            var frame = '<iframe class="iframe__video" width="480" height="279" src="https://www.youtube.com/embed/UK1Chilp7E0" title="Pokkén Tournament DX - Launch Trailer (Nintendo Switch)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            var temporada = "Trailer Pokémon tournament DX"
            break;
      
        default:
            break;
    }
    showVideo.innerHTML =
        `

<img class="img_tv" src="./imgs/tvAnime.PNG" alt="plano de fundo tv anime">
${frame}
<button  id="sair__video" onclick="sairVideo()">Sair do vídeo</button>
<h2 class="titulo__aberturas">${temporada}</h2>

`

}

function sairVideo() {
    
    var showVideo = document.getElementById("trailer__apps")

    showVideo.innerHTML =
        ``

        showVideo.style.zIndex="-1"
}