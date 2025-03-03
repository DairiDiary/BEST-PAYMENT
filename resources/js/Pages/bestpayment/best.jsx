import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Button, TextField, Checkbox, FormControlLabel, Typography, Switch, Card, CardContent } from '@mui/material';
import { useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { lightTheme, darkTheme } from '@/Themes/theme';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Best = (props) => {
    const { payments, keyword, onlymypayment } = usePage().props;
    const { data, setData, post } = useForm({
        searchQuery: keyword || '',
        onlymypayment: onlymypayment || false,
    });
    const [hasSearched, setHasSearched] = useState(false);

    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const handleSearch = (e) => {
        e.preventDefault();
        setHasSearched(true);
        post('/best');
    };

    const getBadgeStyle = (index) => {
        if (index === 0) {
            return { background: 'linear-gradient(45deg, #FFD700, #FFC107)' }; // ゴールド系
        } else if (index === 1) {
            return { background: 'linear-gradient(45deg, #C0C0C0, #B0BEC5)' }; // シルバー系
        } else if (index === 2) {
            return { background: 'linear-gradient(45deg, #CD7F32, #D2B48C)' }; // ブロンズ系
        } else {
            return { background: 'gray' };
        }
    };

    const getRankTitle = (index) => {
        if (index === 0) {
            return '';
        } else if (index === 1) {
            return '';
        } else if (index === 2) {
            return '';
        } else {
            return '';
        }
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Authenticated auth={props.auth}>

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

                    {hasSearched && data.searchQuery.trim() !== "" && (
                        <div className="max-w-5xl w-full flex flex-col gap-6">
                            {payments.length > 0 ? (
                                payments.map((payment, index) => (
                                    <Card 
                                        key={payment.id} 
                                        className="shadow-md"
                                        style={{ 
                                            backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper,
                                            maxWidth: '400px',
                                            width: '100%',
                                            margin: '0 auto'
                                        }}
                                    >
                                        <CardContent>
                                            
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                                <div 
                                                    style={{
                                                        ...getBadgeStyle(index),
                                                        borderRadius: '50%',
                                                        width: '60px',
                                                        height: '60px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
                                                    }}
                                                >
                                                    <Typography variant="h5" style={{ color: '#fff', fontWeight: 'bold' }}>
                                                        {index + 1}
                                                    </Typography>
                                                </div>
                                                <div style={{ marginLeft: '16px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold', color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
                                                        {getRankTitle(index)}
                                                    </Typography>
                                                </div>
                                            </div>
                                            {payment.image_path && (
                                                <img src={payment.image_path} alt={payment.name} className="h-32 w-full object-contain mb-2" />
                                            )}
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
                    )}
                </div>
            </Authenticated>
        </ThemeProvider>
    );
};

export default Best;
