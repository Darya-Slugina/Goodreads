import { database } from "../firebase";

export const getCountries = () => {
    return fetch("https://restcountries.eu/rest/v2/all").then((res) =>
        res.json()
    );
};

export const getCurrentUser = (id) => {
    return database.collection("users").where("id", "==", id).get()
}

export const getReviewsByUser = (id) => {
    return database.collection("reviewsList").where("userId", "==", id).get()
}

export const setNewFriendRequest = (userFromId, userFromName, userToId, userToName) => {
    return database.collection("friendsRequests").doc().set({
        requestFromId: userFromId,
        requestFromUser: userFromName,
        requestToId: userToId,
        requestToUser: userToName,
        status: "sent",
        id: Date.now(),
    })
}