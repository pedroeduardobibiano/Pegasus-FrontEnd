import React from 'react';
import {
    Container,
    ProductPhotoArea,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductButtonArea,
    ProcuctButton,

} from './styled';

export default ({data, onClick})=>{

const handleClick =()=>{
    onClick(data);
}


    return(
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image}/>
            </ProductPhotoArea>

            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice> R${data.price}</ProductPrice>
            </ProductInfoArea>

            <ProductButtonArea>
                <ProcuctButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>
    );
}