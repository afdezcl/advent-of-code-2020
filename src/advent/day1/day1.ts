import fs from "fs";

export class Day1 {

    static settingData(callback: (n: number) => void, dataPath: string): void {
        const numbers = fs.readFileSync(dataPath, "utf8");
        numbers.toString().split(/\n/).forEach(number => {
            callback(+number);
        });
    }

    static problemOne(dataPath: string, coindence: number): number {
        let result = 0;
        const pairs = new Map<number, number>();

        this.settingData((number) => {
            pairs.set(coindence - number, number);
        }, dataPath);

        this.settingData((number) => {
            const x = pairs.get(number) as number;
            if (x + number === coindence) {
                result = x * number;
            }
        }, dataPath);

        return result;
    }

    static problemTwo(dataPath: string, coindence: number): number {
        let result = 0;
        const pairs = new Map<number, number>();
        const products = new Map<number, number>();

        this.settingData((number1) => {
            this.settingData((number2) => {
                pairs.set(coindence - number1 - number2, number1 + number2);
                products.set(coindence - number1 - number2, number1 * number2);
            }, dataPath);
        }, dataPath);

        this.settingData((number) => {
            const x = pairs.get(number) as number;
            const productCarry = products.get(number) as number;
            if (x + number === coindence) {
                result = number * productCarry;
            }
        }, dataPath);

        return result;
    }
}
