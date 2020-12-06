import fs from "fs";

export class Day6 {

    static settingData(callback: (l: string) => void, dataPath: string): void {
        const lines = fs.readFileSync(dataPath, "utf8");
        lines.toString().split(/\n/).join().split(',,').forEach(line => {
            callback(line);
        });
    }

    static problemOne(dataPath: string): number {
        let questionAnswered = 0;        
        this.settingData((line: string) => {
            let group = line.replace(/,/g, '');
            questionAnswered += group.replace(/(.)(?=.*\1)/g, "").length;            
        }, dataPath);
        return questionAnswered;
    }

    static problemTwo(dataPath: string) {
        let group: string[];
        let questionAnswered = 0;
        let found = false;        
        this.settingData((line: string) => {            
            group = line.split(',');             
            if(group.length === 1) {
                //console.log(group[0].length);
                
                questionAnswered += group[0].length;
            } else {                
                group[0].split('').forEach(letter => {
                    group.filter(person => person.includes(letter))                    
                    for(let person = 1; person < group.length; person++) {
                        //console.log(group[person].includes(letter));
                        
                        if(group[person].includes(letter) && !found) {
                            questionAnswered++;
                            found = true;
                        }
                    }
                    found = false;
                });
                
            }
            
            
        }, dataPath);
        return questionAnswered;
    }
}
