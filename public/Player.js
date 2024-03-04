// 1.Sukurti klases Player,  VideoPlayer, AudioPlayer;
// 2. VideoPlayer ir AudioPlayer turi paveldėt Player;
// 3. Player turi turėt savybes: "brand", "releaseYear", metodą "play()"
// 4. Tiek VideoPlayer ir AudioPlayer turi turėt tą patį play() metodą, tik vygdyti skirtingus veiksmus( tiesiog printint skirtingus logus );
export class Player {
    constructor(brand, releasYear) {
        this.brand = brand;
        this.releaseYear = releasYear;
    }
    ;
    getPlayerInfo() {
        return `${this.brand}, ${this.releaseYear}`;
    }
    play() {
        console.log(`Playing: ${this.getPlayerInfo()}`);
    }
    ;
}
