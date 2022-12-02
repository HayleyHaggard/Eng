
$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('active');
  document.querySelector('body').classList.toggle('noscroll');
})



// //------------------SPEECH-----------------------------
// let voices = speechSynthesis.getVoices()
// let defaultVoice

// speechSynthesis.onvoiceschanged = () => {
//   voices = speechSynthesis.getVoices()
//   // defaultVoice = voices.find((voice) => voice.name === 'Google US English')
//   defaultVoice = voices.find((voice) => voice.name === 'Microsoft David - English (United States)')

//   main.addEventListener('click', handleClick)
//   window.addEventListener('keydown', handleKeydown)
// }

// const PLAY = 'g-play'
// const PAUSE = 'g-pause'
// const RESUME = 'g-resume'

// function handleClick({ target }) {
//   switch (target.className) {
//     case PLAY:
//       speechSynthesis.cancel()

//       const { textContent } = target.nextElementSibling
//       console.log(textContent)

//       textContent.split('.').forEach((text) => {
//         const trimmed = text.trim()
//         if (trimmed) {
//           const U = getUtterance(target, text)
//           speechSynthesis.speak(U)
//         }
//       })
//       break

//     case PAUSE:
//       target.className = RESUME
//       speechSynthesis.pause()
//       break

//     case RESUME:
//       target.className = PAUSE
//       speechSynthesis.resume()
//       break
//     default:
//       break
//   }
// }

// function handleKeydown({ code }) {
//   switch (code) {
//     case 'Escape':
//       return speechSynthesis.cancel()
//     default:
//       break
//   }
// }

// function getUtterance(target, text) {
//   const U = new SpeechSynthesisUtterance(text)
//   U.voice = defaultVoice
//   U.lang = defaultVoice.lang
//   U.volume = 1
//   U.rate = 1
//   U.pitch = 1

//   U.onstart = () => {
//     target.className = PAUSE
//   }
//   U.onend = () => {
//     target.className = PLAY
//   }
//   U.onerror = (err) => console.error(err)

//   return U
// }


// //---------------------SEARCH----------------------------
// function search() {
//   var input, filter, table, tr, p, i, txtValue;

//   input = document.getElementById("search");
//   filter = input.value.toUpperCase();
//   table = document.querySelector(".g-table");
//   tr = table.getElementsByTagName("tr");

//   for (i = 0; i < tr.length; i++) {
//     console.log(tr.length)
//     p = tr[i].getElementsByTagName("p")[0];
//     if (p) {
//       txtValue = p.textContent || p.innerText;
//       console.log(txtValue)
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

