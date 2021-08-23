import React, {useState} from 'react';
import TextField, { Input } from '@material/react-text-field';

import { Container } from './styles';
import logo from '../../assets/logo.svg'

const Home = () => {
    const [inputValue, setImputValue] = useState('')

    return (
    <Container>
    <Search><img src={logo} alt="logo do site" /></Search>
    <TextField
          label='Pesquisar'
          outlined
          // onTrailingIconSelect={() => this.setState({value: ''})}
          // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        ><Input
           value={inputValue}
           onChange={(e) =>  setImputValue(e.target.value)
            />
        </TextField>
    </Container>
    )
};
  
export default Home;

