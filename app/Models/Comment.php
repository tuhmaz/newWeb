<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $connection = 'jo'; // Always use the main database
    protected $fillable = [
        'body',
        'user_id',
        'commentable_id',
        'commentable_type',
        'database'
    ];

    // العلاقة متعددة الأشكال
    public function commentable()
    {
        return $this->morphTo();
    }

    // العلاقة مع المستخدم (من القاعدة الرئيسية)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reactions()
    {
        return $this->hasMany(Reaction::class);
    }
}
