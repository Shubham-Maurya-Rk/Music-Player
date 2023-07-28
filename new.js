//----------Initial prerequisites-------------

let files=[
    {songName:"Mitti_Di_Khushboo",songPath:"./Songs/_'Mitti_Di_Khushboo'_FULL_VIDEO_Song__Ayushmann_Khurrana__Rochak_Kohli(128k).mp3"},
    {songName:"_Aayat__Full_Song_with_Lyrics__Bajirao_Mastani",songPath:"./Songs/_Aayat__Full_Song_with_Lyrics__Bajirao_Mastani(128k).mp3"},
    // {songName:"_Hai_Katha_Sangram_Ki____Mahabharata___Full_Title_Song",songPath:"./Songs/_Hai_Katha_Sangram_Ki____Mahabharata___Full_Title_Song_%2CHD_Audio__Use_Earphones_(128k).mp3"},
    {songName:"_I_M_Hunter__Gangs_of_Wasseypur____Manoj_Bajpai",songPath:"./Songs/_I_M_Hunter__Gangs_of_Wasseypur____Manoj_Bajpai,_Reema_Sen,_Huma_Qureshi(128k).mp3"},
    {songName:"_Kabhi_Kabhi_Aditi_Zindagi__Jaane_Tu_Ya_Jaane_Na",songPath:"./Songs/_Kabhi_Kabhi_Aditi_Zindagi__Jaane_Tu_Ya_Jaane_Na__A.R._Rahman__Rashid_Ali(128k).mp3"},
    {songName:"_Kahin_To_Hogi_Woh__Jaane_Tu_Ya_Jaane_Na",songPath:"./Songs/_Kahin_To_Hogi_Woh__Jaane_Tu_Ya_Jaane_Na__Imran_Khan,_Genelia_D'Souza__A.R._Rahman(128k).mp3"},
    {songName:"_Masakali__Delhi_6__Abhishek_Bachchan",songPath:"./Songs/_Masakali__Delhi_6__Abhishek_Bachchan,_Sonam_Kapoor__A.R._Rahman___Mohit_Chauhan(128k).mp3"},
    {songName:"A.R_Rahman_Maahi_Ve_Full_Song_",songPath:"./Songs/A.R_Rahman_Maahi_Ve_Full_Song_(Audio)_Highway__Alia_Bhatt,_Randeep_Hooda__Imtiaz_Ali(128k).mp3"},
    {songName:"AAJ_DIN_CHADHEYA_-_Full_Audio_Song___Love_Aaj_Kal",songPath:"./Songs/AAJ_DIN_CHADHEYA_-_Full_Audio_Song___Love_Aaj_Kal__Saif_Ali_Khan_&_Giselli_Monteiro(128k).mp3"},
    {songName:"Agent_Vinod_Pyar_Ki_Pungi_Full_Video_Song",songPath:"./Songs/Agent_Vinod_Pyar_Ki_Pungi_Full_Video_Song_(HD)__Saif_Ali_Khan(128k).mp3"},
    {songName:"Aigiri_Nandini_(Mahisasurmardini_Stotram)_Maithili_Thakur",songPath:"./Songs/Aigiri_Nandini_(Mahisasurmardini_Stotram)_Maithili_Thakur(128k).mp3"},
    {songName:"Audio__Isq_Risk__Full_Song__Mere_Brother_Ki_Dulhan__Rahat_Fateh_Ali_Khan__Sohail_Sen",songPath:"./Songs/Audio__Isq_Risk__Full_Song__Mere_Brother_Ki_Dulhan__Rahat_Fateh_Ali_Khan__Sohail_Sen(128k).mp3"},
    {songName:"Baby_i_Don't_Understand_This_You're_Changing__Whatsapp_Status",songPath:"./Songs/Baby_i_Don't_Understand_This_You're_Changing__Whatsapp_Status(128k).mp3"},
    {songName:"AFRO_HOUSE_2016",songPath:"./Songs/AFRO_HOUSE_2016(128k).m4a"},
    {songName:"Afro_House_2017_The_Best_of_Afro_House_2017_by_OSOCITY",songPath:"./Songs/Afro_House_2017_The_Best_of_Afro_House_2017_by_OSOCITY(128k).m4a"},
    {songName:"Agar_Tum_Saath_Ho_Maahi_Ve_l_T-Series_Mixtape_l_Jubin_N_Prakriti_K_Abhijit",songPath:"./Songs/Agar_Tum_Saath_Ho_Maahi_Ve_l_T-Series_Mixtape_l_Jubin_N_Prakriti_K_Abhijit_V_l_Bhushan_Kumar_Ahmed_K(128k).mp3"},
    {songName:"Aila re aila...",songPath:"./Songs/song1.mp3"},
    {songName:"Tum_Prem_Ho_Tum_Preet_Ho_Video_Song__Radha_Krishna",songPath:"./Songs/Tum_Prem_Ho_Tum_Preet_Ho_Video_Song__Radha_Krishna_Serial_Song(128k).mp3"}
]

