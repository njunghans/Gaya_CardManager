<?php

use Faker\Generator as Faker;


function rand_entry($key) {
    return array_rand(config("gaya.drop_downs.$key"));
}

function rand_cost() {
    $r = rand(0, 100);
    if ($r < 30) {
        $c = 0;
    } elseif (30 <= $r && $r< 55) {
        $c = 1;
    } elseif (55 <= $r && $r < 75) {
        $c = 2;
    } elseif (75 <= $r && $r < 90) {
        $c = 3;
    } else {
         $c = rand(4, 10);
     }
     return $c;
}

$factory->define(gaya\Card::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, config('seeding.numbers.default')),
        'name' => $faker->name,
        'card_type' => rand_entry('card_types'),
        'category_text' => str_random(8),
        'edition_id' => rand(1, config('seeding.numbers.default')),
        'cost_gold' => rand_cost(),
        'cost_neutral' => rand_cost(),
        'cost_bio' => rand_cost(),
        'cost_ene' => rand_cost(),
        'cost_par' => rand_cost(),
        'cost_art' => rand_cost(),
        'attack' => rand_cost(),
        'life' => rand_cost(),
        'shield' => rand_cost(),
        'range' => rand_cost(),
        'card_effect' => $faker->text,
        'lore_text' => $faker->text,
        'official' => false,
        'premium_effect' => rand_entry('premium_effects'),
        'rarity' => rand_entry('rarities'),
        'layout' => rand_entry('layouts'),
        'artist_id' => rand(1, config('seeding.numbers.default')),
        'image_path' => config('gaya.image_base_path')."5c54628ee3909.png",
        'image_settings' => "{\"x\":-86,\"y\":-143,\"width\":1920,\"height\":1080,\"rotation\":0}"

    ];
});
