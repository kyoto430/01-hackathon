import './styles.css'
import { ContextMenu } from '@/menu'
import { SoundModule } from '@/modules/sound.module'
import { BackgroundModule } from '@/modules/background.module'
import { ShapeModule } from '@/modules/shape.module'
import { CustomMessageModule } from '@/modules/custom-message.module'
import { ClicksModule } from '@/modules/clicks.module'

const contextMenu = new ContextMenu('#menu')

contextMenu.add(new SoundModule('sound', 'Случайный звук'))
contextMenu.add(new BackgroundModule('bg', 'Случайный фон'))
contextMenu.add(new ShapeModule('shape', 'Случайная фигура'))
contextMenu.add(new CustomMessageModule('message', 'Случайное сообщение'))
contextMenu.add(new ClicksModule('click', 'Считать клики (за 5 секунд)'))
