import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Icons from "../../../Util/Icons";
import Clothes from "../../UI/ListItems/Clothes";
import Vehicle from "../../UI/ListItems/Vehicle";

export default ({}) => {
    return <Page title={"Транспорт"}>
        <List>
            <Vehicle dto={{src: Icons.vehicle, name: "Велосипед", description: "Forward Sporting 29 2.0 D (2022) относится к типу спортивных моделей. Высокотехнологичные шатуны FWD HDL-S311, 42x34x24T мало весят и позволяют с комфортом крутить педали на разных дорожных покрытиях.", price: "500$"}}/>
            <Vehicle dto={{src: Icons.vehicle, name: "Велосипед", description: "Forward Sporting 29 2.0 D (2022) относится к типу спортивных моделей. Высокотехнологичные шатуны FWD HDL-S311, 42x34x24T мало весят и позволяют с комфортом крутить педали на разных дорожных покрытиях.", price: "500$"}}/>
            <Vehicle dto={{src: Icons.vehicle, name: "Велосипед", description: "Forward Sporting 29 2.0 D (2022) относится к типу спортивных моделей. Высокотехнологичные шатуны FWD HDL-S311, 42x34x24T мало весят и позволяют с комфортом крутить педали на разных дорожных покрытиях.", price: "500$"}}/>
            <Vehicle dto={{src: Icons.vehicle, name: "Велосипед", description: "Forward Sporting 29 2.0 D (2022) относится к типу спортивных моделей. Высокотехнологичные шатуны FWD HDL-S311, 42x34x24T мало весят и позволяют с комфортом крутить педали на разных дорожных покрытиях.", price: "500$"}}/>

        </List>
    </Page>
}