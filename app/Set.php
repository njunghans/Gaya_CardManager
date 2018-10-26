<?php

namespace gaya;

use Illuminate\Database\Eloquent\Model;

/**
 * Set
 *
 * A Gaya Set of Cards
 *
 * @mixin \Eloquent
 * @mixin \Illuminate\Database\Eloquent\Builder
 */


class Set extends Model
{
    protected $guarded = [];

    public function getCardsInSet() {
        $ids = CardsInSet::where('set_id', $this->id)->pluck('card_id')->toArray();
        $cards = Card::whereIn('id', $ids)->get();
        return $cards;
    }
}
