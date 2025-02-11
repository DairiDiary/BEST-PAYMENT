import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Show = (props) => {
    const { payment } = props;
    const [open, setOpen] = useState(false);

    const handleSendPayments = (e) => {
        e.preventDefault();
        Inertia.post(`/index/${payment.id}`);
        setOpen(false); // ダイアログを閉じる
    };

    const handleClickOpen = () => {
        setOpen(true); // ダイアログを開く
    };

    const handleClose = () => {
        setOpen(false); // ダイアログを閉じる
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h1 className="text-3xl font-semibold mb-4 text-center">{payment.name}</h1>
                <h2 className="text-xl text-gray-600 mb-4 text-center">Mypaymentに登録しますか？</h2>
                <div className="flex justify-center">
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        登録
                    </Button>
                </div>
            </div>

            {/* モーダル（ポップアップ） */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>登録確認</DialogTitle>
                <DialogContent>
                    <p>{payment.name} をMypaymentに登録しますか？</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        キャンセル
                    </Button>
                    <Button onClick={handleSendPayments} color="primary">
                        登録
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Show;
