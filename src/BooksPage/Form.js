import Button from "./../common/Button";
import React from 'react';
import styles from "./Form.module.css"

const Form = () => {
    return (
        <form className={styles.formContainer}>
            <textarea rows="6" cols="70"/>
            <Button value={"Publish your review"} />
        </form>
    )
};

export default Form;