import {Component, ReactNode } from "react";

interface Props {
    text: string;
}

export default class Szinvalto extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            color: 'black',
        };
    }

    render(): ReactNode {
        return <div>
            <p>{this.props.text}</p>
            <button>Színváltás</button>
        </div>
    }
}