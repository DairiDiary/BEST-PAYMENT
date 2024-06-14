<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class store extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'image_path'];
    
    public function payments()
    {
        return $this->belongsToMany(Payment::class, 'payment_stores')->withPivot('priority');
    }
    public function paymentStores()
    {
        return $this->hasMany(payment_store::class, 'store_id');
    }
}
