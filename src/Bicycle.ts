// 5. Sukurti interface IDrivable, kuris turi turėt metodą drive()
// 7. Sukurti Bicycle klasę, kuri turi implementuoją IDrivable interface, bei turi papildomą metodą lock();
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
