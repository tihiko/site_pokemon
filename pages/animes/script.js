
function showAnime(vlrMove) {

   

    var showVideo = document.getElementById("aberturas__temporadas")
    
showVideo.style.zIndex="5"

    switch (vlrMove) {
        case 9:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/QiBuNxv6GNQ" title="Pokémon Horizonte Abertura (2023)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> '
            break;
        case 1:
            var frame = ' <iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/-PlAg8R9TG4?si=LjnrVhtu0rqDZr-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;
        case 2:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/XeoynHW8py8?si=HFrkzGGvRxAf8Zsu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;
        case 3:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/1w_lZUnrXO0?si=D4i8UM_vfbavwq5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;
        case 4:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/rRSG8n0LPnc?si=sgSk-DQpSzucDzSF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;
        case 5:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/7cjj6ZFv-S4?si=byUTrMOYW1vMRmqN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;
        case 6:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/YVruUKPmiRQ?si=6TIqo6aQDO0nSBmX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;
        case 7:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/2zdpSIK3bps?si=2745NTFwACEDJM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;
        case 8:
            var frame = '<iframe class="iframe__video" width="480px" height="279px" src="https://www.youtube.com/embed/kySkuXP4vII?si=7W8BuujXMepQUv4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            break;

        default:
            break;
    }
    showVideo.innerHTML =
        `
<img class="img_tv" src="./imgs/tvAnime.PNG" alt="plano de fundo tv anime">
${frame}
<button  id="sair__video" onclick="sairVideo()">Sair do vídeo</button>


`

}

function sairVideo() {
    
    var showVideo = document.getElementById("aberturas__temporadas")

    showVideo.innerHTML =
        ``

        showVideo.style.zIndex="-1"
}