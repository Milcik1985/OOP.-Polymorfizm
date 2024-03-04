// 1.Sukurti klases Player,  VideoPlayer, AudioPlayer;
// 2. VideoPlayer ir AudioPlayer turi paveldėt Player;
// 3. Player turi turėt savybes: "brand", "releaseYear", metodą "play()"
// 4. Tiek VideoPlayer ir AudioPlayer turi turėt tą patį play() metodą, tik vygdyti skirtingus veiksmus( tiesiog printint skirtingus logus );

export class Player {
    brand: string;
    releaseYear: number;

    constructor (
        brand: string,
        releasYear: number,
    )
    {
        this.brand = brand;
        this.releaseYear = releasYear;
    };

    getPlayerInfo(): string {
        return `${this.brand}, ${this.releaseYear}`
    }

    play() {
        console.log(`Playing: ${this.getPlayerInfo()}`);
    };
}

