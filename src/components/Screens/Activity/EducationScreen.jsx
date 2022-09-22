import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Label from "../../UI/UIComponents/Label";
import Education from "../../UI/ListItems/Education";
import Icons from "../../../Util/Icons";
import List from "../../UI/Layout/List";

export default ({}) => {
    return <Page title={"Образование"}>
        <Vertical>
            <ElevatedVertical>
                <List>
                    <Education dto={{src: Icons.education, name: "Основное общее", price: 500, learned: true}}/>
                    <Education dto={{src: Icons.education, name: "Среднее общее", price: 2000, learned: false}}/>
                    <Education dto={{src: Icons.education, name: "Среднее профессиональное", price: 25000, learned: false}}/>
                    <Education dto={{src: Icons.education, name: "Высшее", price: 100000, learned: false}}/>
                </List>
            </ElevatedVertical>
        </Vertical>
    </Page>
}