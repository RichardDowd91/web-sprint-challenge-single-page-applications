import React from "react";
import { useHistory } from "react-router-dom";

export default function Homepage(){
    const history = useHistory()

    const routeArea = () => {
        history.push('/pizza')
    }

    return(
        <div className="homePg">
            <h1>Pizza Time BloomTech</h1>
            <img 
            className="pizzaImg"
            src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' 
            alt=''
            />
            <button
            onClick={routeArea}
            className="form-button"
            >
            Order Here
            </button>
        </div>
    )
}