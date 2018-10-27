<?php

use Faker\Generator as Faker;

$factory->define(gaya\Edition::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, config('seeding.number')),
        'name' => $faker->name,
        'description' => $faker->text,
        'icon_path' => str_random(),
        'official' => false
    ];
});
