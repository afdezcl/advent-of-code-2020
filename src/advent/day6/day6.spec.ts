import { Day6 } from "./day6";

describe("Test: Day 6", () => {

    const testDataPath = 'src/advent/day6/data/dataTest.txt';    

    describe("First problem", () => {
        it("Should return the value '11' to data.txt file", () => {
            expect(Day6.problemOne(testDataPath)).toEqual(11);
        });
    });

    describe("Second problem", () => {
        it("Should return the value '6' to data.txt file", () => {
            expect(Day6.problemTwo(testDataPath)).toEqual(6);
        });
    });
    
});
