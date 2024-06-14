import * as React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Button from '@mui/material/Button';
import { Link } from '@inertiajs/react';

const Index = (props) => {
    const { payments } = props;
    console.log(payments);
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12">
                <h1>PAYMENT</h1>
                { payments.map((payment) => (
                    <div key={payment.id}>
                        <h2>
                            <Link href={`/index/${payment.id}`}>{ payment.name }</Link>
                        </h2>
                    </div>
                )) }
            </div>
            <Button variant="contained">検索</Button>
            
        </Authenticated>
        
        );
}

export default Index;