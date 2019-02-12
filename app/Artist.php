<?php

namespace gaya;

use Illuminate\Database\Eloquent\Model;

/**
 * gaya\Artist
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Artist whereUserId($value)
 * @mixin \Eloquent
 */
class Artist extends Model
{
    //
}
