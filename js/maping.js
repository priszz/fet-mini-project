// x = document.querySelectorAll('a');
// console.log(x);
// //     .addEventListener('click', () => {
// //     console.log("sdsd");
// // })
// let songsList = document.getElementsByTagName('a');
const songsList = document.getElementsByClassName('songs');
// songsList.filter()
// const songsList = Array.from(songsList);
// songsList = Array.prototype.slice.call(songsList);
console.log(songsList.item(0).innerHTML);
// songsList.forEach(ele => {
//     console.log(ele);
//     let songId = ele.getAttribute('song-id');
//     console.log(songId);
// });
// for (var ele of songsList) {
//     console.log(ele.innerHTML);
// }
// songsList[index].addEventListener('click', (event) => {
// console.log(event.currentTarget.parentNode.children[0]);
// let targetEle = event.currentTarget;
// if (targetEle.classList.contains('active-song')) {
//     let songId = targetEle.getAttribute('index');
//     playCurrentSongFromPlaylist(songId);
// } else {
//     let chil = event.currentTarget.parentNode.children;
//     // console.log(chil[0].classList.contains('song-container'));
//     for (let index = 0; index < chil.length; index++) {
//         if (chil[index].classList.contains('active-song')) {
//             chil[index].classList.remove('active-song');
//         }
//     }
// targetEle.classList.add('active-song');

// playCurrentSongFromPlaylist(songId);
// }
// })
// }