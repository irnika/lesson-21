import React from "react";
import CustomButton from "./Button";

class ButtonContainer extends React.Component {
    state = {
        count: 0,
        
    };

    handleClickP = () => {
        this.setState((prevState) => ({ count: prevState.count + 1}));
    };
    handleClickM = () => {
        this.setState((prevState) => ({ count: prevState.count - 1}));
    };

    render() {
        const { count } = this.state;

        return (
            <div>
            <CustomButton
                text={`Plus:`}
                handleClick={this.handleClickP}
                
            ></CustomButton>
            <span>
                {`score: ${count}`}
                </span> 
                
                
            
            <CustomButton
                text={`Minus
                : `}
                handleClick={this.handleClickM}
                
            ></CustomButton>
            </div>
            
        )
    }
}

export default ButtonContainer;