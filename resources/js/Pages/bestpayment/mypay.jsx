import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';
import Button from '@mui/material/Button';

const Mypayments = (props) => {
    const { payments } = props;

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                My Payments
            </h2>
        }>
            <div className="p-8">
                <h1 className="text-3xl font-semibold text-center mb-6">My Payments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {payments.length > 0 ? (
                        payments.map(payment => (
                            <div key={payment.id} className="border p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-medium">{payment.name}</h2>
                                <p className="text-gray-600">{payment.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No payments found.</p>
                    )}
                </div>
                <div className="mt-6 text-center">
                    <Link href="/index">
                        <Button variant="contained" color="secondary">戻る</Button>
                    </Link>
                </div>
            </div>
        </Authenticated>
    );
};

export default Mypayments;
