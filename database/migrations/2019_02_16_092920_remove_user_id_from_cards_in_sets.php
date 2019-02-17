<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveUserIdFromCardsInSets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards_in_sets', function (Blueprint $table) {
            if (Schema::hasColumn('cards_in_sets', 'user_id')) {
                Schema::table('cards_in_sets', function (Blueprint $table) {
                    $table->dropForeign('cards_in_sets_user_id_foreign');
                    $table->dropColumn('user_id');
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
        Schema::table('cards_in_sets', function (Blueprint $table) {
            if (!Schema::hasColumn('cards_in_sets', 'user_id')) {
                Schema::table('cards_in_sets', function (Blueprint $table) {
                    $table->integer('user_id')->unsigned()->nullable();
                    $table->foreign('user_id')->references('id')->on('users');
                });
            }
        });
    }
}
