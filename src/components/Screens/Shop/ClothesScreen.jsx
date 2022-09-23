import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Icons from "../../../Util/Icons";
import Clothes from "../../UI/ListItems/Clothes";
import GetContent from "../../../Util/GetContent";

export default ({}) => {
    const content = GetContent()

    const clothes = content.shop.clothes

    return <Page title={"Одежда"}>
        <List>
            {clothes.map(v => <Clothes dto={v}/>)}
        </List>
    </Page>
}