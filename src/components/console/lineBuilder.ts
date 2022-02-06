import { CLine } from "./console";

export class LineBuilder{
    public raw: CLine[] = [];

    constructor(current: CLine[]){
        this.raw = current;
    }

    public add(content: string) {
        this.raw.push({content: content, id: this.raw.length})
    }

    public remove(position: number){
        this.raw = this.raw.filter(line => line.id !== position);
    }

    public clear = () => this.raw = [];
    
}