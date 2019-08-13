let songs = [{
        id: 1,
        artistName: "billie eillish",
        songTitle: "Bad Guy",
        genre: "pop",
        language: "eng",
        filePath: "audio/evidence-song.mp3",
        imgPath: "images/cover1.jpeg",
        description: "asdcjnsdvnaijdfvbadfs"
    },
    {
        id: 2,
        artistName: "Ed sheeran",
        songTitle: "photograph",
        genre: "love",
        language: "eng",
        filePath: "audio/horse.mp3",
        imgPath: "images/die-digital.jpg",
        description: "asdcjnsdvnaijdfvbadfs"
    },
    {
        id: 3,
        artistName: "billie ",
        songTitle: "Bad ",
        genre: "pop",
        language: "eng",
        filePath: "audio/evidence-song.mp3",
        imgPath: "images/ask-the-dust.jpg",
        description: "asdcjnsdvnaijdfvbadfs"
    },
    {
        id: 4,
        artistName: "heeran",
        songTitle: "photo",
        genre: "love",
        language: "eng",
        filePath: "audio/horse.mp3",
        imgPath: "images/cover1.jpeg",
        description: "asdcjnsdvnaijdfvbadfs"
    },
    {
        id: 5,
        artistName: "lieeil",
        songTitle: "Ba  uy",
        genre: "pop",
        language: "eng",
        filePath: "audio/evidence-song.mp3",
        imgPath: "images/ask-the-dust.jpg",
        description: "asdcjnsdvnaijdfvbadfs"
    },
    {
        id: 6,
        artistName: "Ed",
        songTitle: "graph",
        genre: "love",
        language: "eng",
        filePath: "audio/horse.mp3",
        imgPath: "images/die-digital.jpg",
        description: "asdcjnsdvnaijdfvbadfs"
    }

];

//get songs
let getSongs = songsIds => {
    let songss = [];
    for (let index = 0; index < songsIds.length; index++) {
        for (let i = 0; i < songs.length; i++) {
            if (songsIds[index] == songs[i].id) {
                songss.push({
                    "songTitle": songs[i].songTitle,
                    "artistName": songs[i].artistName,
                    "filePath": songs[i].filePath,
                    "imgPath": songs[i].imgPath
                })
                //console.log(songs[i].id) <div class='play-pause'></div>
                document.getElementsByClassName('song-container')[i].innerHTML = " <div class='playlist-song-metadata'><span class='song-name'>" + songs[i].songTitle + "</span><span class='song-album'>" + songs[i].artistName + "</span></div><img src=" + songs[i].imgPath + ">";
                document.getElementById("dis").innerHTML += "<br>" + songs[i].songTitle + songs[i].id;
            }
        }
    }
    return songss;
};
let currentPlayingSong = () => {
    let currentSong = document.getElementsByClassName('active-song')[0];
    //console.log(document.getElementsByClassName('active-song')[0]);
    let current = currentSong.getAttribute('index');
    return --current;
}

let i = 0;
let getNextSource = (current) => {
    // if(songs[current]==undefined)
    // if(songs[i]==undefined)
    console.log(current + " source");

    if (++current > songs.length) {
        i = 0;
        console.log(songs[i].songTitle);
        console.log(songs[i].filePath);
        console.log("next" + i);
        return songs[i++].filePath;
    } else {
        // console.log(songs[++current].filePath);
        // console.log(++current+" in next");
        return songs[++current].filePath;
    }

};
let changeData = (id) => {
    let bottomData = document.getElementById('bottom-song-metadata');
    let bottomImg = document.getElementsByClassName('bottom-album');
    let frontSongData = document.getElementsByClassName('song-metaData');
    let frontImg = document.getElementById('front-image');
    let currentSrc = getSongs([id])[0];
    bottomData.children[0].innerHTML = currentSrc.songTitle;
    bottomData.children[1].innerHTML = currentSrc.artistName;
    frontSongData[0].children[0].innerHTML = currentSrc.songTitle;
    frontSongData[0].children[1].innerHTML = currentSrc.artistName;
    bottomImg[0].children[0].src = currentSrc.imgPath;
    frontImg.children[0].src = currentSrc.imgPath;
}
// half left
let getNewSong = () => {
    console.log("added new source");
    let myaudio = document.getElementsByTagName("audio")[0];
    let current = currentPlayingSong();
    // if () {
    //     let
    // }

    let activeEle = document.getElementsByClassName('active-song')[0];
    if (activeEle == undefined) {
        activeEle.classList.add('active-song');
        myaudio.src = getNextSource(-1);
        myaudio.load();
        myaudio.play();
    }
    activeEle.classList.remove('active-song');
    activeEle.nextElementSibling.classList.add('active-song');

    changeData(current + 2);
    console.log(current + " added new source");
    console.log(getNextSource(current));

    myaudio.src = getNextSource(current);
    myaudio.load();
    myaudio.play();
}


