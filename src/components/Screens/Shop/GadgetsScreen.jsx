import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Gadget from "../../UI/ListItems/Gadget";
import Icons from "../../../Util/Icons";

export default ({}) => {
    return <Page title={"Гаджеты"}>
        <List>
            <Gadget dto={{src: Icons.smartphone, name: "Айфон 10", description: "Дизайн iPhone X — совершенно новая разработка Apple. На передней панели гаджета нет ни одной кнопки. Она полностью занята дисплеем без рамок и ограничений. Корпус выполнен из прочной хирургической стали.", price: "1300$"}}/>
            <Gadget dto={{src: Icons.smartphone, name: "Айфон 10", description: "Дизайн iPhone X — совершенно новая разработка Apple. На передней панели гаджета нет ни одной кнопки. Она полностью занята дисплеем без рамок и ограничений. Корпус выполнен из прочной хирургической стали.", price: "1300$"}}/>
            <Gadget dto={{src: Icons.smartphone, name: "Айфон 10", description: "Дизайн iPhone X — совершенно новая разработка Apple. На передней панели гаджета нет ни одной кнопки. Она полностью занята дисплеем без рамок и ограничений. Корпус выполнен из прочной хирургической стали.", price: "1300$"}}/>
            <Gadget dto={{src: Icons.smartphone, name: "Айфон 10", description: "Дизайн iPhone X — совершенно новая разработка Apple. На передней панели гаджета нет ни одной кнопки. Она полностью занята дисплеем без рамок и ограничений. Корпус выполнен из прочной хирургической стали.", price: "1300$"}}/>
        </List>
    </Page>
}