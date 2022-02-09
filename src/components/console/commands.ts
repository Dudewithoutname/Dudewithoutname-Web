import { CLine } from "./console";
import { LineBuilder } from "./lineBuilder";

export async function parseCommand(input: string, lines: CLine[]) : Promise<CLine[] | null> {
    
    switch(input.toLowerCase()){        
        case 'help':            
            return helpCmd(lines);
        
        case 'catfact':
            return await factCmd(lines);
        
        case 'security':
            return kotlarCmd(lines);
        
        case 'exp':            
            return expCmd(lines);
    }

    return null;
}

function helpCmd(lines: CLine[]): CLine[]{
    const lb = new LineBuilder(lines);
    
    lb.add('# Help');
    lb.add('help - displays all useful commands');
    lb.add('catfact - changes your life by giving you a random cat fact');
    lb.add('exp - displays my programming skills');
    lb.add('security - recommends you the professional security company');

    return lb.raw;
} 

function kotlarCmd(lines: CLine[]): CLine[]{
    const lb = new LineBuilder(lines);
    
    for(let i = 0; i < 3; i++) lb.add('Kotlar Security s.r.o.');
    
    window.location.href = 'https://youtu.be/U2bezBlEsRw?t=10';

    return lb.raw;
} 

function expCmd(lines: CLine[]): CLine[]{
    const lb = new LineBuilder(lines);
    lb.add('');
    lb.add('# Javascript  (*2019) || Typescript (*2021)');
    lb.add('- I <3 these languages because in the modern world you are able to create anything with them');
    lb.add('- React, Express, Electron, DiscordJS... and lots of other brilliant technologies to learn');
    lb.add('# Csharp (*2020)');
    lb.add('- Unity, IL Game-Modding, .Net Framework, Unturned Plugins [RM]');
    lb.add('- This language feels special to me since my fav. game is unturned');
    lb.add('- + when i was younger i\'ve wanted to be a game dev so i made this dream come true');
    lb.add('# Other technologies worth to mention');
    lb.add('- SCSS, MongoDB, MySQL, Git, google.com :)');
    lb.add('');

    return lb.raw;
}

async function factCmd(lines: CLine[]): Promise<CLine[]>{
    const lb = new LineBuilder(lines);
    const req = await fetch('https://catfact.ninja/fact?max_length=50', { method: 'GET' });
    const fact = await req.json();
    lb.add(`Cat fact: ${fact.fact}`)
    return lb.raw;
} 


