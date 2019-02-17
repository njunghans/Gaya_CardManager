<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(gaya\CardsInSet::class, function (Faker $faker) {
    return [
        'set_id' => rand(1, config('seeding.numbers.sets')),
        'card_id' => rand(1, config('seeding.numbers.default')),
    ];
});
