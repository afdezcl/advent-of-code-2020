import { Day1 } from "./day1";

describe("Test: Day 1", () => {

    const correctDataPath = 'src/advent/day1/data/data.txt';
    const failDataPath = 'src/advent/day1/data/dataFail.txt';

    describe("First problem", () => {
        it("Should return the value '41979' to data.txt file", () => {
            expect(Day1.problemOne(correctDataPath)).toEqual(41979);
        });
        it("Should return '0' to a wrong file", () => {
            expect(Day1.problemOne(failDataPath)).toEqual(0);
        });
    });
    
    describe("Second problem", () => {
        it("Should return the value '193416912' to data.txt file", () => {
            expect(Day1.problemTwo(correctDataPath)).toEqual(193416912);
        });

        it("Should return '0' to a wrong file", () => {
            expect(Day1.problemTwo(failDataPath)).toEqual(0);
        });
    });
    
});
