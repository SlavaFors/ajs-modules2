
//В модуле game импорт класса Character
//Экспорт из модуля game класса Game в качестве дефолтного, класса GameSavingData и функций readGameSaving и writeGameSaving
import Character from './domain.js'

class Game {
   start() {
      console.log('game started');
   }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game
export { readGameSaving, writeGameSaving, GameSavingData }


