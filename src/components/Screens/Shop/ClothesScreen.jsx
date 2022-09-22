import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Icons from "../../../Util/Icons";
import Clothes from "../../UI/ListItems/Clothes";

export default ({}) => {
    return <Page title={"Одежда"}>
        <List>
            <Clothes dto={{src: Icons.clothes, name: "Очки гучи", description: "Очки в смелых оправах и солнцезащитные очки составляют женскую линию очков Gucci, в которую входят как классические модели «авиатор», так и очки в оправе «кошачий глаз» и украшенные кристаллами модели Hollywood Forever.", price: "100$"}}/>
            <Clothes dto={{src: Icons.clothes, name: "Очки гучи", description: "Очки в смелых оправах и солнцезащитные очки составляют женскую линию очков Gucci, в которую входят как классические модели «авиатор», так и очки в оправе «кошачий глаз» и украшенные кристаллами модели Hollywood Forever.", price: "100$"}}/>
            <Clothes dto={{src: Icons.clothes, name: "Очки гучи", description: "Очки в смелых оправах и солнцезащитные очки составляют женскую линию очков Gucci, в которую входят как классические модели «авиатор», так и очки в оправе «кошачий глаз» и украшенные кристаллами модели Hollywood Forever.", price: "100$"}}/>
            <Clothes dto={{src: Icons.clothes, name: "Очки гучи", description: "Очки в смелых оправах и солнцезащитные очки составляют женскую линию очков Gucci, в которую входят как классические модели «авиатор», так и очки в оправе «кошачий глаз» и украшенные кристаллами модели Hollywood Forever.", price: "100$"}}/>
        </List>
    </Page>
}