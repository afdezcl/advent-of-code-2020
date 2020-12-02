import { Day2 } from "./day2";

describe("Test: Day 2", () => {

    const correctDataPath = 'src/advent/day2/data/dataTest.txt';

    describe("First problem", () => {
        it("Should return the value '2' to data.txt file", () => {
            expect(Day2.problemOne(correctDataPath)).toEqual(2);
        });
    });
    
    describe("Second problem", () => {
        it("Should return the value '1' to data.txt file", () => {
            expect(Day2.problemTwo(correctDataPath)).toEqual(1);
        });

    });
    
});
