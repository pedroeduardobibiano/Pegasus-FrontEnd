import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    border-radius: 10px;
    padding: 20px;
    display : flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: auto;
    height: 100px;
`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: white;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: none;
    padding-left: 50px;
    transition: all ease 0.3s;
    cursor: pointer;
    font-size: 15px;

    &:focus{
        cursor: text;
    }
`;
