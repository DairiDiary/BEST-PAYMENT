<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payment_store extends Model
{
    use HasFactory;
    
    public function store()
    {
        return $this->belongsTo(Store::class, 'store_id');
    }
    public function payment()
    {
        return $this->belongsTo(Payment::class, 'payment_id');
    }
}
