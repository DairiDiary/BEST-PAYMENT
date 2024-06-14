<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payment extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'image_path'];

    public function stores()
    {
        return $this->belongsToMany(Store::class, 'payment_stores')->withPivot('priority');
    }
    public function paymentStores()
    {
        return $this->hasMany(payment_store::class, 'payment_id');
    }
    
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function mypayments() {
        return $this->hasMany(Mypayment::class);
    }
}
