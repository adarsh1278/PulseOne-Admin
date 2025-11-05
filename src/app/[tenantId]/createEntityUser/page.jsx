"use client";
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import CreateEntityAdminPage from '@/app/hopitalList/CreateEntityAdminPage';

export default function CreateEntityUserPage() {
    const params = useParams();
    const { user } = useSelector((state) => state.auth);
    const tenantId = params?.tenantId || user?.tenantId;

    return <CreateEntityAdminPage tenantId={tenantId} />;
}