const songListContainer=document.querySelector('.section-1');
let html;
files.forEach((element,i)=>{
    let audio=new Audio(element.songPath);
    html+=`
    <div class="song d-flex ai-center" id="${i}">
    ${i+1}<img src="./imgs/music.png" alt="${i+1}">
    <span class="songListName">${element.songName}</span>
    <span>00:00</span>
    <img src="./imgs/XOsX.gif" alt="playing" style="visibility:hidden">
    <img src="./imgs/pause-button-png-29671 (1).png" alt="toPlay" style="visibility:hidden;width:2vw;height:2vw" class="toPlay">
    </div>
    `
})
songListContainer.innerHTML=html;


//---------------Design part-----------------

let prevSong=new Audio(files[files.length-1].songPath);
let currSong=new Audio(files[0].songPath);
let nextSong=new Audio(files[1].songPath);
let currAudioIndex=0;let started=false;


function changeCurrSongName(){
    let currSongName=document.querySelector('.songName marquee');
    currSongName.innerText=currSong.src.slice(28);
}

//------------- main Logic--------------
let prevSongBody="";
showPlaySongIcon(document.getElementById('0'));
changeCurrSongName();
const hoverOnList=document.querySelectorAll('.song');

//functions

function playPreviousMusic(){
    currAudioIndex=currAudioIndex===0?files.length-1:currAudioIndex-1;
    let element=document.getElementById(`${currAudioIndex}`);
    prevSong=new Audio(files[currAudioIndex].songPath);
    showPlaySongIcon(element);
    currSong.pause();
    prevSong.play();
    currSong=prevSong;
    Play.style.display='none';
    Pause.style.display='block';
    updateProgressBar();
}

function playNextMusic(){
    currAudioIndex=currAudioIndex===files.length-1?0:currAudioIndex+1;
    nextSong=new Audio(files[currAudioIndex].songPath);
    let element=document.getElementById(`${currAudioIndex}`);
    showPlaySongIcon(element);
    nextSong.play();
    currSong.pause();
    currSong=nextSong;
    updateProgressBar();
}

function playMusic(){
    started=true;
    if(Play.style.display==='none'){
        Play.style.display='block';
        Pause.style.display='none';
        currSong.pause();
    }else{
        Play.style.display='none';
        Pause.style.display='block';
        currSong.play();
    }
}

function updateProgressBar(){
    changeCurrSongName();
    let progress=setInterval(()=>{
        if(currSong.currentTime>=currSong.duration){
            Play.style.display='block';
            Pause.style.display='none';
            playNextMusic();
            clearInterval(progress);
        }
        let currentTime=parseInt((currSong.currentTime/currSong.duration)*100);
        progressBar.value=currentTime;
    },400);  
}

function showIcon(){
    let toPlayIcon=this.children[4];
    toPlayIcon.style.visibility='visible';
}

function removeIcon(){
    let toPlayIcon=this.children[4];
    toPlayIcon.style.visibility='hidden';
}

function showPlaySongIcon(element){
    let duckIcon=element.children[3];
    if(prevSongBody!==""){
        prevSongBody.children[3].style.visibility='hidden';
        prevSongBody.classList.remove('currentSong');
        prevSong.pause();
    }
    duckIcon.style.visibility='visible';
    element.classList.add('currentSong');
    if(started){
        Pause.style.display='block';
        Play.style.display='none';
    }else{
        Pause.style.display='none';
        Play.style.display='block';
    }
    prevSongBody=element;
}

hoverOnList.forEach(element => {
    element.addEventListener('mouseover',showIcon)
    element.addEventListener('mouseout',removeIcon)
    element.addEventListener('click',function(){
        started=true;
        showPlaySongIcon(this);
        currSong.pause();
        currSong=new Audio(files[parseInt(this.id)].songPath);
        currAudioIndex=parseInt(this.id);
        changeCurrSongName();
        currSong.play();
        updateProgressBar();
    });
});


progressBar.addEventListener('change',()=>{
    let changeTime=(progressBar.value/100)*currSong.duration;
    currSong.currentTime=parseFloat(changeTime);
});

let songList=document.querySelector('.songList');
let section1=document.querySelector('.section-1');
songList.addEventListener('click',()=>{
    section1.style.display=section1.style.display==='block'?'none':'block';
});

document.addEventListener('keydown',(e)=>{
    console.log(e.keyCode);
    if(e.keyCode===32){
        playMusic();
    }
    
    if(e.keyCode===37){
        playPreviousMusic();
    }
    
    if(e.keyCode===39){
        playNextMusic();
    }
    
})

