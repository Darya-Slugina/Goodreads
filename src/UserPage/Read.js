// import styles from './CurrentlyReading.module.scss'
// import React, { useState } from "react";
// import { TiThLarge } from "react-icons/ti";
// import { TiThMenu } from "react-icons/ti";
// import Book from "../GenresPage/BookImg";


// export default function ReadBooks({ books }) {

//     const [displayComment, setDisplayComment] = useState(false);
//     const [isGridView, setIsGridView] = useState(true);

//     const toggleView = (e) => {
//         e.target.classList.add("active");
//         setIsGridView(!isGridView);
//     };

//     const displayOnScreen = () => {
//         setDisplayComment(!displayComment);
//     }

//     return (
//         <div className={styles.mainBooksBox}>
//             <div className={styles.screenControls}>
//                 {isGridView ? (
//                     <TiThLarge className={styles.icons} onClick={toggleView} />
//                 ) : (
//                     <TiThMenu className={styles.icons} onClick={toggleView} />
//                 )}
//             </div>
//             {!books ? <div className={styles.noBooksInfo}> No Currenrtly reading books </div> :
//                 <div>
//                     {isGridView ? (
//                         <table className={styles.table}>
//                             <thead>
//                                 <tr className={styles.header}>
//                                     <th alt="cover" className={styles.cover}>
//                                         <a href="/review/list/4685500-angela-m?order=d&amp;sort=cover&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>cover</a>
//                                     </th>
//                                     <th alt="title" className={styles.title}>
//                                         <a href="/review/list/4685500-angela-m?order=d&amp;sort=title&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>title</a>
//                                     </th>
//                                     <th alt="author" className={styles.author}>
//                                         <a href="/review/list/4685500-angela-m?order=d&amp;sort=author&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>author</a>
//                                     </th>
//                                     <th alt="avg_rating" className={styles.rating}>
//                                         <a href="/review/list/4685500-angela-m?order=d&amp;sort=avg_rating&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>avg rating</a>
//                                     </th>
//                                     <th alt="review" className={styles.review}>
//                                     <a href="/review/list/4685500-angela-m?order=d&amp;sort=review&amp;utf8=%E2%9C%93&amp;view=table" className={styles.link}>review</a>
//                                 </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                     {books.map((book) => (
//                                         <tr className={styles.body} key={book.id}>
//                                             <td className={styles.coverInfo}>
//                                                 <a href="book/{genre}/id">
//                                                     <img className={styles.bookImg} alt={book.title} src={book.img} />
//                                                 </a>
//                                             </td>
//                                             <td className={styles.titleInfo}>
//                                                 <a title={book.title} href="/book/show/8881004-the-coming-and-going-of-strangers" className={styles.link}>
//                                                     {book.title}
//                                                 </a>
//                                             </td>
//                                             <td className={styles.authorInfo}>
//                                                 <div className="value">
//                                                     <a href="/author/show/295297.Simon_Van_Booy" className={styles.link}>{book.author}</a>
//                                                 </div>
//                                             </td>
//                                             <td className={styles.ratingInfo}>
//                                                 <div className={styles.value}> {book.rating} </div>
//                                             </td>
//                                             <td className={styles.reviewInfo}>
//                                             <div>
//                                                 <React.Fragment>
//                                                     <span className={styles.description}>{book.review}</span>
//                                                     {displayComment ?
//                                                         <React.Fragment>
//                                                             <span className={styles.descriptionHidden}>{book.hiddenReview}</span>
//                                                             <span className={styles.link} onClick={displayOnScreen}>...less</span>
//                                                         </React.Fragment>
//                                                         : <span className={styles.link} onClick={displayOnScreen}>...more</span>}
//                                                 </React.Fragment>
//                                             </div>
//                                         </td>
//                                         </tr>
//                                     ))}
//                             </tbody>
//                         </table>

//                     ) : (
//                         <div className={styles.bookImgContainer}>
//                             {books.map((book) => (
//                                 <Book key={book.id} {...book} />
//                             ))}</div>
//                     )
//                     }
//                 </div>
//             }
//         </div>
//     )
// }