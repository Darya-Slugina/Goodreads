import React from "react";
import MyBooksPage from "../MyBooksPage/MyBooksPage.js"
import Header from "../Headers/Header"



export default function HomePageLoggedIn() {
    return (
        <React.Fragment>
            <Header />
            <MyBooksPage />
        </React.Fragment>
    )
}