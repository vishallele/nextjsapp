class UserRepositories {

    async addUser(userData) {
        console.log(userData);
        return userData;
    }
}

let User = new UserRepositories();

export default User;