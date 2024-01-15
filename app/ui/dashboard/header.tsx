import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from 'next/image';

export default function Header(){
    // add stuff to this
    return (
        <div>
            {/* make this actually good */}
            <Image
                src="/WCSS-Co-op-Management.png"
                width={600}
                height={235}
                alt="Image of the WCCS Co-op Management Logo"
            />
            <NavLinks />
        </div>
    );
}