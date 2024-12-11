// index.ts
/**
 * Funkcja dodaje dwie liczby i zwraca wynik.
 * @param a - Pierwsza liczba
 * @param b - Druga liczba
 * @returns Suma dwóch liczb
 */
export function add(a, b) {
    return a + b;
}
/**
 * Funkcja zwraca powitanie dla podanej nazwy.
 * @param name - Imię użytkownika
 * @returns Wiadomość powitalna
 */
export function greet(name) {
    return `Hello, ${name}!`;
}
// Prosty log dla testowania funkcji
console.log(greet("World")); // Hello, World!
console.log(`2 + 3 = ${add(2, 3)}`); // 2 + 3 = 5
//# sourceMappingURL=index.js.map