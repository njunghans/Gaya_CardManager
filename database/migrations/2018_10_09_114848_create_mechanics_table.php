<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMechanicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('mechanics', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name')->unique();
            $table->text('description');
            $table->longText('advanced_rulings')->nullable();

            $table->string('pattern')->unique();
            $table->boolean('official');
            $table->string('icon_path')->nullable();

            $table->integer('introduced_in_edition')->unsigned()->nullable();
            $table->integer('user_id')->unsigned();

            $table->timestamps();

            $table->foreign('introduced_in_edition')->references('id')->on('editions');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mechanics');
    }
}
