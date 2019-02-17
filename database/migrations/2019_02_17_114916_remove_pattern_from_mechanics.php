<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemovePatternFromMechanics extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mechanics', function (Blueprint $table) {
            if (Schema::hasColumn('mechanics', 'pattern')) {
                Schema::table('mechanics', function (Blueprint $table) {
                    $table->dropColumn('pattern');
                });
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mechanics', function (Blueprint $table) {
            if (!Schema::hasColumn('mechanics', 'pattern')) {
                Schema::table('mechanics', function (Blueprint $table) {
                    $table->string('pattern')->unsigned()->nullable();
                });
            }
        });
    }
}
