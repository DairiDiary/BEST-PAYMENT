import React, { useState } from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Inertia } from '@inertiajs/inertia';

const Index = (props) => {
    const { payments, registered, message } = props;

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const openDialog = (payment) => {
        setSelectedPayment(payment);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setSelectedPayment(null);
    };

    const confirmRegistration = () => {
        if (!selectedPayment) return;

        Inertia.post(`/index/${selectedPayment.id}`, {}, {
            
            onSuccess: () => {
            },
            onError: (errors) => {
                console.error("登録エラー:", errors);
            }
        });
    };

    return (
        <Authenticated 
            auth={props.auth} 
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Index</h2>
            }
        >
            <div className="p-8">
                <h1 className="text-3xl font-semibold text-center mb-6">Payments</h1>
                {message && (
                    <div className="mb-4 text-green-500 text-center">
                        {message}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {payments.length > 0 ? (
                        payments.map(payment => (
                            <div key={payment.id} className="border p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-medium">{payment.name}</h2>
                                <p className="text-gray-600">{payment.description}</p>
                                <Button
                                    variant="contained"
                                    color={ registered.includes(payment.id) ? "success" : "primary" }
                                    className="mt-4"
                                    onClick={() => openDialog(payment)}
                                    disabled={registered.includes(payment.id)}
                                >
                                    { registered.includes(payment.id) ? "登録済み" : "登録" }
                                </Button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No payments found.</p>
                    )}
                </div>
            </div>

            {/* 登録確認用ポップアップ */}
            <Dialog open={dialogOpen} onClose={closeDialog}>
                <DialogTitle>登録確認</DialogTitle>
                <DialogContent>
                    {selectedPayment && (
                        <p>{selectedPayment.name} を Mypayment に登録しますか？</p>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="secondary">
                        キャンセル
                    </Button>
                    <Button onClick={confirmRegistration} color="primary">
                        登録
                    </Button>
                </DialogActions>
            </Dialog>
        </Authenticated>
    );
};

export default Index;
