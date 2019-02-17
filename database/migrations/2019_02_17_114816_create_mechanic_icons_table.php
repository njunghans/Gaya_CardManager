<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMechanicIconsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mechanic_icons', function (Blueprint $table) {
            $table->increments('id');

            $table->string('pattern')->unique();
            $table->string('source');
            $table->float('width');
            $table->float('height');
            $table->integer('mechanic_id')->unsigned();

            $table->timestamps();

            $table->foreign('mechanic_id')->references('id')->on('mechanics');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mechanic_icons');
    }
}
