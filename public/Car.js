// 5. Sukurti interface IDrivable, kuris turi turėt metodą drive()
;
;
export class Car {
    constructor(isParked) {
        this.isParked = isParked;
    }
    drive() {
        console.log("Car is driving");
    }
    ;
    refuel(amount) {
        console.log(`Car is refueled by ${amount} liters`);
    }
    ;
    lock() {
        console.log("Car is locked");
    }
    // 9. Car turi turėt papildomą savybę "isParked";
    // 10. Car turi turėt papildomą metodą park(), kai jis yra iškviečiamas "isParked" turi tapt true;  
    park() {
        this.isParked = true;
    }
    ;
    // 11. Car turi turėt papildomą metodą leaveParking(), kai jis yra iškviečiamas "isParked" turi tapt false;
    leaveParking() {
        this.isParked = false;
    }
    // 12. Car pridėt metodą displayParkingStatus. Metodas turi į console išvesti skirtingas žinutes.
    displayParkingStatus() {
        const parkingStatus = this.isParked ? "Car is at parking now" : "Car is not in parking";
        console.log(parkingStatus);
    }
}
;
