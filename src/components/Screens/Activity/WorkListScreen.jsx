import React from "react";
import Page from "../../UI/Page/Page";
import Work from "../../UI/ListItems/Work";
import Icons from "../../../Util/Icons";
import List from "../../UI/Layout/List";
import GetContent from "../../../Util/GetContent";
import {useDispatch} from "react-redux";

export default ({}) => {
    const content = GetContent()

    const works = content.activity.works

    return <Page title={"Список вакансий"}>
        <List>{works.map(v => <Work dto={v}/>)}</List>
    </Page>
}