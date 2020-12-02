import fs from "fs";

export const decodedLine = {
    minimum: 0,
    maximum: 0,
    letterToFind: '',
    password: ''
};

export class Day2 {

    static settingData(callback: (l: string) => void, dataPath: string): void {
        const lines = fs.readFileSync(dataPath, "utf8");
        lines.toString().split(/\n/).forEach(line => {
            callback(line);
        });
    }

    static decodeEachLine(line: string): void {
        const apparences = line.match(/\b\w+\b/g) as string[];
        decodedLine.minimum = +apparences[0];
        decodedLine.maximum = +apparences[1];
        decodedLine.letterToFind = apparences[2];
        decodedLine.password = apparences[3];
    }

    static problemOne(dataPath: string): number {
        let validPasswords = 0;

        this.settingData((line) => {
            this.decodeEachLine(line);
            const occurrences = decodedLine.password.split(decodedLine.letterToFind).length - 1;
            if (occurrences >= decodedLine.minimum && occurrences <= decodedLine.maximum) {
                validPasswords++;
            }
        }, dataPath);
        return validPasswords;
    }

    static problemTwo(dataPath: string): number {
        let validPasswords = 0;

        this.settingData((line) => {
            this.decodeEachLine(line);

            if (decodedLine.password.charAt(decodedLine.minimum - 1) === decodedLine.letterToFind
                && decodedLine.password.charAt(decodedLine.maximum - 1) !== decodedLine.letterToFind
                || decodedLine.password.charAt(decodedLine.maximum - 1) === decodedLine.letterToFind
                && decodedLine.password.charAt(decodedLine.minimum - 1) !== decodedLine.letterToFind) {

                validPasswords++;
            }

        }, dataPath);

        return validPasswords;
    }
}