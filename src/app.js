import './styles.css'

import {ContextMenu} from "@/menu"
import {TestModule} from "@/modules/test.module"
import {SoundModule} from "@/modules/sound.module";
import {BackgroundModule} from "@/modules/background.module";

const contextMenu = new ContextMenu("#menu")

contextMenu.add(new TestModule('test', 'Тест'))
contextMenu.add(new SoundModule('sound', 'Случайный звук'))
contextMenu.add(new BackgroundModule('bg', 'Случайный фон'))