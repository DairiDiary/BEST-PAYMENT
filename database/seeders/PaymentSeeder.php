<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\payment;

class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payments')->insert([
                'name' => '楽天ペイ',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'PayPay',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'LINE Pay',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'メルペイ',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'ｄ払い',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'au PAY',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'FamiPay',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'Suica',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'PASMO',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'イオンカード',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => '三井住友カード',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'ｄカード',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'JCBカード',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'エポスカード',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'アメリカン・エキスプレス',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => '三菱UFJカード',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => 'セゾンカード',
                'image_path' => 'null'
        ]);
        DB::table('payments')->insert([
                'name' => '現金',
                'image_path' => 'null'
        ]);
    }
}
