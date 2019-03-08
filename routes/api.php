<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getCards', 'CardController@getCards')->name('cards.get');
Route::get('/getSets', 'SetController@getSets')->name('sets.get');
Route::get('/getCardsInSet/{setId}', 'SetController@getCardsInSet')->name('sets.getCards');
Route::post('/addCardToSet', 'CardsInSetController@addCardToSet')->name('set.addCardsToSet');
Route::get('/getMechanicIcons', 'MechanicIconController@getMechanicIcons');
Route::get('/getMechanicIdentifiers', 'MechanicIconController@getIdentifiers');
Route::get('/getIconByIdentifier', 'MechanicIconController@getIconByIdentifier');
