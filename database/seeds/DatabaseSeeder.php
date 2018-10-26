<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            ArtistsTableSeeder::class,
            EditionsTableSeeder::class,
            CardsTableSeeder::class,
            SetsTableSeeder::class,
            CardsInSetsTableSeeder::class,
        ]);
    }
}
