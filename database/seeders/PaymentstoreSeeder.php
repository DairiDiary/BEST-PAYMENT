<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\store;
use App\Models\payment;

class PaymentstoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $store1 = Store::where('name', 'イオン')->first();
        $store2 = Store::where('name', 'ローソン')->first();
    
        $payment1 = Payment::where('name', 'イオンカード')->first();
        $payment2 = Payment::where('name', '三井住友カード')->first();
        
        if (!$store1 || !$store2) {
            dd('Stores not found:', $store1, $store2);
        }

        if (!$payment1 || !$payment2) {
            dd('Payments not found:', $payment1, $payment2);
        }
    
        DB::table('payment_stores')->insert([
            ['payment_id' => $payment1->id, 'store_id' => $store1->id, 'priority' => 1],
            ['payment_id' => $payment2->id, 'store_id' => $store2->id, 'priority' => 1],
        ]);
    }
}
