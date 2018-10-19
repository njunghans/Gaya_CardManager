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
Route::get('/cards/{cardId}/edit', 'CardController@edit')->name('cards.edit')->middleware('auth');
Route::patch('/cards/{cardId}/edit', 'CardController@update')->name('cards.update')->middleware('auth');




//
//Route::get('/home', 'HomeController@index')->name('home');
