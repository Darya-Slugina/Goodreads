import React from "react";
import styles from './UserEditPage.module.scss';
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { database, storage } from "../firebase";
import firebase from "../firebase";
import { useDropzone } from "react-dropzone";




export default function UserEditPage({ isLoggedIn, userName }) {

    const [image, setImage] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [interests, setInterests] = useState("");
    const [favouriteBooks, setFavouriteBooks] = useState("");

    const user = firebase.auth().currentUser;

    const onDrop = useCallback((acceptedFiles) => {
        setImage(acceptedFiles[0]);
      }, []);
      const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const upload = (ev) => {
        ev.preventDefault();
        const uploadTask = storage
            .ref()
            .child("images/" + Date.now())
            .put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
            },
            (error) => { },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log("File available at", downloadURL);

                    database
                        .collection("users")
                        .doc(user.uid)
                        .set({
                            fname: fname,
                            lname: lname,
                            gender: gender,
                            city: city,
                            country: country,
                            interests: interests,
                            favouriteBooks: favouriteBooks,
                            image: downloadURL,
                        })
                        .then(() => {
                            console.log("Document successfully written!");
                        })
                        .catch((error) => {
                            console.error("Error writing document: ", error);
                        });
                });
            }
        );
    };

    return (
        <div className={styles.mainContent}>
            <h1 className={styles.h1Title}>
                <div className={styles.mediumText}>
                    <Link to={"/user/userName"} className={styles.mediumTextLink}>View My Profile</Link>
                </div>
                 Account Settings
            </h1>
            <div className={styles.userInfoBox}>
                <form className={styles.userData}>
                    <div className={styles.flexContainer}>
                        <div className={styles.leftBox}>
                            <p className={styles.formInput}>
                                <label className={styles.formLabel} for="user_first_name">First Name <span className={styles.required}>*</span>
                                </label>
                                <br />
                                <input size="30" maxLength="50" className={styles.formClassInput} type="text" id="user_first_name" value={fname} onInput={(ev) => setFname(ev.target.value)} />
                            </p>
                            <p className={styles.formInput}>
                                <label for="user_last_name" className={styles.formLabel}>Last Name</label>
                                <br />
                                <input size="30" maxlength="50" className={styles.formClassInput} type="text" id="user_last_name" value={lname} onInput={(ev) => setLname(ev.target.value)} />
                            </p>
                            {/* <p className={styles.formInput}>
                            <label for="user_user_name" className={styles.formLabel}>User Name</label>
                            <span class="greyText smallText">(customize your URL — goodreads.com/user_name)</span>
                            <br />
                            <input className={styles.formClassInput} autocomplete="off" size="30" type="text" name="user[user_name]" id="user_user_name" />
                        </p> */}

                            <div id="gender_fields">
                                <div id="gender_selector">
                                    <label for="user_gender" className={styles.formLabel}>Gender</label><br />
                                    <select id="user_gender" value={gender} onSelect={(ev) => setGender(ev.target.value)}>
                                        <option value="--">Select</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </div>
                            </div>
                            <p id="city" className={styles.formInput}>
                                <label for="user_city" className={styles.formLabel}>City</label><br />
                                <input size="30" className={styles.formClassInput} type="text" id="user_city" value={city} onInput={(ev) => setCity(ev.target.value)} />
                            </p>
                            <p className={styles.formInput}>
                                <label for="user_country_code" className={styles.formLabel}>Country</label><br />
                                <select onchange="checkCountry();" name="user[country_code]" id="user_country_code" value={country} onSelect={(ev) => setCountry(ev.target.value)}>
                                    <option selected="selected" value="--">Select</option>
                                    <option value="US">United States</option>
                                </select>
                            </p>

                            <p className={styles.formInput}>
                                <label for="user_expert_tags" className={styles.formLabel}>My Interests</label> — favorite subjects, or really anything you know a lot about <br />
                                <span class="smallText"><i>(in comma separated phrases, please)</i></span><br />
                                <input className={styles.formClassInputBig} type="text" id="user_expert_tags" value={interests} onInput={(ev) => setInterests(ev.target.value)} />
                            </p>
                            <p className={styles.formInput}>
                                <label for="user_favorite_books" className={styles.formLabel}>What Kind of Books Do You Like to Read?</label><br />
                                <textarea rows="1" className={styles.formClassInputBig} id="user_favorite_books" value={favouriteBooks} onInput={(ev) => setFavouriteBooks(ev.target.value)}></textarea>
                            </p>
                        </div>
                        <div className={styles.rightBox}>
                            <p className={styles.formInput}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/default-profile-big.png?alt=media&token=e1cc93c3-ccd2-4269-8fd3-156fb157dd5a" alt="default prifile" value={image} />
                                <br />
                                {/* <input size="25" type="file" id="user_photo" onInput={(ev) => setImage(ev.target.value)} />
                                <br />
                                <input type="submit" name="commit" value="Upload Photo" className={styles.smallButton} /><br /> */}
                            </p>

                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p>Drop the files here ...</p>
                                ) : (
                                    <p>Drop the files here, or click to select files</p>
                                )}
                            </div>
                            <p className={styles.formInput}>
                                <a className={styles.actionLinkNotice} href="/user/destroy">Delete my account</a>
                            </p>
                        </div>
                    </div>
                    <p> <input type="submit" name="commit" value="Save Profile Settings" className={styles.submitBtn} onClick={upload} /></p>
                </form>
            </div>
        </div>
    )
}