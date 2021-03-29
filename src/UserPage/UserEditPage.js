import React, { useEffect } from "react";
import styles from './UserEditPage.module.scss';
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { database, storage } from "../firebase";
import firebase from "../firebase";
import { useDropzone } from "react-dropzone";

const getCountries = () => {
    return fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json());
}



export default function UserEditPage({ isLoggedIn, userName }) {

    const [image, setImage] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [interests, setInterests] = useState("");
    const [favouriteBooks, setFavouriteBooks] = useState("");
    const [userImage, setUserImage] = useState("");

    const user = firebase.auth().currentUser;
    console.log(user);

    const onDrop = useCallback((acceptedFiles) => {
        setImage(acceptedFiles[0]);
    });

    // useEffect(() => {
    //     // TODO:" Get current user:

    //     db.collection('users').where('userId', '==', user.uuid)
    // }, [])



    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


    useEffect(() => {
        getCountries()
            .then(res => {
                res.forEach(country => {
                    let datalist = document.getElementById('country');
                    let option = document.createElement('option');
                    option.value = country.name;
                    option.innerHTML = country.name;
                    datalist.append(option);
                });
            })
    }, [])

    const checkCountry = (ev) => {
        setCountry(ev.target.value);
    }



    const upload = (ev) => {
        ev.preventDefault();
        const uploadTask = storage
            .ref()
            .child("images/" + fname + Date.now())
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
                    setUserImage(downloadURL);
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
                            userImg: downloadURL,
                        }, { merge: true })
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
                            <div id="gender_fields">
                                <div id="gender_selector">
                                    <label for="user_gender" className={styles.formLabel}>Gender</label><br />
                                    <select id="user_gender" value={gender} onChange={(ev) => setGender(ev.target.value)}>
                                        <option value="--">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <p id="city" className={styles.formInput}>
                                <label for="user_city" className={styles.formLabel}>City</label><br />
                                <input size="30" className={styles.formClassInput} type="text" id="user_city" value={city} onInput={(ev) => setCity(ev.target.value)} />
                            </p>
                            <p className={styles.formInput}>
                                <label for="country" className={styles.formLabel}>Country</label><br />
                                <select id="country" value={country} onChange={checkCountry}>
                                    <option value="select">select</option>
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
                                {userImage? <img src={userImage} alt="Your prifile" value={image} className={styles.formInputImg}/>: (<img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/default-profile-big.png?alt=media&token=e1cc93c3-ccd2-4269-8fd3-156fb157dd5a" alt="default prifile" value={image} />)}
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