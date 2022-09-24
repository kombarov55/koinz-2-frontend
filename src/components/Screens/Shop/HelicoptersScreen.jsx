import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Gadget from "../../UI/ListItems/Gadget";
import {useSelector} from "react-redux";
import Vehicle from "../../UI/ListItems/Vehicle";

export default ({}) => {
    const helicopters = useSelector(state => state?.content?.value?.shop?.vehicles?.helicopters)

    return <Page title={"Вертолёты"}>
        <List>
            {helicopters?.map(v => <Vehicle dto={v}/>)}
        </List>
    </Page>
}
