'use client';

import React from 'react';
import styled from 'styled-components';


export default function Project(){
    return (
        <ProjectStyled>
            <div className="project-card">
                <div className="project-image">

                </div>
                <div className="project-info"> 
                    <h3 className="font-bold text-2xl">Project Name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <div className="tags">
                        <div className="tag">
                            Flask
                        </div>
                        <div className="tag">
                            Django
                        </div>
                        <div className="tag">
                            Vue
                        </div>
                    </div>
                    <div className="buttons">
                    <button className="repo"></button>
                    <button className="live-btn">Live →</button>
                    </div>
                </div>
            </div>
        </ProjectStyled>
    )
}


const ProjectStyled = styled.div`
.project-card{
    width: 90%;
    margin: 24px auto;
    display: flex;
    padding: 16px;
    gap: 20px;
    border-radius: 16px;
  
  }
  
  .project-image{
    width: 80%;
    min-width: 300px;
    height: 300px;
    background: lightblue;
    border-radius: 16px;
  }

  .project-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tags{
    display: flex;
    gap: 10px;
    flex-direction: row;
    flex-wrap: wrap;

    .tag{
        padding: 3px 10px;
        background: purple;
        border-radius: 24px;
        font-size: 1rem;
        font-family: monospace;
    }
  }

  .buttons{
    // background: white;
    display: flex;
    gap: 10%;
    align-items: center;
    
  }

  .repo{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: red;

  }
  
  .live-btn{
    border: 3px solid palegreen;
    border-radius: 8px;
    padding: 2px;
    width: 50%;
    height: 80%;
    font-size: 1.3rem;
    font-family: verdana;
  }
  
  
`;

