import React from "react";
import './HomePageLoggedIn.css'
import MyBooks from "../MyBooks/MyBooks.js"


export default function HomePageLoggedIn() {
    return (
        <React.Fragment>
            <main className="main-container">
                <MyBooks />
            </main>
        </React.Fragment>
    )

}