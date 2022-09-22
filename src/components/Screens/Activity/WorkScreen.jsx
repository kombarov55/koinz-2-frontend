import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import Horizontal from "../../UI/Layout/Horizontal";
import Img from "../../UI/UIComponents/Img";
import Icons from "../../../Util/Icons";
import Label from "../../UI/UIComponents/Label";
import BalanceComponent from "./BalanceComponent";

export default ({}) => {
    return <Page title={"Работа"}>
        <Vertical>
            <BalanceComponent money={"500"} xp={1000}/>
        </Vertical>
    </Page>
}