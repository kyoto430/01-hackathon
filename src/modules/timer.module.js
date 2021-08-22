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

  trigger() {
    this.renderTimer();
    console.log(this.container);
    console.log(this.timerForm);
    document.querySelector("#button").addEventListener("click", (event) => {
      event.preventDefault();
      console.log("EVENT LISTENER");
      this.time = Number(document.querySelector("#timeInput").value);
      console.log(this.time);
      this.interval = setInterval(this.decreaseTime.bind(this), 1000);
      this.setTime(this.time);
      return this.container;
    });
    return this.container;
  }

  renderTimer() {
    if (this.timerForm) {
      this.timerForm.remove();
    }

    this.timerForm.innerHTML = `<form id='form'>
        <h1>Задайте время</h1>
        <input type="text" id="timeInput">
        <input id="button" type="submit" value="СТАРТ">
        </form>`;

    this.container.append(this.timerForm, this.timeEl);
    return document.querySelector("body").append(this.container);
  }
}
