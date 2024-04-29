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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    z-index: 5;

    ul{
        display: flex;
        gap: 10px;
        list-style: none;
        z-index: 5;
      }

      li{
        cursor: pointer;
        font-size: 1.5rem;
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