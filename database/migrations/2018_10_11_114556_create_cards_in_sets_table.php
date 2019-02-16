<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsInSetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards_in_sets', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('set_id')->unsigned();
            $table->integer('card_id')->unsigned();

            $table->timestamps();

            $table->foreign('set_id')->references('id')->on('sets');
            $table->foreign('card_id')->references('id')->on('cards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards_in_sets');
    }
}
