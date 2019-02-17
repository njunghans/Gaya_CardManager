<?php

namespace gaya;

use gaya\Traits\Scopes;
use Illuminate\Database\Eloquent\Model;

/**
 * Card
 * 
 * A Gaya Card
 *
 * @mixin \Eloquent
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $card_type
 * @property string $category_text
 * @property int|null $edition_id
 * @property int|null $cost_gold
 * @property int|null $cost_neutral
 * @property int|null $cost_bio
 * @property int|null $cost_ene
 * @property int|null $cost_par
 * @property int|null $cost_art
 * @property int|null $attack
 * @property int|null $life
 * @property int|null $shield
 * @property int|null $range
 * @property string|null $card_effect
 * @property string|null $lore_text
 * @property int $official
 * @property string $premium_effect
 * @property string $rarity
 * @property string $layout
 * @property int|null $artist_id
 * @property string|null $image_path
 * @property string|null $image_settings
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card matchParams(\Illuminate\Http\Request $request)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereArtistId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereAttack($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCardEffect($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCardType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCategoryText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCostArt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCostBio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCostEne($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCostGold($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCostNeutral($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCostPar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereEditionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereImagePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereImageSettings($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereLayout($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereLife($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereLoreText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereOfficial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card wherePremiumEffect($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereRange($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereRarity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereShield($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\Card whereUserId($value)
 */
class Card extends Model
{
    use Scopes;

    protected $guarded = [];

}

