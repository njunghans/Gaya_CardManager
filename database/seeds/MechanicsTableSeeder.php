<?php

use Illuminate\Database\Seeder;

class MechanicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!gaya\Mechanic::where('name', 'flying')->get()) {

            factory(gaya\Mechanic::class, 1)->create();
        }
    }
}
