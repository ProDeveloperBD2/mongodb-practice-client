import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json)
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted success')
                }
                const remaining = users.filter(us => us._id !== _id);
                setUsers(remaining)
            })
    }
    return (
        <div>
            <h2>ALL USER SHOW</h2>
            {
                users.map(user => <div key={user._id}>
                    <p>{user?.name}</p>
                    <p>Email: {user?.email}</p>
                    <p>ID: {user?._id}</p>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Home;