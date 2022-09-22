import React from "react";
import Page from "../../UI/Page/Page";
import List from "../../UI/Layout/List";
import Icons from "../../../Util/Icons";
import Property from "../../UI/ListItems/Property";

export default ({}) => {
    return <Page title={"Имущество"}>
        <List>
            <Property dto={{src: Icons.tv, name: "Телевизор Самсунг", description: "Новая технология подсветки Quantum Matrix. Сверхточная цветопередача благодаря функции экспертной калибровки. Исключительная четкость в формате 4K 60 Гц", price: "6000$"}}/>
            <Property dto={{src: Icons.tv, name: "Телевизор Самсунг", description: "Новая технология подсветки Quantum Matrix. Сверхточная цветопередача благодаря функции экспертной калибровки. Исключительная четкость в формате 4K 60 Гц", price: "6000$"}}/>
            <Property dto={{src: Icons.tv, name: "Телевизор Самсунг", description: "Новая технология подсветки Quantum Matrix. Сверхточная цветопередача благодаря функции экспертной калибровки. Исключительная четкость в формате 4K 60 Гц", price: "6000$"}}/>
            <Property dto={{src: Icons.tv, name: "Телевизор Самсунг", description: "Новая технология подсветки Quantum Matrix. Сверхточная цветопередача благодаря функции экспертной калибровки. Исключительная четкость в формате 4K 60 Гц", price: "6000$"}}/>
            <Property dto={{src: Icons.tv, name: "Телевизор Самсунг", description: "Новая технология подсветки Quantum Matrix. Сверхточная цветопередача благодаря функции экспертной калибровки. Исключительная четкость в формате 4K 60 Гц", price: "6000$"}}/>
        </List>
    </Page>
}