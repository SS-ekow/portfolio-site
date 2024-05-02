'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import structure from '../../../public/images/structure.png'

export default function Bubble(source) {
    return (
        <BubbleStyled className="bubble">
           <div className="stack">
                <Image 
                src= {source}
                alt="stack bubble"
                />
            
            </div> 
        </BubbleStyled>
    )
}


const BubbleStyled = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    background: lightblue;
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before{
        content: '';
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 10px;
        left: 0px;
    }

    &::after{
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        position: absolute;
        top: 10px;
        left: 60px;
        z-index: 102;
    }

    .stack{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px dotted white;
        z-index: 3;
      }

      .stack img{
        width: 100%;
        height: 100%;
      }
`;