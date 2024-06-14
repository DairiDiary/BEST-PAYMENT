import React, { useState } from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Button from '@mui/material/Button';
import { useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';


const Best = (props) => {
    const { payments, keyword, onlymypayment } = usePage().props;
    const { data, setData, post } = useForm({
        searchQuery: keyword || '',
        
        onlymypayment: onlymypayment|| false,
    });
    console.log(props,payments);

    const handleSearch = (e) => {
        e.preventDefault();
        post('/best');
    };

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Index
            </h2>
        }>
            <div>
                <h1>BESTPAYMENT</h1>
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        value={data.searchQuery} 
                        onChange={(e) => setData('searchQuery', e.target.value)} 
                        placeholder="店名を入力してください"
                    />
                    
                    <label>
                        <input
                            type="checkbox"
                            checked={data.onlymypayment}
                            onChange={(e) => setData('onlymypayment', e.target.checked)}
                        />
                        登録済み
                    </label>
                    
                    <Button type="submit">検索</Button>
                </form>
                <ul>
                    {payments.length > 0 ? (
                        payments.map(payment => (
                            <li key={payment.id}>{payment.name}</li>
                        ))
                    ) : (
                        <li>そのような店は見つかりません。</li>
                    )}
                </ul>
            </div>
        </Authenticated>
    );
}

export default Best;
