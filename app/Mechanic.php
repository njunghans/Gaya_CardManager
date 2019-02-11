<?php

namespace gaya;

use gaya\Scopes\AccessibleScope;
use Illuminate\Database\Eloquent\Model;

class Mechanic extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new AccessibleScope);
    }
}
