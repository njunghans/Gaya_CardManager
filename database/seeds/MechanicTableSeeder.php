<?php

use Illuminate\Database\Seeder;

class MechanicTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(gaya\Mechanic::class, 1)->create();
    }
}
