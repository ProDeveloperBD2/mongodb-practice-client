

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('success')
                }
                form.reset();
            })
    }
    return (
        <div>
            <h2>add user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="name" placeholder="Name" required />
                <br />
                <input type="email" name="email" id="email" placeholder="Email" required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;