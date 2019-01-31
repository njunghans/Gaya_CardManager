<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::auth();

Route::get('/', 'HomeController@start')->name('start');

Route::get('/rules', 'HomeController@rules')->name('rules');

Route::get('/cards', 'CardController@index')->name('cards.index');
Route::get('/cards/create', 'CardController@create')->name('cards.create')->middleware('auth');
Route::post('/cards/create' , 'CardController@store')->name('cards.store')->middleware('auth');
Route::get('/cards/{cardId}', 'CardController@show')->name('cards.show');
Route::get('/cards/{cardId}/edit', 'CardController@edit')->name('cards.edit')->middleware('auth');
Route::patch('/cards/{cardId}/edit', 'CardController@update')->name('cards.update')->middleware('auth');

Route::get('/sets', 'SetController@index')->name('sets.index');
Route::get('/sets/create', 'SetController@create')->name('sets.create')->middleware('auth');
Route::post('/sets/create' , 'SetController@store')->name('sets.store')->middleware('auth');
Route::get('/sets/{setId}/edit', 'SetController@edit')->name('sets.edit')->middleware('auth');
Route::patch('/sets/{setId}/edit', 'SetController@update')->name('sets.update')->middleware('auth');
Route::get('sets/{setId}', 'SetController@view')->name('sets.view')->middleware('auth');



//
//Route::get('/home', 'HomeController@index')->name('home');
