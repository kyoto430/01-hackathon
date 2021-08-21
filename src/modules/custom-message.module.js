import { Module } from '../core/module'

export class CustomMessageModule extends Module {
  #container
  #messages
  constructor() {
    super('message', 'custom-message')
    this.#container = document.createElement('div')
    this.#container.className = 'message'
    this.#messages = ['Java Script', 'Hello World', 'Boooom', 'Try again']
  }

  randomMessage() {
    let randomIndex = Math.floor(Math.random() * this.#messages.length)
    return this.#messages[randomIndex]
  }

  renderMessage() {
    const message = document.createElement('p')
    message.textContent = this.randomMessage()
    git
    this.#container.append(message)

    setInterval(() => {
      message.remove()
    }, 2000)

    return this.#container
  }
}
