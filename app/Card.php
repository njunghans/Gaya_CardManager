<?php

namespace gaya;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    public $card_types = ["foo"];
    public $premium_effects = ["normal"];
    public $rarities = ["common", "uncommon", "rare", "unique"];
    public $layouts = ["stock"];

    protected $guarded = [];
}