let getPrevSource = (current) => {
    // if(array.length<0)
    if (current < 0) {
        i = 0;
        console.log(songs[i].songTitle);
        console.log(songs[i].filePath);
        console.log("previ" + i);
        return songs[--i].filePath;
    } else {
        console.log(current);
        console.log(songs[current]);
        return songs[current].filePath;
    }
}

let getPrevSong = () => {
    console.log("added prev source");
    let myaudio = document.getElementsByTagName("audio")[0];
    let activeEle = document.getElementsByClassName('active-song')[0];

    //console.log(activeEle.prevElementSibling) 
    activeEle.classList.remove('active-song');
    activeEle.previousElementSibling.classList.add('active-song');
    let current = currentPlayingSong();
    console.log(current + " prev");
    // console.log(getPrevSource(current));
    changeData(++current);
    myaudio.src = getPrevSource(current);
    myaudio.load();
    myaudio.play();
}


// Automatically plays Next song
let myaudio = document.getElementsByTagName("audio")[0];
myaudio.addEventListener("ended", getNewSong, false);
// plays next song 
document.getElementById('next').addEventListener('click', () => {
    getNewSong();

});
document.getElementById('playlist-next').addEventListener('click', () => {
    getNewSong();

});
// plays previous song
document.getElementById('previous').addEventListener('click', () => {
    let nextEle = document.getElementById('prev');
    getPrevSong();
});
document.getElementById('playlist-previous').addEventListener('click', () => {
    getPrevSong();
});

// looping functionality
document.getElementById('repeat').addEventListener('click', () => {
    let shuff = document.getElementById('repeat');
    let audioEle = document.getElementsByTagName('audio')[0];

    if (shuff.classList[1] == 'repeat-off') {
        shuff.classList.remove('repeat-off');
        shuff.classList.add('repeat-on');
        audioEle.loop = true;
    } else {
        shuff.classList.remove('repeat-on');
        shuff.classList.add('repeat-off');
        audioEle.loop = false;
    }

    console.log(shuff.classList[1]);

});
// to loop current song
// document.getElementById('repeat').addEventListener('ended', () => {
//     let audioEle = document.getElementsByTagName('audio')[0];
//     audioEle.loop = true;
//     console.log('looping');
// });


let playPause = (ele, audioEle) => {

    if (ele.classList.length == 1) {
        ele.classList.add('pause');
        audioEle.play();
    }
    if (ele.classList[1] == 'play') {
        ele.classList.add('pause');
        ele.classList.remove('play');
        audioEle.play();
    } else {
        ele.classList.add('play')
        ele.classList.remove('pause');
        audioEle.pause();


    }
}
// play-pause functionality
document.getElementById('play-pause').addEventListener('click', () => {
    let shuff = document.getElementById('play-pause');
    var audioEle = document.getElementsByTagName('audio')[0];
    playPause(shuff, audioEle);
});

