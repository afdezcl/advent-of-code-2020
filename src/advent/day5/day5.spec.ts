import { Day5 } from "./day5";

describe("Test: Day 5", () => {

    const testDataPath = 'src/advent/day5/data/dataTest.txt';
    const correctDataPath = 'src/advent/day5/data/data.txt';

    describe("First problem", () => {
        it("Should return the value '820' to data.txt file", () => {
            expect(Day5.problemOne(testDataPath)).toEqual(820);
        });
    });

    describe("First problem", () => {
        it("Should return the value '731' to data.txt file", () => {
            expect(Day5.problemTwo(correctDataPath)).toEqual(731);
        });
    });
    
});
