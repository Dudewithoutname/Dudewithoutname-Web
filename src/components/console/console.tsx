import React from "react";
import { parseCommand } from "./commands";


export type CLine = {
    content: string,
    id: number,
}

export type CState = {
    name: string,
    input: string,
    lines: CLine[],
}

export class Console extends React.Component<{}, CState>{
    constructor(props: {}){
        super(props)
        this.state = {
            name: 'user',
            input: '',
            lines: [
                {
                    content: "Welcome to the Dude CLI",
                    id: 0,
                },
                {
                    content: "version 1.0.0 - Feb 2021",
                    id: 1,
                },
            ]
        }
    }

    render() {
        return (
          <div className="console">
              <div className="console-window">
                  {
                     this.state.lines.map((line: CLine) => (
                          <p key={line.id}>{line.content}</p>
                      ))
                  }
                  <span>{"user@Dude:# "} <input spellCheck="false" type="text" value={this.state.input} onChange={e => this.onChanged(e)} onKeyPress={async e => await this.onKeyPressed(e)}/></span>
              </div>
          </div>
        );
    }    

    async onKeyPressed (e: React.KeyboardEvent<HTMLInputElement>)  {
        if(e.key !== 'Enter' || this.state.input.length <= 0) return;
        
        const input = this.state.input;
        this.setState({ input: '' });

        const commandRes = await parseCommand(input, this.state.lines);
        
        if(commandRes == null){
            this.setState({
                lines: [...this.state.lines, {
                    content: `${this.state.name}@Dude:# '${input}' isn't recognized as command`,
                    id: this.state.lines.length
                }]

            })
        }
        else{
            this.setState({ lines: [...commandRes] });
        }
    }

    onChanged (e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        this.setState({input: e.target.value});
    }
}