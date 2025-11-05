"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import CreateEntityAdminPage from '../CreateEntityAdminPage';

export default function CreateEntityAdminContainer() {
    const router = useRouter();
    const params = useParams();
    const { user } = useSelector((state) => state.auth);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(0,122,100)]"></div>
            </div>
        );
    }

    return <CreateEntityAdminPage tenantId={user?.tenantId} />;
}
