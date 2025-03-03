import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Button, Switch, FormControlLabel, Typography, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from '@inertiajs/inertia';
import { lightTheme, darkTheme } from '@/Themes/theme';

const Index = ({ auth, payments, registered, message }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

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
            onSuccess: () => {},
            onError: (errors) => {
                console.error("登録エラー:", errors);
            }
        });
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Authenticated auth={auth}>


                <div style={{ position: 'absolute', top: 10, right: 60 }}>
                    <FormControlLabel
                        control={
                            <Switch 
                                checked={darkMode} 
                                onChange={() => setDarkMode(!darkMode)}
                                name="themeSwitch"
                                color="primary"
                            />
                        }
                        label={<span style={{ color: '#000' }}> {darkMode ? "D" : "L"} </span>}
                    />
                </div>

                <div className="py-12 min-h-screen flex flex-col items-center justify-start" style={{ backgroundColor: darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default }}>
                    <div className="max-w-3xl w-full shadow-md rounded-lg p-8 text-center mb-10" style={{ backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper }}>
                        <Typography variant="h4" className="font-bold mb-4" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
                            利用可能な決済方法一覧
                        </Typography>
                        {message && (
                            <Typography className="mb-6 text-green-500 text-center">{message}</Typography>
                        )}
                    </div>
                    <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {payments.length > 0 ? (
                            payments.map(payment => (
                                <Card key={payment.id} className="shadow-md" style={{ backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper }}>
                                    {payment.image_path && (
                                        <img src={payment.image_path} alt={payment.name} className="h-32 w-full object-contain" />
                                    )}
                                    <CardContent className="text-center">
                                        <Typography variant="h6" className="font-bold" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
                                            {payment.name}
                                        </Typography>
                                        {payment.description && (
                                            <Typography className="text-gray-600 text-center mb-4">{payment.description}</Typography>
                                        )}
                                        <Button
                                            variant="contained"
                                            color={registered.includes(payment.id) ? "success" : "primary"}
                                            onClick={() => openDialog(payment)}
                                            disabled={registered.includes(payment.id)}
                                            className="w-full mt-2"
                                        >
                                            {registered.includes(payment.id) ? "登録済み" : "登録"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <Typography className="text-center text-gray-600">No payments found.</Typography>
                        )}
                    </div>
                </div>
                <Dialog open={dialogOpen} onClose={closeDialog}>
                    <DialogTitle>登録確認</DialogTitle>
                    <DialogContent>
                        {selectedPayment && (
                            <Typography>{selectedPayment.name} を Mypayment に登録しますか？</Typography>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog} color="secondary">キャンセル</Button>
                        <Button onClick={confirmRegistration} color="primary">登録</Button>
                    </DialogActions>
                </Dialog>
            </Authenticated>
        </ThemeProvider>
    );
};

export default Index;
