import fs from "fs";

export interface Passport {
    byr: string;
    iyr: string;
    eyr: string;
    hgt: string;
    hcl: string;
    ecl: string;
    pid: string;
    cid: string;
};

export class Day4 {

    static settingData(callback: (l: string) => void, dataPath: string): void {
        const lines = fs.readFileSync(dataPath, "utf8");
        lines.toString().split(/\n/).join().split(',,').forEach(line => {
            callback(line);
        });
    }

    static problemOne(dataPath: string): number {
        let validPasswords = 0;
        this.settingData((line: string) => {
            if (line.includes('byr') &&
                line.includes('iyr') &&
                line.includes('eyr') &&
                line.includes('hgt') &&
                line.includes('hcl') &&
                line.includes('ecl') &&
                line.includes('pid')) {
                validPasswords++;
            }
        }, dataPath);

        return validPasswords;
    }

    static problemTwo(dataPath: string) {

    }
}
