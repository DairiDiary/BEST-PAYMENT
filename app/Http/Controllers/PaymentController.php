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
        $user = Auth::user();
        $registered = $user->mypayments()->pluck('payment_id')->toArray();
        return Inertia::render("bestpayment/index", [
            "payments"   => $payment->get(),
            "registered" => $registered,
        ]);
    }

    public function show(Payment $payment)
    {
        return Inertia::render("bestpayment/Show", ["payment" => $payment]);
    }
    

    public function best(Request $request)
    {
        $keyword = $request->input('searchQuery');
        $onlymypayment = $request->input('onlymypayment');
        $user = Auth::user();
    
        $registeredPaymentIds = mypayment::where('user_id', $user->id)
                                    ->pluck('payment_id')
                                    ->toArray();
    
        if ($keyword) {
            $store = Store::where('name', 'like', '%' . $keyword . '%')->first();
            if ($store) {
                $query = Payment::select('payments.*')
                    ->join('payment_stores', 'payments.id', '=', 'payment_stores.payment_id')
                    ->where('payment_stores.store_id', $store->id)
                    ->orderBy('payment_stores.priority', 'asc');
            } else {
                return Inertia::render('bestpayment/best', [
                    'payments' => collect(),
                    'keyword' => $keyword,
                    'onlymypayment' => $onlymypayment
                ]);
            }
        } else {
            $query = Payment::query();
        }
    
        if ($onlymypayment) {
            $query->whereIn('payments.id', $registeredPaymentIds);
        }
    
        $payments = $query->limit(3)->get();
    
        return Inertia::render('bestpayment/best', [
            'payments' => $payments,
            'keyword' => $keyword,
            'onlymypayment' => $onlymypayment
        ]);
    }

    
    public function mypayment(Request $request, mypayment $mypayment, Payment $payment)
    {
        $mypayment->payment_id = $payment->id;
        $mypayment->user_id    = Auth::id();
        $mypayment->save();
    
        $user = Auth::user();
        $registered = $user->mypayments()->pluck('payment_id')->toArray();
    
        return Inertia::render('bestpayment/index', [
            "payments"   => Payment::all(),
            "registered" => $registered,
            "message"    => "登録が完了しました",
        ]);
    }
    
    public function dashboard()
    {
        $user = Auth::user();
        $registered = $user->mypayments()->pluck('payment_id')->toArray();

        $payments = \App\Models\Payment::all();
    
        return Inertia::render('Dashboard', [
             'payments'   => $payments,
             'registered' => $registered,
        ]);
    }

}