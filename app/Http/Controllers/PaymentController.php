<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\store;
use App\Models\Payment;
use App\Models\mypayment;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index(Payment $payment)
    {
        return Inertia::render("bestpayment/index",["payments" => $payment->get()]);
    }
    public function show(Payment $payment)
    {
        return Inertia::render("bestpayment/Show", ["payment" => $payment]);
    }
    

    public function best(Request $request)
    {
        $keyword = $request->input('searchQuery');
        $payments = Payment::get();
        $onlymypayment = $request->input('onlymypayment');
        
        if ($onlymypayment) {
            $user = Auth::user();
            $mypayment = $user->mypayments->pluck('payment_id')->toArray();
        
            if ($keyword) {
                $store = Store::where('name', 'like', '%' . $keyword . '%')->first();
                if ($store){
                    $payments = Payment::whereHas('paymentStores', function($query) use ($store, $mypayment) {
                        $query->where('store_id', $store->id)
                              ->whereIn('id', $mypayment);
                    })->get();
                } else {
                    $payments = collect();
                }
            } else {
                $payments = Payment::whereIn('id', $mypayment)->get();
            }
        }
        
        else {
            if ($keyword) {
                $store = Store::where('name', 'like', '%' . $keyword . '%')->first();
                if ($store) {
                    $payments = Payment::whereHas('paymentStores', function ($query) use ($store) {
                        $query->where('store_id', $store->id);
                    })->get();
                } else {
                    $payments = collect();
                }
            } else {
                $payments = Payment::get();
            }
        }

        return Inertia::render('bestpayment/best', [
            'payments' => $payments,
            'keyword' => $request->keyword,
            'onlymypayment' => $onlymypayment
        ]);
    }
    
    public function mypayment(Request $request, mypayment $mypayment, Payment $payment)
    {
        $mypayment->payment_id = $payment->id;
        $mypayment->user_id = Auth::id();
        $mypayment->save();
        return redirect("/index/" . $payment->id);
    }
}