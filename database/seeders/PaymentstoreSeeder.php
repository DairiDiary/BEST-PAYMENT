<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\store;
use App\Models\Payment;

class PaymentstoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 店舗と決済方法の組み合わせを定義
        $storePaymentPairs = [
            ['store_name' => 'イオン', 'payment_name' => 'イオンカード'],
            ['store_name' => 'ローソン', 'payment_name' => '三井住友カード'],
            ['store_name' => 'セブンイレブン', 'payment_name' => '三井住友カード'],
            ['store_name' => 'まいばすけっと', 'payment_name' => 'イオンカード'],
            ['store_name' => 'ライフ', 'payment_name' => '楽天ペイ'],
            ['store_name' => '成城石井', 'payment_name' => 'エポスカード'],
            ['store_name' => '西友', 'payment_name' => 'エポスカード'],
            ['store_name' => 'ヤオコー', 'payment_name' => 'エポスカード'],
            ['store_name' => 'ファミリーマート', 'payment_name' => 'FamiPay'],
            ['store_name' => 'ロピア', 'payment_name' => '現金'],

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
                'store_id' => $store->id,
                'priority' => 1,
            ];
        }

        // データを一括挿入
        DB::table('payment_stores')->insert($insertData);
    }
}
