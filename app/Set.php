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
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $description
 * @property int $official
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set whereOfficial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Set whereUserId($value)
 */
class Set extends Model
{
    protected $guarded = [];

    public function getCardsInSet()
    {
        $ids = CardsInSet::where('set_id', $this->id)->pluck('card_id')->toArray();
        $cards = Card::whereIn('id', $ids)->get();
        return $cards;
    }
}
