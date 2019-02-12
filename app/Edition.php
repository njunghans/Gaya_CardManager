<?php

namespace gaya;

use Illuminate\Database\Eloquent\Model;

/**
 * gaya\Edition
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $description
 * @property string|null $icon_path
 * @property int $official
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereIconPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereOfficial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Edition whereUserId($value)
 * @mixin \Eloquent
 */
class Edition extends Model
{
    //
}
