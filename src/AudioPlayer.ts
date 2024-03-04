// 1.Sukurti klases Player,  VideoPlayer, AudioPlayer;
// 2. VideoPlayer ir AudioPlayer turi paveldėt Player;
// 3. Player turi turėt savybes: "brand", "releaseYear", metodą "play()"

import { Player } from './Player.js'

export class AudioPlayer extends Player {
    constructor(brand: string, releaseYear: number) {
        super(brand,releaseYear);
    }

    getAudioPlayerInfo() {
        console.log(`Plays audioplayer: ${this.brand}, ${this.releaseYear}`)
    }

    play() {
        console.log(`Plays audioplayer: ${this.getAudioPlayerInfo()}`)
    }
}