import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import {Container, Menu, PageBody} from './AppStyled'

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';


import PrivateRoute from './components/PriavateRoute';
import MenuItem from './components/MenuItem'
import  Cart  from './components/Cart';

export default () => {

    return (
        <BrowserRouter>
        <Container>
            <Menu>
                <MenuItem title="Catalogo" icon="/assets/store.png" link="/"/>
                <MenuItem title="Entregas" icon="/assets/order.png" link="/orders"/>
                <MenuItem title="Meu perfil" icon="/assets/profile.png" link="/profile"/>
            </Menu>
                <PageBody>
                    <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <PrivateRoute path="/orders">
                        <div>TELA DE PEDIDOS</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                        <div>TELADE PERFIL</div>
                        </PrivateRoute>
                    <Route path="/tela2/:nome">
                        <Tela2Screen />
                    </Route>
                </Switch>
                </PageBody>
                <Cart />
                <ReactTooltip id="tip-top" place="top" effect="solid"/>
                <ReactTooltip id="tip-right" place="right" effect="solid"/>
        </Container>

        </BrowserRouter>
    );
}