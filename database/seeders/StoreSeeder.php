<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\store;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
                'name' => 'イオン',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => '西友',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => 'ロピア',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => 'まいばすけっと',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => 'ヤオコー',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => 'ライフ',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => '成城石井',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => 'ローソン',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => 'ファミリーマート',
                'image_path' => 'null'
        ]);
        DB::table('stores')->insert([
                'name' => 'セブンイレブン',
                'image_path' => 'null'
        ]);
        
    }
}
