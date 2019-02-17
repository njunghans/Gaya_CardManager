<?php

use Faker\Generator as Faker;

$factory->define(gaya\Card::class, function (Faker $f) {
    $u = new GayaUtils();
    return [
        'user_id' => rand(1, config('seeding.numbers.default')),
        'name' => $f->name,
        'card_type' => $u->getRandomCardType(),
        'category_text' => str_random(8),
        'edition_id' => rand(1, config('seeding.numbers.default')),
        'cost_gold' => $u->getRandomCost(),
        'cost_neutral' => $u->getRandomCost(),
        'cost_bio' => $u->getRandomCost(),
        'cost_ene' => $u->getRandomCost(),
        'cost_par' => $u->getRandomCost(),
        'cost_art' => $u->getRandomCost(),
        'attack' => $u->getRandomCost(),
        'life' => $u->getRandomCost(),
        'shield' => $u->getRandomCost(),
        'range' => $u->getRandomCost(),
        'card_effect' => "\$flying1 ".$f->text,
        'lore_text' => $f->text,
        'official' => false,
        'premium_effect' => $u->getRandomPremiumEffect(),
        'rarity' => $u->getRandomRarity(),
        'layout' => $u->getRandomLayout(),
        'artist_id' => rand(1, config('seeding.numbers.default')),
        'image_path' => config('gaya.image_base_path')."5c54628ee3909.png",
        'image_settings' => "{\"x\":-86,\"y\":-143,\"width\":1920,\"height\":1080,\"rotation\":0}"

    ];
});
