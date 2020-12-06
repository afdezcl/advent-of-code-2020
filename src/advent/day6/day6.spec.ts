import { Day6 } from "./day6";

describe("Test: Day 5", () => {

    const testDataPath = 'src/advent/day6/data/dataTest.txt';
    const correctDataPath = 'src/advent/day6/data/data.txt';

    describe("First problem", () => {
        it("Should return the value '11' to data.txt file", () => {
            expect(Day6.problemOne(testDataPath)).toEqual(11);
        });
    });
    
});
