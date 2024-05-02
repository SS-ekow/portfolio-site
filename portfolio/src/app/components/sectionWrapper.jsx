import React from 'react';
import styled from 'styled-components';



function SectionWrapper(children){
    return (
        <SectionStyled>
            {children}
        </SectionStyled>
    )
}


const SectionStyled = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
`;


export default SectionWrapper;