import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.title = document.createElement('h1')
    this.time = 5
    this.clicks = 0
    this.clickOnTime = true
    this.timerId = null
  }

  clicksStart() {
    document.body.addEventListener('click', (event) => {
      event.preventDefault()
      const { target } = event
      if (this.clickOnTime) {
        this.clicks += 1
        console.log(this.clicks)
      }
    })
  }

  timer() {
    this.timerId = setInterval(() => {
      console.log('timer start')
      console.log('time', this.time)
      this.time === 0 ? this.finishTimer() : --this.time
    }, 1000)
  }

  finishTimer() {
    clearInterval(this.timerId)
    this.clickOnTime = false
    this.title.textContent = `Кликов:${this.clicks}`
    document.body.prepend(this.title)
  }

  trigger() {
    this.timer()
    this.clicksStart()
  }
}
