import styled from 'styled-components'

export const Container = styled.div`
    width: 80px;
    height: 80px; 
    background-color: ${props=>props.active == props.id ? 'white' : 'pink'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease .3s;
`;
