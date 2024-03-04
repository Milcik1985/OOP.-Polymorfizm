;
;
export class Car {
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
    isParked() {
        console.log("Car is parked");
    }
    // 10. Car turi turėt papildomą metodą park(), kai jis yra iškviečiamas "isParked" turi tapt true;  
    park(isParked = true) {
        console.log("Car is at the parking now");
    }
    ;
    // 11. Car turi turėt papildomą metodą leaveParking(), kai jis yra iškviečiamas "isParked" turi tapt false;
    leaveParking(isParked = false) {
        console.log("Car is leaving parking");
    }
}
;
