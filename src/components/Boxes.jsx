import React from 'react';
import './style.css';

class Boxes extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
                <a href={this.props.source}><img src={this.props.image} /></a>
            </div>
        )
    }
}

export default Boxes