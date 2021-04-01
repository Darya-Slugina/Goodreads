import React from "react";
import MyBooks from "../MyBooks/MyBooks.js"
import Header from "../Headers/Header"



export default function HomePageLoggedIn() {
    return (
        <React.Fragment>
            <Header />
            <MyBooks />
        </React.Fragment>
    )
}