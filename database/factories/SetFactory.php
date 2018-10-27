<?php

use Faker\Generator as Faker;


$factory->define(gaya\Set::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, config('seeding.number')),
        'name' => $faker->name,
        'description' => $faker->text,
        'official' => false
    ];
});
