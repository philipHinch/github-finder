import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";


const User = () => {

    const { getUser, user } = useContext(GithubContext)

    const params = useParams() //import this in order to use the username in url (also called login)

    useEffect(() => {
        getUser(params.login) //username in url (also called login)
    }, [])

    return (
        <div>
            {user.login}
        </div>
    );
}

export default User;