// OOP3 POLYMORPHISM & INTERFACES
// 1.Sukurti klases Player,  VideoPlayer, AudioPlayer;
// 2. VideoPlayer ir AudioPlayer turi paveldėt Player;
// 3. Player turi turėt savybes: "brand", "releaseYear", metodą "play()"
// 4. Tiek VideoPlayer ir AudioPlayer turi turėt tą patį play() metodą, tik vygdyti skirtingus veiksmus( tiesiog printint skirtingus logus );

import { Player } from './Player.js';
import { VideoPlayer } from './VideoPlayer.js';
import { AudioPlayer } from './AudioPlayer.js';
import { Car } from './Car.js';
import { Bicycle } from './Bicycle.js';

const player1 = new Player("Sony", 2002);
player1.play()

const videoPlayer1 = new VideoPlayer("Samsung", 2017);
videoPlayer1.play();

const audioPlayer1 = new AudioPlayer("Xiaomi", 2024);
audioPlayer1.play();


// /////// next task
// 5. Sukurti interface IDrivable, kuris turi turėt metodą drive()
// 6.  Sukurti interface IRefuelable  kuris turi turėt metodą refuel(amount)
// 7. Sukurti Bicycle klasę, kuri turi implementuoją IDrivable interface, bei turi papildomą metodą lock();
const newBycicle = new Bicycle();
newBycicle.drive();
newBycicle.lock();

// 8. Sukurti Car klasę, kuri turi implementuoją IDrivable ir IRefuelable interface'us , bei turi papildomą metodą lock();

// 9. Car turi turėt papildomą savybę "isParked";
// 10. Car turi turėt papildomą metodą park(), kai jis yra iškviečiamas "isParked" turi tapt true;  
// 11. Car turi turėt papildomą metodą leaveParking(), kai jis yra iškviečiamas "isParked" turi tapt false;
// 12. Car pridėt metodą displayParkingStatus. Metodas turi į console išvesti skirtingas žinutes.

const newCar = new Car();
newCar.drive()
newCar.refuel(5)
newCar.lock()
newCar.isParked()
newCar.park()
newCar.leaveParking()
// newCar.displayParkingStatus()



