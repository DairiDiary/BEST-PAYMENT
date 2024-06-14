<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_stores', function (Blueprint $table) {
            $table->id();
            $table->foreignId('payment_id')->constrained();
            $table->foreignId('store_id')->constrained();
            $table->integer('priority')->default(1);
            $table->timestamps();
            
            $table->foreign('payment_id')->references('id')->on('payments')->onDelete('cascade');
            $table->foreign('store_id')->references('id')->on('stores')->onDelete('cascade');
        
            $table->unique(['payment_id', 'store_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_stores');
    }
};
