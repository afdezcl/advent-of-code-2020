import fs from "fs";

export class Day1 {
    static problemOne(dataPath: string): number {
        const numbers = fs.readFileSync(dataPath, "utf8");
        let result = 0;

        numbers.toString().split(/\n/).forEach(number1 => {
            numbers.toString().split(/\n/).forEach(number2 => {
                if (+number1 + +number2 === 2020) {
                    result = +number1 * +number2;
                }
            });
        });

        return result;
    }

    static problemTwo(dataPath: string): number {
        const numbers = fs.readFileSync(dataPath, "utf8");
        let result = 0;

        numbers.toString().split(/\n/).forEach(number1 => {
            numbers.toString().split(/\n/).forEach(number2 => {
                numbers.toString().split(/\n/).forEach(number3 => {
                    if (+number1 + +number2 + +number3 === 2020) {
                        result = +number1 * +number2 * +number3;
                    }
                });
            });
        });

        return result;
    }
}
