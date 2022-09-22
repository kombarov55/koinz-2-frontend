import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import ImgButton from "../../UI/UIComponents/ImgButton";
import Icons from "../../../Util/Icons";
import {useNavigate} from "react-router-dom";
import Grid from "../../UI/Layout/Grid";
import SquareImgButton from "../../UI/UIComponents/SquareImgButton";

export default ({}) => {
    const navigate = useNavigate();

    return <Page title={"Магазин"}>
        <Grid>
            <SquareImgButton text={"Одежда"} src={Icons.clothes} path={"/clothes"}/>
            <SquareImgButton text={"Гаджеты"} src={Icons.smartphone} path={"/gadgets"}/>
            <SquareImgButton text={"Транспорт"} src={Icons.vehicle} path={"/vehicles"}/>
            <SquareImgButton text={"Имущество"} src={Icons.tv} path={"/property"}/>
            <SquareImgButton text={"Недвижимость"} src={Icons.realEstate} path={"/real-estate"}/>
        </Grid>
    </Page>
}