import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.title = document.createElement('h1')
    this.title.className = 'title-clicks'
    this.time = null
    this.clicks = null
    this.clickOnTime = null
    this.timerId = null
    this.container = document.body.addEventListener('click', (event) => {
      event.preventDefault()
      if (this.clickOnTime) {
        this.clicks += 1
        console.log(this.clicks)
      }
    })
  }

  clicksStart() {
    this.clickOnTime = true
    this.clicks = 0
  }

  timer() {
    console.log('time', this.time)
    this.time === 0 ? this.finishTimer() : --this.time
  }

  finishTimer() {
    this.clickOnTime = false
    clearInterval(this.timerId)
    this.title.textContent = `Кликов:${this.clicks}`
    document.body.prepend(this.title)
  }

  interval() {
    this.timerId = setInterval(() => {
      this.timer()
    }, 1000)
    return this.timerId
  }

  trigger() {
    this.title.remove()
    this.time = 5
    this.interval()
    this.clicksStart()
  }
}
