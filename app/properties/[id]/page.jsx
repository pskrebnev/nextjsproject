'use client';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const PropertyPage = () => {
    const router = useRouter();
    console.log(router);
    const params = useParams();
    console.log(params);
    const searchParams = useSearchParams();
    console.log(searchParams);
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div>
            
            <button onClick={() => router.replace('/')}>Go to Home</button><br>
            </br>
            Property Page {params.id}, {searchParams.get('name')};
            <br />
            Pathname: {pathname};
        </div>
    );
};

export default PropertyPage;

