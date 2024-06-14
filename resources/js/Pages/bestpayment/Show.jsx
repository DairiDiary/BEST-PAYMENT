import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Show = (props) => {
    const { payment } = props;

    const handleSendPayments = (e) => {
        e.preventDefault();
        Inertia.post(`/index/${payment.id}`);
    };

    return (
        <form onSubmit={handleSendPayments}>
            <h1>{payment.name}</h1>
            <h2>Mypaymentに登録しますか</h2>
            <input
                type="hidden"
                name="id"
                value={payment.id}
            />
            <button type="submit">登録</button>
        </form>
    );
};

export default Show;