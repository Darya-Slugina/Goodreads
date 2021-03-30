import { database } from "../firebase";

// Requests

export const getUser = (id) => {
    return database.collection("users").where("id", "==", id).get();
}

export const setUser = (id, fname, email) => {
    database
        .collection("users")
        .doc(id)
        .set({
            id: id,
            fname: fname,
            email: email,
        })
}

