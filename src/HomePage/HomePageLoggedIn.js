import React from "react";
import AllGenres from "../GenresPage/AllGenres";
import Header from "../Headers/Header"



export default function HomePageLoggedIn() {
    return (
        <React.Fragment>
            <Header />
            <AllGenres />
        </React.Fragment>
    )
}