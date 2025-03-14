import { useRouter } from 'next/router';

const UserDetail = ({ user }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1><strong>Name:</strong> {user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: { user },
        revalidate: 10, // Untuk ISR (Optional)
    };
}

export default UserDetail;
