<?php

namespace gaya;

use Illuminate\Database\Eloquent\Model;

/**
 * gaya\MechanicIcon
 *
 * @property int $id
 * @property string $pattern
 * @property string $source
 * @property float $width
 * @property float $height
 * @property int $mechanic_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \gaya\Mechanic $mechanic
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon whereHeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon whereMechanicId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon wherePattern($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon whereSource($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\MechanicIcon whereWidth($value)
 * @mixin \Eloquent
 */
class MechanicIcon extends Model
{
    public function mechanic()
    {
        return $this->belongsTo('gaya\Mechanic');
    }
}
