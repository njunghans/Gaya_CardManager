<?php

use Illuminate\Database\Seeder;

class MechanicIconsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!gaya\MechanicIcon::where('pattern', '$flying1')->get()) {

            factory(gaya\Mechanic::class, 1)->create();
        }
    }
}
