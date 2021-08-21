import {Module} from '../core/module'
import {random} from "@/utils"
import {randomColors} from "@/core/constants/settings"

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        document.body.style.background = randomColors[random(0, randomColors.length)]
    }
}