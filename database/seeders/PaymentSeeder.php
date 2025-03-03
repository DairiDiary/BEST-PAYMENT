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
                'image_path' => 'https://finance.jp.rakuten-static.com/rpay/img/1/common/OGP_202310.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'PayPay',
                'image_path' => 'https://www.paygent.co.jp/files/user/images/logo_paypay_01.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'LINE Pay',
                'image_path' => 'https://d.line-scdn.net/linepay/merchant/center/images/devcenter/logo/logo_guide_color_default2_1.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'メルペイ',
                'image_path' => 'https://お財布レス.com/wp-content/uploads/2019/09/merpayimg.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'ｄ払い',
                'image_path' => 'https://www.ny-onlinestore.com/img/usr/page_top/news/logo_dbarai.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'au PAY',
                'image_path' => 'https://1tak.net/wp-content/uploads/2023/05/aupay017-640x360.jpeg'
        ]);
        DB::table('payments')->insert([
                'name' => 'FamiPay',
                'image_path' => 'https://famipay.famidigi.jp/wp-content/themes/famidigi/images/common/ogp.jpg'
        ]);
        DB::table('payments')->insert([
                'name' => 'Suica',
                'image_path' => 'https://www.jreast.co.jp/suicamoney/cp/specialcard/material/img/lp/mv_suica01-card.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'PASMO',
                'image_path' => 'https://www.keio.co.jp/assets/img/train/ticket/pasmo/img_pasmo.webp'
        ]);
        DB::table('payments')->insert([
                'name' => 'イオンカード',
                'image_path' => 'https://www.aeon.co.jp/-/media/AeonCard/common/cardface/card_147_v'
        ]);
        DB::table('payments')->insert([
                'name' => '三井住友カード',
                'image_path' => 'https://www.smbc-card.com/top_assets/img/img_recomend-card_classic.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'ｄカード',
                'image_path' => 'https://img1.kakaku.k-img.com/images/card/face/059001_0.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'JCBカード',
                'image_path' => 'https://www.okigin-jcb.co.jp/card_s/images/user/card1.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'エポスカード',
                'image_path' => 'https://dime.jp/wp-content/uploads/2020/08/4c85c234076325c638e2c305400f29d6-1.jpg'
        ]);
        DB::table('payments')->insert([
                'name' => 'アメリカン・エキスプレス',
                'image_path' => 'https://icm.aexp-static.com/Internet/internationalcardshop/ja_jp/images/cards/gold-preferred-card.png'
        ]);
        DB::table('payments')->insert([
                'name' => '三菱UFJカード',
                'image_path' => 'https://img1.kakaku.k-img.com/images/card/face/007005_0.png'
        ]);
        DB::table('payments')->insert([
                'name' => 'セゾンカード',
                'image_path' => 'https://www.saisoncard.co.jp/proxy_img/assets/462949b256274358947c3db996c948d4/75c5da7e889347f38010ae9ca8bbffda/2110_14V2_digital_visa.png?auto=format&w=864'
        ]);
        DB::table('payments')->insert([
                'name' => '現金',
                'image_path' => 'https://tk.ismcdn.jp/mwimgs/f/0/1200w/img_f0cc12720e56e60110a88cc21eb6e109280113.jpg'
        ]);
    }
}
