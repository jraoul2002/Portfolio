'use strict';
import { User } from "./User.js"

export async function appHandler() {

    fetch('https://api.github.com/users/jraoul2002')
        .then(res => res.json())
        .then(payload => {

            const user = new User(payload);
            user.populate();

            console.log(`login: ${user.login} repos: ${user.repos_url}`);

        })
        .catch(err => console.error(err))

}