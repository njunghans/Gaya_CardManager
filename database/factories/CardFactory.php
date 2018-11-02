<?php

use Faker\Generator as Faker;


function rand_entry($key) {
    return array_rand(config("gaya.drop_downs.$key"));
}


$factory->define(gaya\Card::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, config('seeding.numbers.default')),
        'name' => $faker->name,
        'card_type' => rand_entry('card_types'),
        'category_text' => $faker->text,
        'edition_id' => rand(1, config('seeding.numbers.default')),
        'cost_gold' => rand(0, 10),
        'cost_bio' => rand(0, 10),
        'cost_ene' => rand(0, 10),
        'cost_par' => rand(0, 10),
        'cost_art' => rand(0, 10),
        'attack' => rand(0, 10),
        'life' => rand(0, 10),
        'shield' => rand(0, 10),
        'range' => rand(0, 10),
        'card_effect' => $faker->text,
        'lore_text' => $faker->text,
        'official' => false,
        'premium_effect' => rand_entry('premium_effects'),
        'rarity' => rand_entry('rarities'),
        'layout' => rand_entry('layouts'),
        'artist_id' => rand(1, config('seeding.numbers.default')),
        'image_path' => str_random(),
        'image_settings' => str_random()

    ];
});
