<?php

namespace gaya\Http\Controllers;

use Illuminate\Http\Request;

class CardController extends Controller
{
    public function index() {
        return view('cards.index');
    }
    public function create() {
        return view('cards.create');
    }
}
