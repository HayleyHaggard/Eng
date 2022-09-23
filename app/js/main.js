// Это часть должна быть вам знакома по предыдущему примеру
let voices = speechSynthesis.getVoices()
let defaultVoice

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices()
  console.log(voices)
  defaultVoice = voices.find((voice) => voice.name === 'Google US English')
  // defaultVoice = voices.find((voice) => voice.name === 'Microsoft David - English (United States)')



  main.addEventListener('click', handleClick)
  window.addEventListener('keydown', handleKeydown)
}

const PLAY = 'g-play'
const PAUSE = 'g-pause'
const RESUME = 'g-resume'

function handleClick({ target }) {
  switch (target.className) {
    case PLAY:
      // При нажатии кнопки `play` в момент озвучивания другого текста,
      // нам нужно прекратить текущее озвучивание перед началом нового
      speechSynthesis.cancel()

      const { textContent } = target.nextElementSibling

      // Об этой части см. ниже
      textContent.split('.').forEach((text) => {
        const trimmed = text.trim()
        if (trimmed) {
          const U = getUtterance(target, text)
          speechSynthesis.speak(U)
        }
      })
      break
    case PAUSE:
      // CSS-класс кнопки отвечает за отображаемую рядом с ней иконку
      // ``- ожидание/стоп, `` - озвучивание/воспроизведение, `` - пауза
      // иконка `` используется в качестве индикатора кнопки, находящейся в фокусе
      target.className = RESUME
      speechSynthesis.pause()
      break
    case RESUME:
      target.className = PAUSE
      speechSynthesis.resume()
      break
    default:
      break
  }
}

// При нажатии `escape` прекращаем озвучивание текста
// Можете добавить свои контролы
function handleKeydown({ code }) {
  switch (code) {
    case 'Escape':
      return speechSynthesis.cancel()
    default:
      break
  }
}

function getUtterance(target, text) {
  const U = new SpeechSynthesisUtterance(text)
  U.voice = defaultVoice
  U.lang = defaultVoice.lang
  U.volume = 1
  U.rate = 1
  U.pitch = 1

  // Я специально не стал скрывать смену иконок при начале/окончании воспроизведения
  U.onstart = () => {
    console.log('Started')
    target.className = PAUSE
  }
  U.onend = () => {
    console.log('Finished')
    target.className = PLAY
  }
  U.onerror = (err) => console.error(err)

  return U
}