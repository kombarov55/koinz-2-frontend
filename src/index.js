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
import ShopScreen from "./components/Screens/Shop/ShopScreen";
import RatingScreen from "./components/Screens/RatingScreen";
import SettingsScreen from "./components/Screens/SettingsScreen";
import BalanceScreen from "./components/Screens/BalanceScreen";
import ClothesScreen from "./components/Screens/Shop/ClothesScreen";
import GadgetsScreen from "./components/Screens/Shop/GadgetsScreen";
import PropertyScreen from "./components/Screens/Shop/PropertyScreen";
import RealEstateScreen from "./components/Screens/Shop/RealEstateScreen";
import VehiclesScreen from "./components/Screens/Shop/VehiclesScreen";
import ActivityScreen from "./components/Screens/Activity/ActivityScreen";
import WorkScreen from "./components/Screens/Activity/WorkScreen";
import EducationScreen from "./components/Screens/Activity/EducationScreen";
import BusinessScreen from "./components/Screens/Activity/BusinessScreen";
import MiningScreen from "./components/Screens/Activity/MiningScreen";
import CasinoScreen from "./components/Screens/Activity/CasinoScreen";
import GamesScreen from "./components/Screens/Activity/GamesScreen";

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

                    <Route path={"/clothes"} element={<ClothesScreen/>}/>
                    <Route path={"/gadgets"} element={<GadgetsScreen/>}/>
                    <Route path={"/property"} element={<PropertyScreen/>}/>
                    <Route path={"/real-estate"} element={<RealEstateScreen/>}/>
                    <Route path={"/vehicles"} element={<VehiclesScreen/>}/>

                    <Route path={"/work"} element={<WorkScreen/>}/>
                    <Route path={"/education"} element={<EducationScreen/>}/>
                    <Route path={"/business"} element={<BusinessScreen/>}/>
                    <Route path={"/mining"} element={<MiningScreen/>}/>
                    <Route path={"/casino"} element={<CasinoScreen/>}/>
                    <Route path={"/games"} element={<GamesScreen/>}/>

                </Routes>
            </HashRouter>
    </Provider>,
    rootElement
);
