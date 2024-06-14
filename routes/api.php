<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/user/{userId}/payments', [PaymentController::class, 'index']);
Route::get('/test', function () {
    $user = User::find(1);
    if ($user) {
        return response()->json([
            'user' => $user,
            'payments' => $user->payments // ここでエラーが出るか確認
        ]);
    } else {
        return response()->json(['message' => 'User not found'], 404);
    }
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/best-payment', [PaymentController::class, 'bestPayment']);
    Route::post('/register-payment', [PaymentController::class, 'registerPayment']);
});