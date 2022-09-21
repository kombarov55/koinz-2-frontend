import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import React from "react";
import {Route, Routes} from "react-router";
import './index.css'
import App from "./App";
import Profile from "./components/Screens/Profile";
import Button from "./components/UI/UIComponents/Button";
import PageFooter from "./components/UI/Page/PageFooter";
import {Provider} from "react-redux";
import Store from "./redux/Store";
import Page from "./components/UI/Page/Page";
import MainManuScreen from "./components/Screens/MainManuScreen";

const rootElement = document.getElementById("root");

render(
    <Provider store={Store}>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<MainManuScreen/>}/>
                </Routes>
            </HashRouter>
    </Provider>,
    rootElement
);
