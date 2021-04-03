import React, { useEffect } from "react";
import styles from "./UserEditPage.module.scss";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { database, storage } from "../firebase";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { getCountries, getCurrentUser } from "./service"


const initialUser = {
  fname: "",
  lname: "",
  email: "",
  gender: "",
  city: "",
  country: "",
  interests: "",
  favouriteBooks: "",
  userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/default-profile-big.png?alt=media&token=e1cc93c3-ccd2-4269-8fd3-156fb157dd5a",
  read: [],
  wantToRead: [],
  currentlyReading: [],
  favouritesUser: [],
  favouriteGenres: [],
};

export default function UserEditPage() {
  const [storageUser, setStorageUser] = useState(initialUser);
  const [file, setFile] = useState("");

  const user = useSelector((state) => state.user.user);

  const storageUserUpdate = (value, type) => {
    setStorageUser((prevUser) => ({ ...prevUser, [type]: value }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  });

  console.log(user);
  useEffect(() => {
    getCurrentUser(user.id)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setStorageUser((prevUser) => ({ ...prevUser, ...doc.data() }));
        });
      });
  }, [user.id]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    getCountries()
      .then((res) => {
        res.forEach((country) => {
          let datalist = document.getElementById("country");
          let option = document.createElement("option");
          option.value = country.name;
          option.innerHTML = country.name;
          datalist.append(option);
        });
      });
  }, []);

  const checkCountry = (ev) => {
    storageUserUpdate(ev.target.value, "country");
  };

  const upload = (ev) => {
    ev.preventDefault();
    const uploadTask = storage
      .ref()
      .child("images/" + storageUser.fname + Date.now())
      .put(file);

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
          storageUserUpdate(downloadURL, "userImg");
          database
            .collection("users")
            .doc(user.id)
            .set({ ...storageUser, userImg: downloadURL }, { merge: true })
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
          <Link to={"/user/" + user.id} className={styles.mediumTextLink}>
            View My Profile
          </Link>
        </div>
        Account Settings
      </h1>
      <div className={styles.userInfoBox}>
        <form className={styles.userData}>
          <div className={styles.flexContainer}>
            <div className={styles.leftBox}>
              <p className={styles.formInput}>
                <label className={styles.formLabel} for="user_first_name">
                  First Name <span className={styles.required}>*</span>
                </label>
                <br />
                <input
                  size="30"
                  maxLength="50"
                  className={styles.formClassInput}
                  type="text"
                  id="user_first_name"
                  value={storageUser.fname}
                  onInput={(ev) => storageUserUpdate(ev.target.value, "fname")}
                />
              </p>
              <p className={styles.formInput}>
                <label for="user_last_name" className={styles.formLabel}>
                  Last Name
                </label>
                <br />
                <input
                  size="30"
                  maxlength="50"
                  className={styles.formClassInput}
                  type="text"
                  id="user_last_name"
                  value={storageUser.lname}
                  onInput={(ev) => storageUserUpdate(ev.target.value, "lname")}
                />
              </p>
              <div id="gender_fields">
                <div id="gender_selector">
                  <label for="user_gender" className={styles.formLabel}>
                    Gender
                  </label>
                  <br />
                  <select
                    id="user_gender"
                    value={storageUser.gender}
                    onChange={(ev) =>
                      storageUserUpdate(ev.target.value, "gender")
                    }
                  >
                    <option value="--">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <p id="city" className={styles.formInput}>
                <label for="user_city" className={styles.formLabel}>
                  City
                </label>
                <br />
                <input
                  size="30"
                  className={styles.formClassInput}
                  type="text"
                  id="user_city"
                  value={storageUser.city}
                  onInput={(ev) => storageUserUpdate(ev.target.value, "city")}
                />
              </p>
              <p className={styles.formInput}>
                <label for="country" className={styles.formLabel}>
                  Country
                </label>
                <br />
                <select
                  id="country"
                  value={storageUser.country}
                  onChange={checkCountry}
                >
                  <option value="select">select</option>
                </select>
              </p>

              <p className={styles.formInput}>
                <label for="user_expert_tags" className={styles.formLabel}>
                  My Interests
                </label>{" "}
                — favorite subjects, or really anything you know a lot about{" "}
                <br />
                <span className="smallText">
                  <i>(in comma separated phrases, please)</i>
                </span>
                <br />
                <input
                  className={styles.formClassInputBig}
                  type="text"
                  id="user_expert_tags"
                  value={storageUser.interests}
                  onInput={(ev) =>
                    storageUserUpdate(ev.target.value, "interests")
                  }
                />
              </p>
              <p className={styles.formInput}>
                <label for="user_favorite_books" className={styles.formLabel}>
                  What Kind of Books Do You Like to Read?
                </label>
                <br />
                <textarea
                  rows="1"
                  className={styles.formClassInputBig}
                  id="user_favorite_books"
                  value={storageUser.favouriteBooks}
                  onInput={(ev) =>
                    storageUserUpdate(ev.target.value, "favouriteBooks")
                  }
                ></textarea>
              </p>
            </div>
            <div className={styles.rightBox}>
              <p className={styles.formInput}>
                {storageUser.userImg ? (
                  <img
                    src={storageUser.userImg}
                    alt="Your prifile"
                    value={storageUser.userImg}
                    className={styles.formInputImg}
                  />
                ) : (
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/default-profile-big.png?alt=media&token=e1cc93c3-ccd2-4269-8fd3-156fb157dd5a"
                    alt="default prifile"
                    value={storageUser.userImg}
                  />
                )}
              </p>

              <div {...getRootProps()} className={styles.dragActive}>
                <input {...getInputProps()} className={styles.dropInput} />
                {isDragActive ? (
                  <p className={styles.imgInput}>Drop the files here ...</p>
                ) : (
                  <p className={styles.imgInput}>Drop the files here, or click to select files</p>
                )}
              </div>
              <p className={styles.formInput}>
                <Link to="/user/destroy" className={styles.actionLinkNotice} >
                  Delete my account
                </Link>
              </p>
            </div>
          </div>
          <p>
            {" "}
            <input
              type="submit"
              name="commit"
              value="Save Profile Settings"
              className={styles.submitBtn}
              onClick={upload}
            />
          </p>
        </form>
      </div>
    </div>
  );
}
