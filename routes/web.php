<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\PaymentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [PaymentController::class, 'dashboard'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::group(["middleware" => ["auth"]], function() {
    
    Route::get("/index", [PaymentController::class, "index"])->name('index');
    Route::get('/index/{payment}', [PaymentController::class, "show"]);
    Route::post('/index/{payment}', [PaymentController::class, "mypayment"])->name('mypayment');
    
    Route::get('/best', [PaymentController::class, 'best']);
    Route::post('/best', [PaymentController::class, "best"]);
    
    Route::delete('index/{payment}', [PaymentController::class, 'notmypayment'])->name('notmypayment');
});

require __DIR__.'/auth.php';