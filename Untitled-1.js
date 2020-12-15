Array.from(playBtn).map( button => {
    button.onclick = ()=>{
                if(isPlaying === false){
                    playMusic();
                 return  button.innerHTML = `<i class="fas fa-pause"></i>`;
                }else{
                    pauseMusic();
                  return  button.innerHTML = `<i class="fas fa-play"></i>`;
                }
    }
    console.log(playBtn)
})


&.home{
    //       opacity: 0;
    //       animation: navanimation 3s ease-in 0.4s alternate forwards;

    //       @keyframes navanimation {
    //         from{ opacity: 0; }
    //         to{ opacity: 1;}
    //     }