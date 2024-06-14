<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use Illuminate\Support\Facades\Auth;

class StoreController extends Controller
{
    public function show($name)
    {
        $store = Store::where('name', $name)->first();

        if (!$store) {
            return response()->json(['error' => 'Store not found'], 404);
        }

        $user = Auth::user();
        if ($user) {
            $userPayments = $user->payments->pluck('id')->toArray();
            $paymentMethods = $store->paymentMethods()
                ->whereIn('payment_id', $userPayments)
                ->take(3)
                ->get();
        } else {
            $paymentMethods = $store->payments()->take(3)->get();
        }

        return response()->json($payments);
    }
}
