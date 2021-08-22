import { Module } from '../core/module'
import { random } from '@/utils'
import { randomMessages } from '@/core/constants/settings'

export class CustomMessageModule extends Module {
  #container
  constructor(type, text) {
    super(type, text)
    this.#container = document.createElement('div')
    this.#container.className = 'message'
  }

  trigger() {
    const message = document.createElement('p')
    console.log(randomMessages[random(0, randomMessages.length - 1)])
    message.textContent = randomMessages[random(0, randomMessages.length - 1)]
    this.#container.append(message)

    setInterval(() => {
      message.remove()
    }, 2000)

    return document.body.prepend(this.#container)
  }
}
