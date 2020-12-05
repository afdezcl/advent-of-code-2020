import { Day5 } from "./day5";

describe("Test: Day 5", () => {

    const correctDataPath = 'src/advent/day5/data/dataTest.txt';

    describe("First problem", () => {
        it("Should return the value '820' to data.txt file", () => {
            expect(Day5.problemOne(correctDataPath)).toEqual(820);
        });
    });
    
});
