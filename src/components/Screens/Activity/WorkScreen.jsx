import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import BalanceComponent from "./BalanceComponent";
import CurrentJobComponent from "./CurrentJobComponent";
import Button from "../../UI/UIComponents/Button";
import ElevatedVertical from "../../UI/Layout/ElevatedVertical";
import Label from "../../UI/UIComponents/Label";

export default ({}) => {
    return <Page title={"Работа"}>
        <Vertical>
            <BalanceComponent money={"500"} xp={1000}/>
            <CurrentJobComponent/>

            <ElevatedVertical>
                <Label text={"Зарплата: $100 / $16800"}/>
                <Label text={"Опыт: 3 xp / 504 xp"}/>
                <Button text={"Собрать"}/>
                <Button text={"Список вакансий"}/>
            </ElevatedVertical>

        </Vertical>
    </Page>
}