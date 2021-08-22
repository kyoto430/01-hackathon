import { Module } from "../core/module";

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.container = document.createElement("div");
    this.time = 0;
    this.timeEl = document.createElement("span");
    this.timeEl.textContent = "00:00";
    this.timeEl.id = "time";
    this.timerForm = document.createElement("form");
    this.interval;
  }

  setTime(value) {
    this.timeEl.innerHTML = `00:${value}`;
  }

  finishGame() {
    clearInterval(this.interval);
    this.container.remove();
  }

  decreaseTime() {
    if (this.time === 0) {
      this.finishGame();
    } else {
      let current = --this.time;
      if (current < 10) {
        current = `0${current}`;
      }
      this.setTime(current);
    }
  }

  startGame() {
    this.interval = setInterval(this.decreaseTime.bind(this), 1000);
    this.setTime(this.time);
  }

  trigger() {
    this.renderTimer();
    console.log(this.container);

    return this.container;
  }

  renderTimer() {
    if (this.timerForm) {
      this.timerForm.remove();
    }

    this.timerForm.innerHTML = `<form>
        <h1>Задайте время</h1>
        <input type="text" id="timeInput">
        <input type="submit" value="СТАРТ">
        </form>`;

    this.container.append(this.timerForm, this.timeEl);
    document.querySelector("body").append(this.container);

    this.timerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.time = Number(document.querySelector("#timeInput").value);
      console.log(this.time);
      this.startGame();
    });
  }
}
