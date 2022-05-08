import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0, 0.16);
    padding: 10px;
    display: flex;
    align-items: center;
    color: #696969;
    cursor: pointer;
`;



export const ProductPhotoArea = styled.div`
    width: 100px;
`;
export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
`;
export const ProductButtonArea = styled.div``;


export const ProductPhoto = styled.img`
    width: 100%;
`;


export const ProductName = styled.div`
 font-size: 20px;
 font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
`;
export const ProductIngredientes = styled.div`
    font-size: 12px;
`;


export const ProcuctButton = styled.img`
width: 15px;
`;