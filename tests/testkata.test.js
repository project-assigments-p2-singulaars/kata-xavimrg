import { describe, expect, it, beforeAll } from "vitest";
import { dividir, multiplicar, sumar, restar } from "./funciontest.js";


describe ("sumar (sumar dos numeros)", () => {
    it("should return sumar(2,2)=4"), () => {
        let a = 2;
        let b = 2;
        expect(sumar(a,b)) .toBe(4)}
    }
)

describe ("restar (restar dos numeros enteros)", () => {
    it("should return restar(5,3)=2"), () => {
        let c = 5;
        let d = 3;
        expect(restar(c,d)) .toBe(2)}
    }
)

describe ("multiplicar (multiplicar dos numeros enteros)", () => {
    it("should retun multiplicar(6,6)=36"), () => {
    let e = 6;
    let f = 6; 
    expect(multiplicar(e,f)) .toBe(36)}
}
)

describe ("dividir (dividir dos numeros enteros)", () => {
    it("should return (25,5)=5"), () => {
        let g = 25;
        let h = 5;
        expect(dividir(g,h)) .tobe(5)
    }}
)
