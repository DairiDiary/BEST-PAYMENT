<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\payment;

class MypaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::where('email', 'test@example.com')->first();
        $payment = Payment::where('name', 'イオンカード')->first();

        $payment = Payment::where('name', '三井住友カード')->first();
    }
}
