import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Button, TextField, Checkbox, FormControlLabel, Typography, Switch, Card, CardContent } from '@mui/material';
import { useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { lightTheme, darkTheme } from '@/Themes/theme';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Best = (props) => {
    const { payments, keyword, onlymypayment } = usePage().props;
    const { data, setData, post } = useForm({
        searchQuery: keyword || '',
        onlymypayment: onlymypayment || false,
    });

    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const handleSearch = (e) => {
        e.preventDefault();
        post('/best');
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Authenticated auth={props.auth}>
                {/* ダークモード切り替えスイッチ */}
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
                        label={<span style={{ color: darkMode ? '#fff' : '#000' }}> {darkMode ? "D" : "L"} </span>}
                    />
                </div>

                <div className="p-8 min-h-screen flex flex-col items-center" style={{ backgroundColor: darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default }}>
                    <Typography variant="h4" className="font-bold text-center mb-8" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
                        お得な支払い方法を探す
                    </Typography>

                    <div className="max-w-xl w-full shadow-md rounded-lg p-6 mb-10" style={{ backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper }}>
                        <form onSubmit={handleSearch}>
                            <TextField
                                label="店名を入力してください"
                                variant="outlined"
                                fullWidth
                                value={data.searchQuery}
                                onChange={(e) => setData('searchQuery', e.target.value)}
                                sx={{
                                    backgroundColor: darkMode ? darkTheme.palette.background.default : '#fff',
                                    color: darkMode ? darkTheme.palette.text.primary : '#000',
                                    '& .MuiInputLabel-root': { color: darkMode ? darkTheme.palette.text.primary : '#333' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#ccc' },
                                        '&:hover fieldset': { borderColor: '#888' },
                                    }
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={data.onlymypayment}
                                        onChange={(e) => setData('onlymypayment', e.target.checked)}
                                    />
                                }
                                label={<span style={{ color: darkMode ? darkTheme.palette.text.primary : '#000' }}>登録済み</span>}
                            />
                            <Button variant="contained" type="submit" className="w-full mt-4">
                                検索
                            </Button>
                        </form>
                    </div>

                    <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {payments.length > 0 ? (
                            payments.map(payment => (
                                <Card key={payment.id} className="shadow-md" style={{ backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper }}>
                                    {payment.image_path && (
                                        <img src={payment.image_path} alt={payment.name} className="h-32 w-full object-cover" />
                                    )}
                                    <CardContent className="text-center">
                                        <Typography variant="h6" className="font-bold" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
                                            {payment.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <Typography className="text-center text-gray-600">見つかりませんでした。</Typography>
                        )}
                    </div>
                </div>
            </Authenticated>
        </ThemeProvider>
    );
};

export default Best;
