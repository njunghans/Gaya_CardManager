<?php

use Faker\Generator as Faker;

$factory->define(gaya\MechanicIcon::class, function (Faker $faker) {
    return [
        'pattern' => '$flying1',
        'source' => '/data/DefenseIcon.png',
        'width' => 1.2,
        'height' => 1.2,
        'mechanic_id' => 1,
    ];
});