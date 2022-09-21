import React from "react";
import Page from "../UI/Page/Page";
import SquareImgButton from "../UI/UIComponents/SquareImgButton";
import Icons from "../../Util/Icons";
import Grid from "../UI/Layout/Grid";

export default ({}) => {
    return <Page>
        <Grid>
            <SquareImgButton text={"Баланс"} src={Icons.creditCard} />
            <SquareImgButton text={"Кликер"} src={Icons.dollarCoin} />
            <SquareImgButton text={"Магазин"} src={Icons.shoppingCart} />
            <SquareImgButton text={"Деятельность"} src={Icons.jobSeeker} />
            <SquareImgButton text={"Рейтинг"} src={Icons.barChart} />
            <SquareImgButton text={"Настройки"} src={Icons.settings} />
        </Grid>
    </Page>
}