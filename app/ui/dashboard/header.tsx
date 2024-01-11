import Link from 'next/link';

export default function Header(){
    // add stuff to this
    return (
        <div>
            {/* make this actually good */}
            <h1>HEADER PLACEHOLDER</h1>
            <Link href="/">Homepage</Link>
            <Link href="/dashboard">Dashboard</Link>
            Add new entry
        </div>
    );
}