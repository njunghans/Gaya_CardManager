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
        factory(gaya\MechanicIcon::class, 1)->create();
    }
}
