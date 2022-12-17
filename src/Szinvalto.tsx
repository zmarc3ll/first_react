import {Component, ReactNode } from "react";

interface Props {
    text: string;
    count: number;
}

interface State {
    color: string;
}

export default class Szinvalto extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            color: 'black',
        };
    }

    render(): ReactNode {
        let szoveg: string[] = [];
        for (let i = 0; i < this.props.count; i++) {
            szoveg.push(this.props.text);
        }
        
      return <div>
        {
            szoveg.map(e => 
            <p style={{color: this.state.color}}>{e}</p>)
        }
            <button onClick={() => this.setState({ color: 'red'})}>Színváltás</button>
        </div>
    }
}