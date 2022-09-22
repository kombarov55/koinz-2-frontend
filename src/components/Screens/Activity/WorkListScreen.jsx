import React from "react";
import Page from "../../UI/Page/Page";
import Work from "../../UI/ListItems/Work";
import Icons from "../../../Util/Icons";
import List from "../../UI/Layout/List";

export default ({}) => {
    return <Page title={"Список вакансий"}>
        <List>
            <Work dto={{src: Icons.courier, name: "Курьер", description: "Гарантированный доход наших водителей и курьеров от 5 до 12 тыс.руб за смену! Заработаете меньше - сразу доплатим разницу бонусами, по курсу 1 бонус = 1 рубль!", salary: 100, requirements: ["Велосипед", "3 класса сельской школы"]}} />
        </List>
    </Page>
}