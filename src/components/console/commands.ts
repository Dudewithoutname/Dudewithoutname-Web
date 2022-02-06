import { CLine } from "./console";
import { LineBuilder } from "./lineBuilder";

export async function parseCommand(input: string, lines: CLine[]) : Promise<CLine[] | null> {
    
    switch(input){        
        case 'help':            
            return helpCmd(lines);
        
        case 'catfact':
            return await factCmd(lines);
        
        case 'security':
            return kotlarCmd(lines);
    }

    return null;
}

function helpCmd(lines: CLine[]): CLine[]{
    const lb = new LineBuilder(lines);
    
    lb.add('# Help');
    lb.add('help - displays all useful commands');
    lb.add('catfact - changes your life by giving you a random cat fact');
    lb.add('security - recommends you the professional security company');

    return lb.raw;
} 

function kotlarCmd(lines: CLine[]): CLine[]{
    const lb = new LineBuilder(lines);
    
    for(let i = 0; i < 3; i++) lb.add('Kotlar Security s.r.o.');
    
    window.location.href = 'https://youtu.be/U2bezBlEsRw?t=10';

    return lb.raw;
} 

async function factCmd(lines: CLine[]): Promise<CLine[]>{
    const lb = new LineBuilder(lines);
    const req = await fetch('https://catfact.ninja/fact?max_length=50', { method: 'GET' });
    const fact = await req.json();
    lb.add(`Cat fact: ${fact.fact}`)
    return lb.raw;
} 