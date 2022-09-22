import React from "react";
import Page from "../UI/Page/Page";
import SquareImgButton from "../UI/UIComponents/SquareImgButton";
import Icons from "../../Util/Icons";
import Grid from "../UI/Layout/Grid";

export default ({}) => {
    return <Page title={"Главное меню"}>
        <Grid>
            <SquareImgButton text={"Профиль"} src={Icons.user} path={"/profile"}/>
            <SquareImgButton text={"Деятельность"} src={Icons.jobSeeker} path={"/activity"}/>
            <SquareImgButton text={"Магазин"} src={Icons.shoppingCart} path={"/shop"}/>
            <SquareImgButton text={"Кликер"} src={Icons.dollarCoin} path={"/clicker"}/>
            <SquareImgButton text={"Баланс"} src={Icons.creditCard} path={"/balance"}/>
            <SquareImgButton text={"Рейтинг"} src={Icons.barChart} path={"/rating"}/>
            <SquareImgButton text={"Настройки"} src={Icons.settings} path={"/settings"}/>`
        </Grid>
    </Page>
}