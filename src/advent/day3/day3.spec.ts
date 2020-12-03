import { Day3 } from "./day3";

describe("Test: Day 3", () => {

    const correctDataPath = 'src/advent/day3/data/data.txt';

    describe("First problem", () => {
        it("Should return the value '203' to data.txt file", () => {
            expect(Day3.problemOne(correctDataPath)).toEqual(203);
        });
    });
    
    describe("Second problem", () => {
        it("Should return the value '3316272960' to data.txt file", () => {
            expect(Day3.problemTwo(correctDataPath)).toEqual(3316272960);
        });

    });
    
});
