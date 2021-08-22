import {Module} from '../core/module'
import {random} from "@/utils"
import {randomColors} from "@/core/constants/settings"

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const shapeExist = document.querySelector('.shape')
        if (shapeExist) shapeExist.remove()

        const shape = document.createElement('div')
        shape.className = 'shape'
        const randomWidth = random(5, 30)
        const randomHeight = random(5, 30)
        shape.style.width = randomWidth + 'vw'
        shape.style.height = randomHeight + 'vh'
        shape.style.borderRadius = `${random(15, 60)}px`
        shape.style.border = '2px solid gray'
        shape.style.background = randomColors[random(0, randomColors.length - 1)]
        shape.style.position = 'absolute'
        shape.style.left = `${Math.random() * (100 - randomWidth)}vw`
        shape.style.top = `${Math.random() * (100 - randomHeight)}vh`
        document.body.append(shape)
    }
}
