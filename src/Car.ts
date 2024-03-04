// 5. Sukurti interface IDrivable, kuris turi turėt metodą drive()
export interface IDrivable {
    drive(): void};

// 6.  Sukurti interface IRefuelable  kuris turi turėt metodą refuel(amount)    
export interface IRefuelable {
    refuel(amount: number): void};

export class Car implements IDrivable, IRefuelable {
    drive() {
        console.log("Car is driving");
    };

    refuel(amount: number){
        console.log(`Car is refueled by ${amount} liters`)
    };

    lock() {
        console.log("Car is locked");
    }

// 9. Car turi turėt papildomą savybę "isParked";
    isParked() {
        console.log("Car is parked");
    }

// 10. Car turi turėt papildomą metodą park(), kai jis yra iškviečiamas "isParked" turi tapt true;  
    park(isParked = true) {
        console.log("Car is at the parking now")
    };

// 11. Car turi turėt papildomą metodą leaveParking(), kai jis yra iškviečiamas "isParked" turi tapt false;
    leaveParking(isParked  = false) {
        console.log("Car is leaving parking")}
       

// 12. Car pridėt metodą displayParkingStatus. Metodas turi į console išvesti skirtingas žinutes.

// displayParkingStatus() {
//     const parkingStatus = this.isParked ? "Car is at parking now" : "Car is not in parking";
//     console.log(parkingStatus);
// }
};