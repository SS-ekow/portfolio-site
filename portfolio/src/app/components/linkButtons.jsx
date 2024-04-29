import React from 'react';
import styled from 'styled-components';



export default function LinkButton() {
    return (
        <LinkButtonStyled>
            <div className="button blue">
                <div>
                    <div className="icon "></div>
                    <p>Name</p>
                </div>
                <div>
                    <div className="icon"></div>
                    <p>Name</p>
                </div>
            </div>
            <div className="button purple">
                <div>
                    <div className="icon "></div>
                    <p>Name</p>
                </div>
                <div>
                    <div className="icon"></div>
                    <p>Name</p>
                </div>
            </div>
            <div className="button blue">
                <div>
                    <div className="icon "></div>
                    <p>Name</p>
                </div>
                <div>
                    <div className="icon"></div>
                    <p>Name</p>
                </div>
            </div>
            <div className="button purple">
                <div>
                    <div className="icon "></div>
                    <p>Name</p>
                </div>
                <div>
                    <div className="icon"></div>
                    <p>Name</p>
                </div>
            </div>

        </LinkButtonStyled>
    )
}


const LinkButtonStyled =  styled.div`
    .button{
        width: 70%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        
        border-radius: 20px;
        margin: 10px auto;
    }

    .blue{
        background: lightblue;
    }

    .purple{
        background: purple;
    }



    


`;