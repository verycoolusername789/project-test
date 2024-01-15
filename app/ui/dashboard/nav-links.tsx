import Link from 'next/link';

export default function NavLinks(){
    // add stuff to this
    return (
        <div>
            {/* make this actually good */}
            <Link href="/">Homepage</Link>
            <Link href="/dashboard">Dashboard</Link>
            {/* this will likely have to be changed */}
            <Link href="/entry">Add new entry</Link>
        </div>
    );
}