<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */


    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();

            $table->string('name');
            $table->enum('card_type', $this->getKeysFromConfig('card_types'));
            $table->text('category_text');
            $table->integer('edition_id')->unsigned()->nullable();

            $table->tinyInteger('cost_gold')->nullable();
            $table->tinyInteger('cost_bio')->nullable();
            $table->tinyInteger('cost_ene')->nullable();
            $table->tinyInteger('cost_par')->nullable();
            $table->tinyInteger('cost_art')->nullable();

            $table->tinyInteger('attack')->nullable();
            $table->tinyInteger('life')->nullable();
            $table->tinyInteger('shield')->nullable();
            $table->tinyInteger('range')->nullable();
            $table->text('card_effect')->nullable();
            $table->text('lore_text')->nullable();

            $table->boolean('official');
            $table->enum('premium_effect', $this->getKeysFromConfig('premium_effects'));
            $table->enum('rarity', $this->getKeysFromConfig('rarities'));
            $table->enum('layout', $this->getKeysFromConfig('layouts'));
            $table->integer('artist_id')->unsigned()->nullable();

            $table->string('image_path')->nullable();
            $table->text('image_settings')->nullable();  # data type?x

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('edition_id')->references('id')->on('editions');
            $table->foreign('artist_id')->references('id')->on('artists');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }

    private function getKeysFromConfig($key)
    {
        return array_keys(config("gaya.drop_downs.$key"));
    }
}
