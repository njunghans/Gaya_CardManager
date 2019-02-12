<?php

namespace gaya\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait Scopes
{
    /**
     * Uses the url params to filter the request
     *
     * @param Builder $builder
     * @param Request $request
     * @return Builder
     */
    public function scopeMatchParams(Builder $builder, Request $request)
    {
        foreach ($request->query->all() as $item => $value) {
            $builder = $builder->where($item, $value);
        }
        return $builder;
    }
}
