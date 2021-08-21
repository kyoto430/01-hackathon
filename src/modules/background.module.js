import {Module} from '../core/module'
import {random} from "@/utils";

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.backgrounds = [
            '#A5FF8A',
            '#E0DC78',
            '#FA685A',
            '#884EE0',
            '#6BF6FF',
            '#FAA73F'
        ]
    }

    trigger() {
        document.body.style.background = this.backgrounds[random(0, this.backgrounds.length)]
    }
}