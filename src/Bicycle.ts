// 7. Sukurti Bicycle klasę, kuri turi implementuoją IDrivable interface, bei turi papildomą metodą lock();

// 5. Sukurti interface IDrivable, kuris turi turėt metodą drive()
export interface IDrivable {
    drive(): void};
    
export class Bicycle implements IDrivable {
    drive() {
        console.log("Driving bycicle");
    }

    lock() {
        console.log("Bycicle is locked");
    }
}
