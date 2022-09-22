import React from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

export default function({title, children, alignItems = "flex-start"}) {
    return (
        <div style={{
            width: "100vw",
            height: "96vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: alignItems,
            gap: "5vh",

            marginTop: "2vh",
            marginBottom: "2vh"
        }}>
            <PageHeader title={title}/>
            <div style={{
                height: "90vh",
                width: "90vw",
                display: "flex",
                justifyContent: "center"
            }}>
                {children}
            </div>
            {/*<PageFooter/>*/}
        </div>
    );
}