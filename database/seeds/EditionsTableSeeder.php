<?php

use Illuminate\Database\Seeder;

class EditionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(gaya\Edition::class, config('seeding.numbers.default'))->create();
    }
}
