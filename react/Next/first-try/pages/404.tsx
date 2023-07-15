import React from 'react';
import Layout from "@/components/Layout";
import Link from "next/link";

export default function PageNotFound() {
    return (
        <Layout>
            Page didtnt find. <Link href={'/'}>Go back</Link>
        </Layout>
    );
};
