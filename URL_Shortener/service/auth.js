const sessionidtoUserMap = new Map();

function setUser(id, user) {
    return sessionidtoUserMap.set(id, user);
}

function getUser(id) {
    return sessionidtoUserMap.get(id);
}

module.exports = { setUser, getUser };