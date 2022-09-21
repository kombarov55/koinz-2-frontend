import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import React from "react";
import {Route, Routes} from "react-router";
import './index.css'
import {Provider} from "react-redux";
import Store from "./redux/Store";
import MainManuScreen from "./components/Screens/MainManuScreen";
import Profile from "./components/Screens/Profile";
import ClickerScreen from "./components/Screens/ClickerScreen";
import ShopScreen from "./components/Screens/ShopScreen";
import ActivityScreen from "./components/Screens/ActivityScreen";
import RatingScreen from "./components/Screens/RatingScreen";
import SettingsScreen from "./components/Screens/SettingsScreen";
import BalanceScreen from "./components/Screens/BalanceScreen";

const rootElement = document.getElementById("root");

render(
    <Provider store={Store}>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<MainManuScreen/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/balance"} element={<BalanceScreen/>}/>
                    <Route path={"/clicker"} element={<ClickerScreen/>}/>
                    <Route path={"/shop"} element={<ShopScreen/>}/>
                    <Route path={"/activity"} element={<ActivityScreen/>}/>
                    <Route path={"/rating"} element={<RatingScreen/>}/>
                    <Route path={"/settings"} element={<SettingsScreen/>}/>
                </Routes>
            </HashRouter>
    </Provider>,
    rootElement
);
