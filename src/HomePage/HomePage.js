import "./HomePage.css"
import React from "react"
import GuestUserHeader from '../Headers/GuestUserHeader'

export default function HomePage() {
    return (
        <React.Fragment>
            <GuestUserHeader />
            <main>
                <div className="main-container">
                    <div className="text-box-wrapper">
                        <div className="text-box" style={{ marginRight: "40px" }}>
                            <h2>Deciding what to read next?</h2>
                            <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                        </div>
                        <div className="text-box">
                            <h2>What are your friends reading?</h2>
                            <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
                        </div>
                    </div>
                    <div className="discovery-box"></div>
                    <div id="browseBox">
                        <h2>Search and browse books</h2>
                        <input type="text" placeholder="Title / Author" />
                    </div>
                </div>
            </main>
        </React.Fragment>
    )

}