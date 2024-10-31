import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl">Wellcome to Property Pulse</h1>
            <Link href="/properties">Go to Properties</Link>
            {/* <Link
                href={{
                    pathname: 'properties',
                    query: {
                        name: 'TEST'
                    },
                }}
            >Add Property</Link> */}
        </div>
    );
};

export default HomePage;