let playPauseb = (ele, audioEle) => {

    if (ele.classList.length == 1) {
        ele.classList.add('playlist-pause');
        audioEle.play();
    }
    if (ele.classList[1] == 'playlist-play') {
        ele.classList.add('playlist-pause');
        ele.classList.remove('playlist-play');
        audioEle.play();
    } else {
        ele.classList.add('playlist-play')
        ele.classList.remove('playlist-pause');
        audioEle.pause();
    }
}
document.getElementById('playlist-play-pause').addEventListener('click', () => {

    let shuff = document.getElementById('playlist-play-pause');
    var audioEle = document.getElementsByTagName('audio')[0];
    playPauseb(shuff, audioEle);
    // if (shuff.classList.length == 1) {
    //     shuff.classList.add('playlist-play');
    //     audioEle.play();
    // }
    // if (shuff.classList[1] == 'playlist-play') {
    //     shuff.classList.add('playlist-pause');
    //     shuff.classList.remove('playlist-play');
    //     audioEle.play();
    // } else {
    //     shuff.classList.add('playlist-play')
    //     shuff.classList.remove('playlist-pause');
    //     audioEle.pause();
    // }
});





let playCurrentSongFromPlaylist = (songId) => {


    // let prev = document.getElementsByClassName('active-song');
    let myaudio = document.getElementsByTagName("audio")[0];
    let playpausEle = document.getElementById('playlist-play-pause');
    let playpausElefrnt = document.getElementById('play-pause');
    // console.log(frontImg.children[0].src);
    let currentSrc = getSongs([songId])[0];
    myaudio.src = currentSrc.filePath;
    myaudio.load();
    changeData(songId);
    myaudio.play();
    currentPlayingSong();
    playPause(playpausElefrnt, myaudio);
    playPauseb(playpausEle, myaudio);
}



let Playlist = document.getElementsByClassName('song-container');
for (let index = 0; index < Playlist.length; index++) {
    Playlist[index].addEventListener('click', (event) => {
        // console.log(event.currentTarget.parentNode.children[0]);
        let targetEle = event.currentTarget;
        if (targetEle.classList.contains('active-song')) {
            let songId = targetEle.getAttribute('index');
            playCurrentSongFromPlaylist(songId);
        } else {
            let chil = event.currentTarget.parentNode.children;
            // console.log(chil[0].classList.contains('song-container'));
            for (let index = 0; index < chil.length; index++) {
                if (chil[index].classList.contains('active-song')) {
                    chil[index].classList.remove('active-song');
                }
            }
            targetEle.classList.add('active-song');
            let songId = targetEle.getAttribute('index');
            playCurrentSongFromPlaylist(songId);
        }
    })
}


let displayPlaylist = () => {
    getSongs([1, 2, 3, 4, 5, 6]);
}
displayPlaylist();

// shuffle function  using ***Fisher-Yates shuffle***
let shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
// shuffled songs
let shuffledSongs = () => {
    let song = songs.map(ele => ele.id);
    let shuffledSongIds = shuffle(song);
    console.log(shuffledSongIds);
    getSongs(shuffledSongIds);
};


document.getElementById('shuffle').addEventListener('click', () => {
    let shuff = document.getElementById('shuffle');
    if (shuff.classList[1] == 'shuffle-off') {
        shuff.classList.remove('shuffle-off');
        shuff.classList.add('shuffle-on');
        shuffledSongs();
    } else {
        shuff.classList.remove('shuffle-on');
        shuff.classList.add('shuffle-off');
        let SongIds = songs.map(ele => ele.id);
        getSongs(SongIds);
    }
    console.log(shuff.classList[1]);

});
document.getElementsByClassName('showPlaying')[0].addEventListener('click', () => {

    let back = document.getElementById('player-back');
    // document.getElementById('player-back').style.removeProperty('top');
    back.classList.add('move-out-top');
    back.classList.add('move-in-top');
    let front = document.getElementById('player-front');
    back.style.display = "block";
    // front.style.display = "none";
});
document.getElementsByClassName('closePlaylist')[0].addEventListener('click', () => {

    let front = document.getElementById('player-front');
    front.classList.add('move-out-top');
    front.classList.add('move-in-top');
    let back = document.getElementById('player-back')
    back.style.display = "none";
    front.style.display = "block";
});