"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

export function CheckAuth() {

    const router = useRouter();
    const path = usePathname()

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);



    useEffect(() => {
        console.log(path);
        // Wait for token to be loaded
        const token = localStorage.getItem('token');

        if (!token && path != '/login') {
            toast.error("Please login to continue");
            router.push('/login');
        }
        // if (!auth.loading && !auth.isAuthenticated) {
        //     //check for refresh token here
        //     router.push('/login');
        // }
    }, [auth])
    return <>
    </>


}