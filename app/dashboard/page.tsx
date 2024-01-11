import Header from '@/app/ui/dashboard/header';

// this stuff will all have to be so reformatted

export default function Page(){
    return (
    <main>
        <Header />
        <div>
            {/* change this into a component */}
            <h2>Progress Bar:</h2>
            <p>
                {/* change this info stuff into??? a component??? also make all this dynamic */}
                Info placeholder:
            </p>
            <h3>Past Entries: </h3>
            <p>Table placeholder:</p>
            <button>Sign Out</button>
        </div>
    </main>
    );
}