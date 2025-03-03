import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Button, Typography, Card, CardContent, FormControlLabel, Switch } from '@mui/material';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { lightTheme, darkTheme } from '@/Themes/theme';

export default function Dashboard({ auth, errors, payments = [], registered = [] }) {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const registeredPayments = payments.filter(payment => registered.includes(payment.id));

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AuthenticatedLayout auth={auth} errors={errors}>
        <Head title="Dashboard" />
        
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
        
        <div
          className="py-12 min-h-screen flex flex-col items-center justify-start"
          style={{ backgroundColor: darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default }}
        >
          <div
            className="max-w-3xl w-full shadow-md rounded-lg p-8 text-center mb-10"
            style={{ backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper }}
          >
            <h1 className="text-3xl font-bold mb-4" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
              ようこそ！
            </h1>
            <p className="mb-6" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
              このページでは、登録済みの決済方法を確認できます。
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="contained" color="primary" onClick={() => (window.location.href = '/index')}>
                自分の支払い方法を登録する
              </Button>
              <Button variant="contained" color="secondary" onClick={() => (window.location.href = '/best')}>
                お得な支払い方法を検索する
              </Button>
            </div>
          </div>

          <div className="max-w-5xl w-full">
            <Typography variant="h5" className="font-semibold mb-4 text-center" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
              登録済みの決済方法一覧
            </Typography>

            {registeredPayments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {registeredPayments.map(payment => (
                  <Card key={payment.id} className="shadow-md" style={{ backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper }}>
                    {payment.image_path && (
                      <img src={payment.image_path} alt={payment.name} className="h-32 w-full object-contain" />
                    )}
                    <CardContent className="text-center">
                      <Typography variant="h6" className="font-bold" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
                        {payment.name}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Typography variant="body1" className="text-center mt-4" style={{ color: darkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary }}>
                現在、登録済みの決済方法はありません。
              </Typography>
            )}
          </div>
        </div>
      </AuthenticatedLayout>
    </ThemeProvider>
  );
}