<?php

namespace gaya;

use Illuminate\Database\Eloquent\Model;

/**
 * gaya\Mechanic
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string|null $advanced_rulings
 * @property string $pattern
 * @property int $official
 * @property string $layout
 * @property string|null $icon_path
 * @property int|null $introduced_in_edition
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereAdvancedRulings($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereIconPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereIntroducedInEdition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereLayout($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereOfficial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic wherePattern($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Mechanic whereUserId($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\gaya\MechanicIcon[] $icons
 */
class Mechanic extends Model
{
    public function icons()
    {
        return $this->hasMany('gaya\MechanicIcon');
    }
}
