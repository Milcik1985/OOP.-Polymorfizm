// 1.Sukurti klases Player,  VideoPlayer, AudioPlayer;
// 2. VideoPlayer ir AudioPlayer turi paveldėt Player;
// 3. Player turi turėt savybes: "brand", "releaseYear", metodą "play()"
// 4. Tiek VideoPlayer ir AudioPlayer turi turėt tą patį play() metodą, tik vygdyti skirtingus veiksmus( tiesiog printint skirtingus logus );
import { Player } from "./Player.js";
export class VideoPlayer extends Player {
    constructor(brand, releaseYear) {
        super(brand, releaseYear);
    }
    getVideoPlayerInfo() {
        return `${this.brand}, ${this.releaseYear}`;
    }
    ;
    play() {
        console.log(`Plays videoplayer: ${this.getVideoPlayerInfo()}`);
    }
}
