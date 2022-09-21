import React from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

export default function({title, children}) {
    return (
        <div style={{
            width: "100vw",
            height: "96vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "5vh",

            marginTop: "2vh",
            marginBottom: "2vh"
        }}>
            <PageHeader title={title}/>
            <div style={{height: "90vh"}}>
                {children}
            </div>
            {/*<PageFooter/>*/}
        </div>
    );
}