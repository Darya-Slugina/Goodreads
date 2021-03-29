import React from "react";
import './HomePageLoggedIn.css'
import Header from '../Headers/Header'
import MyBooks from "../MyBooks/MyBooks.js"

export default function HomePageLoggedIn() {
    return (
        <React.Fragment>
            <Header />
            <main className="main-container">
                <MyBooks />
            </main>
        </React.Fragment>
    )

}