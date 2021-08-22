import { Module } from '../core/module'
import { random } from '../utils'
import { randomSounds } from '../core/constants/settings'

export class SoundModule extends Module {
  #sound
  #container
  constructor(type, text) {
    super(type, text)
    this.#container = document.createElement('div')
    this.#sound = document.createElement('audio')
  }

  trigger() {
    this.#sound.src = randomSounds[random(0, randomSounds.length - 1)]
    this.#sound.autoplay = 'autoplay'
    this.#container.append(this.#sound)
    return document.body.prepend(this.#container)
  }
}
