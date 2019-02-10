<?php

use Faker\Generator as Faker;

$factory->define(gaya\Mechanic::class, function (Faker $faker) {
    return [
        'name' => 'flying',
        'description' => 'This unit is flying and can not be attacked by non-ranged units',
        'pattern' => '$flying',
        'official' => true,
        'user_id' => rand(1, config('seeding.numbers.default'))
    ];
});