import React, {useState} from "react";
import Page from "../UI/Page/Page";
import {useDispatch, useSelector} from "react-redux";
import Button from "../UI/UIComponents/Button";
import {inc, dec} from "../../redux/CounterSlice"
import {useNavigate} from "react-router-dom";

export default () => {

    // const count = useSelector(state => state.counter.value)
    // const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const countSelector = useSelector(state => state.counter.value)
    const navigate = useNavigate()

    return <Page>
        <h1>profile {countSelector}</h1>
        {/*<Button text={"inc"} onClick={() => dispatch(inc())}/>*/}
        {/*<Button text={"dec"} onClick={() => dispatch(dec())}/>*/}
    </Page>
}