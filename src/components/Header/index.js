import React, {useState} from 'react';

import { Container, Logo, SearchInput, LogoName } from './styled'

export default ({search, onSearch})=>{
const[inputActive, setInputActive] =useState(false);

const handleInputFocus=()=>{
    setInputActive(true);
}

const handleInputBlur=()=>{
    if(search ===''){
        setInputActive(false);
    }
}

const handleChange=(e)=>{
    onSearch(e.target.value)
}

    return(
        <Container>
            <Logo src="/assets/Pegasus2.png"/>
            <SearchInput 
            type="text" 
            placeholder="Pesquise um produto..."
             value={search}
             onChange={handleChange}
            active={inputActive}
            onFocus={handleInputFocus} 
            onBlur={handleInputBlur} />
        </Container>
    )
}