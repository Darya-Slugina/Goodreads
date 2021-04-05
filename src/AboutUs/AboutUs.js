import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AboutUs.module.scss';
import Carousel1 from "./../img/carousel1.jpg"
import Carousel2 from "./../img/carousel2.jpg"
import Carousel3 from "./../img/carousel3.jpg"
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";



export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className={styles.mainContent}>
            <div className={styles.aboutPageTitle}>
                About Goodreads
            </div>
            <div className={styles.aboutLeftColumn}>
                <div className={styles.aboutFollowUs}>
                    FOLLOW US
                <ul className={styles.followUsList}>
                        <li>
                        <Link to={{ pathname: "https://www.facebook.com/Goodreads" }} target="_blank"><div className={styles.followUsFacebook}></div>/goodreads</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "https://twitter.com/goodreads"}} target="_blank"><div className={styles.followUsTwitter}></div>@goodreads</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "http://www.linkedin.com/company/goodreads.com"}} target="_blank"><div className={styles.followUsLinkedin}></div>
                        goodreads.com
                        </Link>
                        </li>
                        <li>
                            <Link to={{ pathname:"http://pinterest.com/goodreads/" }} target="_blank"><div className={styles.followUsPinterest}></div>/goodreads</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.carouselContainer}>
                <Carousel controls={true} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Carousel2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Carousel3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className={styles.copy}>
                    <div>
                        The right book in the right hands at the right time
                        can change the world.
                    </div>
                </div>
            </div>
            <div className={styles.aboutCenterColumn}>
                <section>
                    <h2 className={styles.subTitle}>Who We Are</h2>
                    <p className={styles.subText}>
                        Goodreads is the world’s largest site for readers and book
                        recommendations. Our mission is to help people find and share books they
                        love. Goodreads launched in January 2007.
                    </p>
                </section>
                <section>
                    <h2 className={styles.subTitle} >A Few Things You Can Do On Goodreads</h2>
                    <ul className={styles.goodreadsFeaturesList}>
                        <li className={styles.goodreadsFeaturesListRow}>
                            See what books your friends are reading.
                        </li>
                        <li className={styles.goodreadsFeaturesListRow}>
                            Track the books you're reading, have read, and want to read.
                        </li>
                        <li className={styles.goodreadsFeaturesListRow}>
                            Check out your personalized book recommendations. Our recommendation
                            engine analyzes 20 billion data points to give suggestions tailored to
                            your literary tastes.
                        </li>
                        <li className={styles.goodreadsFeaturesListRow}>
                            Find out if a book is a good fit for you from our community’s reviews.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className={styles.subTitle}>
                        A Message From Our Co-Founder
                    </h2>
                    <p className={styles.subText}>
                        When I was in second grade, I discovered the Hardy Boys series.
                        Ever since, I've loved to read — both for fun and to improve my mind.
                        And I'm always looking for the next great book.
                    </p>
                    <p className={styles.subText}>
                        One afternoon while I was scanning a friend's bookshelf for ideas, it
                        struck me: when I want to know what books to read, I'd rather turn to a
                        friend than any random person or bestseller list.
                    </p>
                    <p className={styles.subText}>
                        So I decided to build a website – a place where I could see my
                        friends' bookshelves and learn about what they thought of all their books.
                        Elizabeth, my co-founder (and now my wife) wrote the site copy and I wrote
                        the code. We started in my living room, motivated by the belief that there
                        was a better way to discover and discuss good books, and that we could
                        build it.
                    </p>
                    <p className={styles.subText}>
                        Goodreads is that site. It is a place where you can see what your friends
                        are reading and vice versa. You can create "bookshelves" to organize what
                        you've read (or want to read). You can comment on each other's reviews.
                        You can find your next favorite book. And on this journey with your
                        friends you can explore new territory, gather information, and expand
                        your mind.&nbsp;
                    </p>
                    <p className={styles.subText}>
                        Knowledge is power, and power is best shared among readers.&nbsp;
                    </p>
                    <section>
                        <div className={styles.otisSig}></div>
                    </section>
                    <section>
                        <div className={styles.signature}>
                            Otis Chandler
                        </div>
                        <div className={styles.signature}>
                            Co-Founder
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}