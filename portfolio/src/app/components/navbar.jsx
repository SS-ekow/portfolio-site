'use client';

import React from 'react';
import styled from 'styled-components';



export default function NavBar() {

    return (
        <NavBarStyled>
            <nav className="navbar">
                <div className="logo">
                
                </div>
                <ul className="nav-links">
                    <li>
                    <a href="#hero">Home</a>
                    </li>
                    <li>
                    <a href="#about">About</a>
                    </li>
                    <li>
                    <a href="#projects">Projects</a>
                    </li>
                    <li>
                    <a href="#ask">Ask</a>
                    </li>
                </ul>

                <button className="cta">Hire Us</button>


            </nav>
        </NavBarStyled>
    )
}

const NavBarStyled = styled.header`
.navbar{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    z-index: 5;
    position: absolute;
    top: 0;
    

    ul{
        display: flex;
        gap: 10px;
        list-style: none;
        z-index: 5;
        
        min-width: 80%;
      }

      li{
        cursor: pointer;
        font-size: 1.4rem;
        margin-left: 15%;
        font-family: monospace;

        a:hover, a:focus{
          transform: scale(1.1);
          border-bottom: 3px solid black;
        
        }

      }
      
      .logo{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: orangered;
        z-index: 5;
      }
      
      .cta{
        background: white;
        color: black;
        padding:0 1rem;
        border-radius: 5px;
        font-size: 1.5rem;
        cursor: pointer;
      }
}
`;
