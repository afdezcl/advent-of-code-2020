import { Day1 } from "./day1";

describe("Test: Day 1", () => {

    const correctDataPath = 'src/advent/day1/data/data.txt';
    const failDataPath = 'src/advent/day1/data/dataFail.txt';
    const coincidence = 2020;

    describe("First problem", () => {
        it("Should return the value '41979' to data.txt file", () => {
            expect(Day1.problemOne(correctDataPath, coincidence)).toEqual(41979);
        });
        it("Should return '0' to a wrong file", () => {
            expect(Day1.problemOne(failDataPath, coincidence)).toEqual(0);
        });
    });
    
    describe("Second problem", () => {
        it("Should return the value '193416912' to data.txt file", () => {
            expect(Day1.problemTwo(correctDataPath, coincidence)).toEqual(193416912);
        });

        it("Should return '0' to a wrong file", () => {
            expect(Day1.problemTwo(failDataPath, coincidence)).toEqual(0);
        });
    });
    
});
