import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Mypayments = (props) => {
    const { payments } = props; 

    return (
        <Authenticated user={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12">
                <h1>My Payments</h1>
                <ul>
                    {payments.length > 0 ? (
                        payments.map(payment => (
                            <li key={payment.id}>
                                <h2>{payment.name}</h2>
                                <p>{payment.description}</p>
                            </li>
                        ))
                    ) : (
                        <li>No payments found.</li>
                    )}
                </ul>
                <div>
                    <Link href="/index">戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Mypayments;