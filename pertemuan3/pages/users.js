import React from 'react';

const User = ({ post }) => {
    return (
        <div>
            <h1>User Saya</h1>
            <hr />
            {post.map((user) => (
                <div key={user.id}>
                    <h2><strong>Name:</strong> {user.name}</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p>
                        <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                    </p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

export default User;