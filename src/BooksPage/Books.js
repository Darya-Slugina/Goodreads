import styles from './Books.module.css';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
// import Rating from "./Rating";


export default function Books() {
  const [value, setValue] = React.useState(2);

  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.mainContent}>
        <div className={styles.leftContainer}>
          <div className={styles.imgCol}>
            <img className={styles.coverImage} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569627765l/51239966._SX318_SY475_.jpg" alt="Book img" />
            <button className={styles.ratingButton}>Want to Read</button>
            <div className={styles.rating} id="rating">
              <div className={styles.ratingText}>Rate this book</div>
              <div className={styles.clearRating}>Clear rating</div>
              <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className={styles.mainInfoContainer}>
            <div className={styles.mainInfo}>
              <h1 id="bookTitle" className={styles.bookTitle}>
                You Never Forget Your First: A Biography of George Washington
            </h1>
              <div id="bookAuthor" className={styles.bookAuthor}>
                <span class="by">by&nbsp;</span>
                <span itemprop="name">Alexis Coe</span>
              </div>
            </div>
            <div className={styles.bookMeta}>
              <div className={styles.staticRatingStars}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </div>
              <span itemprop="ratingValue" className={styles.staticRating}> 3.78 </span>
              <div itemprop="ratingCount" className={styles.ratingCount} content="7613"> 7,613 ratings </div>
              <div itemprop="reviewCount" className={styles.reviewCount} content="1191"> 1,191 reviews </div>
            </div>
            <div id="description" class={styles.description}>
              <span >In a genre overdue for a shakeup, Alexis Coe takes a closer look at our first—and finds
              he's not quite the man we remember Young George Washington was raised by a struggling single mother,
              demanded military promotions, chased rich young women, caused an international incident, and never
              backed down—even when his dysentery got so bad he had to ride with a cushion on his sadd
              In a genre overdue for a shakeup, Alexis Coe takes a closer look at our first—and finds
              he's not quite the man we remember Young George Washington was raised by a struggling single mother,
              demanded military promotions, chased rich young women, caused an international incident, and never
              backed down—even when his dysentery got so bad he had to ride with a cushion on his saddle. But after he
              married Martha, everything changed. Washington became the kind of man who named his dog Sweetlips and
              hated to leave home. He took up arms against the British only when there was no other way, though he
              lost more battles than he won. Coe focuses on his activities off the battlefield—like espionage and propaganda.
              After an unlikely victory in the Revolutionary War, Washington once again shocked the world by giving up power,
              only to learn his compatriots wouldn't allow it. The founders pressured him into the presidency—twice.
              He established enduring norms but left office heartbroken over the partisan nightmare his backstabbing
              cabinet had created. Back on his plantation, the man who fought for liberty finally confronted his greatest
              hypocrisy—what to do with the hundreds of men, women, and children he owned—before succumbing to a brutal
            death.Alexis Coe combines rigorous research and unsentimental storytelling, finally separating the man from the legend.</span>
              {/* <a href="#">...more</a> */}
            </div>
            <div id="details" className={styles.moreDetails}>
              <div><span itemprop="bookFormat">Hardcover</span>, <span itemprop="numberOfPages">261 pages</span></div>
              <div>  Published February 4th 2020 by Viking </div>
            </div>
          </div>
        </div>
        <div className={styles.bigBox}>
          <div className={styles.h2Container}>
            <h2>
              See similar books
            </h2>
            <div className={styles.moreBooksContainer}>

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}