// ==UserScript==
// @name         Typeracer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Puuuu
// @match        https://play.typeracer.com/*
// @icon         https://i0.wp.com/blog.typeracer.com/wp-content/uploads/2021/08/cropped-typeracer-logo-sqaure.png?fit=240%2C240&ssl=1
// @grant        none
// ==/UserScript==

// Useful functions

Object.defineProperties(Array.prototype, {
    last: {
        get(){
            return this[this.length - 1]
        }
    }
})

// Icons

let icons = ['https://i.pinimg.com/564x/8a/b1/5c/8ab15c91f756c639761ebe05e219540c.jpg',
            'https://64.media.tumblr.com/8686b016be38cdefb9d67f8939e80e10/1bc7baa3e7d09d36-b8/s250x250_c1/8242579fad971f3d37f9ebf5e15fe2f95935679e.pnj',
            'https://i.pinimg.com/736x/25/ef/67/25ef67e9c0edd0ce55a2022cf2fc4177.jpg',
            'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg',
            'data:image/jpeg;base64,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',
            'https://e1.pxfuel.com/desktop-wallpaper/196/276/desktop-wallpaper-anime-icon-posted-by-ryan-peltier-aesthetic-anime-icons.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkiicTmxuoKclFoG-ANGgtwZCD_pwAt4SaQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3XBdAzTL4dRgaNihTkEdwZc2xcRLBzkebw&usqp=CAU',
            'https://i.pinimg.com/originals/cb/d3/e3/cbd3e34278ce1557842229b2aced7772.jpg',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0f319cf-f257-4a90-b373-2bcb4bedfc0d/d5fcvcm-53b71543-e251-4b72-83fb-414d3478d0cd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwZjMxOWNmLWYyNTctNGE5MC1iMzczLTJiY2I0YmVkZmMwZFwvZDVmY3ZjbS01M2I3MTU0My1lMjUxLTRiNzItODNmYi00MTRkMzQ3OGQwY2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6iIWzIv36CniBzDYqYzwN4o77-NzSzLTARfhjBQw-uY',
            'https://i.pinimg.com/originals/54/07/cc/5407ccf815571a7cb09f7b7bed00d384.jpg',
            'https://i.pinimg.com/474x/ce/20/d5/ce20d58c99b64d6a37ce1b2ab5de2a22.jpg',
            'https://i.pinimg.com/564x/8e/28/71/8e28714dbac3527b994bb1ffca28c97e.jpg',
            'https://i.pinimg.com/736x/2e/1d/a4/2e1da48763aa45c7c95de13c78dc0a18.jpg',
            'https://64.media.tumblr.com/411b43343998d20d2faa1443e5b11781/a0ec47b27fe6d3bd-d0/s400x600/a1df72a07672b634f22a2b3d68ab1b859dd89000.jpg',
            'https://pbs.twimg.com/media/EyzmyPaWYAM5_d1.jpg',
            'https://i.pinimg.com/originals/9f/f5/85/9ff58589d3440d47377b432c9e4ab9b1.jpg',
            'https://i.pinimg.com/736x/63/e1/88/63e1884c99d126e92a0dad0189a94c03.jpg',
            'https://e1.pxfuel.com/desktop-wallpaper/6/752/desktop-wallpaper-kaedehara-kazuha-genshin-impact-kazuha-icons.jpg',
            'https://64.media.tumblr.com/5bb4c8d7a2982b0558c35ac4b915ef80/5c931e9e3f4e54e2-7e/s540x810/41f9461f195486fabb3abb27aa03596939dca173.jpg',
            'https://e1.pxfuel.com/desktop-wallpaper/173/744/desktop-wallpaper-genshin-impact-icons-thumbnail.jpg',
            'https://64.media.tumblr.com/563788bfd72ff839b42702816dfecae1/7acc10db8f0f1534-7a/s540x810/0824c6071efc06495788c6ab1edd7163e7c91202.jpg',
            'https://i.pinimg.com/originals/83/26/af/8326afeb513754bbfa8e1d9ee4099d50.jpg',
            'https://i.pinimg.com/736x/8f/dc/b2/8fdcb2129f1a59c35f362379bde6a1b9.jpg',
            'https://i.pinimg.com/550x/7a/93/d4/7a93d46f7e756f6a97b1e53ba3b0bcd4.jpg',
            'https://i.pinimg.com/474x/3b/4f/1e/3b4f1e76c794111d2b24e3a43758da8e.jpg',
            'https://i.pinimg.com/736x/66/3c/20/663c2045a2d2c092dd700d02d8b37bf8.jpg',
            'https://e0.pxfuel.com/wallpapers/656/114/desktop-wallpaper-icon-crying-anime-girl-emo.jpg',
            'https://i.pinimg.com/736x/cd/75/65/cd756585141c52feed5f46f86ec57f6c.jpg',
            'https://i.pinimg.com/564x/2e/74/23/2e74238c54a945c26f40d5d12cb5fbc1.jpg',
            'https://i.pinimg.com/564x/72/62/7c/72627cbe125003ce7cedf877e1d7766e.jpg',
            'https://i.pinimg.com/564x/d2/6c/99/d26c9939b9621794ad53c7f75a90fb89.jpg',
            'https://i.pinimg.com/564x/df/0e/22/df0e227a0e51320deeb981786cff9104.jpg',
            'https://i.pinimg.com/564x/c8/96/91/c896919bb94d3f0a2c7f7468b1c1a9fc.jpg',
            'https://i.pinimg.com/564x/ff/43/b2/ff43b2aa17922af0fcd31f4cd08d91cd.jpg',
            'https://i.pinimg.com/564x/70/f6/2d/70f62d2df3e09bee9bad8f0c8aeaf531.jpg',
            'https://i.pinimg.com/564x/5f/0f/8a/5f0f8ab5b1a0abdfd934660f9d410754.jpg',
            'https://i.pinimg.com/564x/c4/4c/ca/c44cca7303eaafb3d558d3ede44beb5f.jpg',
            'https://i.pinimg.com/564x/1c/df/aa/1cdfaacf56e2531ed2420b89af4a032f.jpg',
            'https://i.pinimg.com/564x/5f/53/6f/5f536f866c59a18816cef5d409103648.jpg',
            'https://i.pinimg.com/564x/d3/87/29/d38729303e2316b52dfc52b4a1145d54.jpg',
            'https://i.pinimg.com/564x/6a/f2/0e/6af20eddb5939ed0f6a2a66ec9a936b4.jpg',
            'https://i.pinimg.com/564x/92/1e/4d/921e4db455febf0094b471f51deb591e.jpg',
            'https://i.pinimg.com/564x/93/eb/38/93eb38c21712169d1f1bf62de36e7085.jpg',
            'https://i.pinimg.com/564x/50/4e/d0/504ed09aeda6379f9dd1508fea460a4a.jpg',
            'https://i.pinimg.com/564x/17/ed/94/17ed94a1744ae64acee6c89c31a8e011.jpg',
            'https://i.pinimg.com/564x/1a/ad/5e/1aad5e2c50d6835b775a16949f254e84.jpg',
            'https://i.pinimg.com/564x/84/cc/08/84cc08c86341a88384420757776510fb.jpg',
            'https://i.pinimg.com/564x/8f/c4/ae/8fc4ae74e817927de4dd42abee13bf58.jpg',
            'https://i.pinimg.com/564x/51/96/31/519631b8bf9a3d281f327e69b4680da6.jpg',
            'https://i.pinimg.com/564x/db/2f/17/db2f173d3d9e0d3887ce1905502c2b5b.jpg']

