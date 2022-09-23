import axios from "axios";
import Links from "./Links";

export default function() {
    axios.get(Links.getContent)
        .then(rs => window.localStorage.setItem("content", JSON.stringify(rs.data)))
}