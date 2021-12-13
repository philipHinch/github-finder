import { createContext, useState } from "react";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        //guthub url and token are stored in .env file
        const response = await fetch(`${ GITHUB_URL }/users`, {
            headers: {
                Authorization: `token ${ GITHUB_TOKEN }`,
            },
        })
        const data = await response.json()
        //set data to state and set loading to false
        setUsers(data)
        setLoading(false)
    }

    return (
        <GithubContext.Provider value={{
            users,
            loading,
            fetchUsers
        }}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext;