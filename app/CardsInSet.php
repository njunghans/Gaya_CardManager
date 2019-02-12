<?php

namespace gaya;

use Illuminate\Database\Eloquent\Model;

/**
 * Cards In set
 * 
 * A n:n table of Cards in a Set
 *
 * @mixin \Eloquent
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @property int $id
 * @property int $set_id
 * @property int $card_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet whereCardId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet whereSetId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\CardsInSet whereUserId($value)
 */
class CardsInSet extends Model
{
    //
}
