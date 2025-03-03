<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\store;
use App\Models\Payment;

class PaymentstoreSeeder extends Seeder
{
    public function run()
    {
      
        $storePaymentPairs = [
            
            ['store_name' => 'イオン', 'payment_name' => 'イオンカード', 'priority' => 1],
            ['store_name' => 'イオン', 'payment_name' => '楽天ペイ',  'priority' => 2],
            ['store_name' => 'イオン', 'payment_name' => 'PayPay',      'priority' => 3],
           
            ['store_name' => '西友', 'payment_name' => '楽天ペイ', 'priority' => 1],
            ['store_name' => '西友', 'payment_name' => 'PayPay',       'priority' => 2],
            ['store_name' => '西友', 'payment_name' => 'エポスカード',          'priority' => 3],
          
            ['store_name' => 'ロピア', 'payment_name' => '現金', 'priority' => 1],
        
            ['store_name' => 'まいばすけっと', 'payment_name' => 'イオンカード', 'priority' => 1],
            ['store_name' => 'まいばすけっと', 'payment_name' => '楽天ペイ',   'priority' => 2],
            ['store_name' => 'まいばすけっと', 'payment_name' => 'PayPay',       'priority' => 3],
            
            ['store_name' => 'ヤオコー', 'payment_name' => 'エポスカード', 'priority' => 1],
            ['store_name' => 'ヤオコー', 'payment_name' => '楽天ペイ',  'priority' => 2],
            ['store_name' => 'ヤオコー', 'payment_name' => 'PayPay',      'priority' => 3],
           
            ['store_name' => 'ライフ', 'payment_name' => 'JCBカード', 'priority' => 1],
            ['store_name' => 'ライフ', 'payment_name' => 'dカード',       'priority' => 2],
            ['store_name' => 'ライフ', 'payment_name' => '楽天ペイ',          'priority' => 3],
          
            ['store_name' => '成城石井', 'payment_name' => 'JCBカード', 'priority' => 1],
            ['store_name' => '成城石井', 'payment_name' => '三井住友カード',       'priority' => 2],
            ['store_name' => '成城石井', 'payment_name' => '楽天ペイ',          'priority' => 3],
        
            ['store_name' => 'ローソン', 'payment_name' => '三井住友カード', 'priority' => 1],
            ['store_name' => 'ローソン', 'payment_name' => '三菱UFJカード',   'priority' => 2],
            ['store_name' => 'ローソン', 'payment_name' => 'd払い',       'priority' => 3],
            
            ['store_name' => 'ファミリーマート', 'payment_name' => 'FamiPay', 'priority' => 1],
            ['store_name' => 'ファミリーマート', 'payment_name' => '楽天ペイ',  'priority' => 2],
            ['store_name' => 'ファミリーマート', 'payment_name' => 'd払い',      'priority' => 3],
           
            ['store_name' => 'セブンイレブン', 'payment_name' => '三井住友カード', 'priority' => 1],
            ['store_name' => 'セブンイレブン', 'payment_name' => '三菱UFJカード',       'priority' => 2],
            ['store_name' => 'セブンイレブン', 'payment_name' => 'JCBカード',          'priority' => 3],
           
        ];

        $insertData = [];

        foreach ($storePaymentPairs as $pair) {
            $store = Store::where('name', $pair['store_name'])->first();
            $payment = Payment::where('name', $pair['payment_name'])->first();

            if (!$store) {
                abort(404, "Store not found: {$pair['store_name']}");
            }
            if (!$payment) {
                abort(404, "Payment not found: {$pair['payment_name']}");
            }

            $insertData[] = [
                'payment_id' => $payment->id,
                'store_id'   => $store->id,
                'priority'   => $pair['priority'],
            ];
        }

        DB::table('payment_stores')->insert($insertData);
    }
}
