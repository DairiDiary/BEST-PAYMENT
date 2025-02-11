import React, { useState } from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Button, TextField, Checkbox, FormControlLabel, Typography, Paper, Box } from '@mui/material';
import { useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const Best = (props) => {
    const { payments, keyword, onlymypayment } = usePage().props;
    const { data, setData, post } = useForm({
        searchQuery: keyword || '',
        onlymypayment: onlymypayment || false,
    });

    const handleSearch = (e) => {
        e.preventDefault();
        post('/best');
    };

    return (
        <Authenticated auth={props.auth} header={
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
                Best Payment Search
            </Typography>
        }>
            <Box sx={{ padding: 3 }}>
                <Paper sx={{ padding: 3, backgroundColor: '#f5f5f5' }}>
                    <Typography variant="h6" sx={{ marginBottom: 2, color: '#333' }}>BESTPAYMENT</Typography>

                    <form onSubmit={handleSearch}>
                        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                            <TextField
                                label="店名を入力してください"
                                variant="outlined"
                                fullWidth
                                value={data.searchQuery}
                                onChange={(e) => setData('searchQuery', e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ alignSelf: 'center' }}
                            >
                                検索
                            </Button>
                        </Box>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={data.onlymypayment}
                                    onChange={(e) => setData('onlymypayment', e.target.checked)}
                                />
                            }
                            label="登録済み"
                            sx={{ marginBottom: 2 }}
                        />
                    </form>

                    <Box sx={{ marginTop: 3 }}>
                        <Typography variant="subtitle1" sx={{ marginBottom: 1, color: '#555' }}>
                            {payments.length > 0 ? '結果:' : 'そのような店は見つかりません。'}
                        </Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            {payments.length > 0 ? (
                                payments.map(payment => (
                                    <li key={payment.id} style={{
                                        padding: '10px',
                                        borderBottom: '1px solid #ddd',
                                        borderRadius: '5px',
                                        backgroundColor: '#fff',
                                        marginBottom: '8px',
                                    }}>
                                        <Typography variant="body1">{payment.name}</Typography>
                                    </li>
                                ))
                            ) : null}
                        </ul>
                    </Box>
                </Paper>
            </Box>
        </Authenticated>
    );
}

export default Best;
