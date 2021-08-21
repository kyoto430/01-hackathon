import { Module } from '../core/module'

export class SoundModule extends Module {
  #sound
  #container
  #sounds
  constructor(type, text) {
    super(type, text)
    this.#container = document.createElement('div')
    this.#sound = document.createElement('audio')
    this.#sounds = [
      'https://song.nazvonok.ru/song/debe/nezhnoe-sms-krasivoe-nezhnoe-sms.mp3',
      'https://song.nazvonok.ru/song/dcfb/effekt-eha-interesnyy-zvuk-na-soobschenie.mp3',
      'https://song.nazvonok.ru/song/7eea/kaplya-zvuk-padayuschey-kapli.mp3',
      'https://song.nazvonok.ru/song/e11e/soyka-peresmeshnica.mp3',
    ]
  }

  randomSound() {
    let randomIndex = Math.floor(Math.random() * this.#sounds.length)
    return this.#sounds[randomIndex]
  }

  trigger() {
    this.#sound.src = this.randomSound()
    this.#sound.play()
    this.#container.append(this.#sound)
    return this.#container
  }
}
