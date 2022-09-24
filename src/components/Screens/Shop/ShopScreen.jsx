import React from "react";
import Page from "../../UI/Page/Page";
import Icons from "../../../Util/Icons";
import Grid from "../../UI/Layout/Grid";
import SquareImgButton from "../../UI/UIComponents/SquareImgButton";

export default ({}) => {
    return <Page title={"Магазин"}>
        <Grid>
            <SquareImgButton text={"Одежда"} src={Icons.clothes} path={"/clothes"}/>
            <SquareImgButton text={"Гаджеты"} src={Icons.smartphone} path={"/gadgets/types"}/>
            <SquareImgButton text={"Транспорт"} src={Icons.vehicle} path={"/vehicles"}/>
            <SquareImgButton text={"Недвижимость"} src={Icons.realEstate} path={"/real-estate"}/>
        </Grid>
    </Page>
}