// Change icons


setInterval( () => {
  let avatarContainers = [ ...document.getElementsByClassName('avatarContainer') ];
  if ( avatarContainers[0] === undefined || avatarContainers.last.getAttribute('id') === "changed" ) {
    return;
  }
  for ( let i = 0; i < avatarContainers.length; i++ ) {
    if ( avatarContainers[i].getAttribute('id') === "changed" ) {
        continue;
    }
    if ( i === 0 ) {
        avatarContainers[0].style.backgroundImage = 'url( "https://i.pinimg.com/564x/8a/b1/5c/8ab15c91f756c639761ebe05e219540c.jpg" )';
        avatarContainers[0].style.height = '52px';
        avatarContainers[0].style.width = '70px';
        avatarContainers[0].setAttribute( 'id', 'changed' );
        continue;
    }
    avatarContainers[i].style.backgroundImage = 'url(' + icons[ Math.floor(Math.random() * icons.length) - 2] + ')';
    avatarContainers[i].style.height = '52px';
    avatarContainers[i].style.width = '70px';
    avatarContainers[i].setAttribute( 'id', 'changed' );
  }
}, 1000)


// Auto close add popUp

setInterval( () => {
  let popUp = document.getElementsByClassName('DialogBox trPopupDialog rewardPromptPopup')[0];
  if ( popUp === undefined ) {
    return;
  }
  let closeButton = document.getElementsByClassName('xButton')[0];
  closeButton.click();
}, 1000)


// Auto close practiceScores popUp

setInterval( () => {
  let popUp = document.getElementsByClassName('DialogBox trPopupDialog practiceViewScoresPopup')[0];
  if ( popUp === undefined ) {
    return;
  }
  popUp.remove();
}, 1000)

// Auto close antiCheaters popUp

setInterval( () => {
  let popUp = document.getElementsByClassName('DialogBox trPopupDialog challengePromptDialog')[0];
  if (popUp === undefined ) {
    return;
  }
  function beginTest () {
    let button = document.getElementsByClassName('gwt-Button')[0];
    console.log(button)
    button.click();
  }
  beginTest()
  setTimeout( beginTest, 400)
  setTimeout( () => {
    let closeButton = document.getElementsByClassName('xButton')[0]
    closeButton.click()
  }, 800);

}, 1000)


// Auto exit race and enter again || try again hotkey

document.addEventListener('keyup', (key) => {
   if( key.key !== 'º' && key.keyCode !== 13 ){
       return;
   }

   function clickElement (className, text) {
     let element = document.getElementsByClassName(className);
     for( let i = 0; i < element.length; i++ ){
         console.log(element[i].textContent)
       if ( element[i].textContent !== text ) {
         continue;
       }
       element = element[i];
       break;
     }
     element.click();
   }

   if( key.key === 'º' ) {
     clickElement('gwt-Anchor', 'Main menu (leave practice)');
     setTimeout( () => { clickElement('gwt-Anchor', 'Practice Yourself') }, 500);
     setTimeout( () => {
       if ( document.getElementsByClassName('qBWgTAlF JKsXtVKa')[0] === undefined ) {
         clickElement('gwt-Anchor', 'Practice Yourself');
       }
     }, 750);
   }
   else {
     clickElement('gwt-Anchor', 'Try again?');
   }

})
