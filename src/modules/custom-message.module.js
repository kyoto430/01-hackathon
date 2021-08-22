import { Module } from '../core/module'

export class CustomMessageModule extends Module {
  #container
  #messages
  constructor(type, text) {
    super(type, text)
    this.#container = document.createElement('div')
    this.#container.className = 'message'
    this.#messages = ['Java Script', 'Hello World', 'Boooom', 'Try again']
  }

  randomMessage() {
    let randomIndex = Math.floor(Math.random() * this.#messages.length)
    return this.#messages[randomIndex]
  }

  trigger() {
    const message = document.createElement('p')
    message.textContent = this.randomMessage()
    this.#container.append(message)

    setInterval(() => {
      message.remove()
    }, 2000)

    return document.body.prepend(this.#container)
  }
}
