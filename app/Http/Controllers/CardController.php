<?php

namespace gaya\Http\Controllers;

use Illuminate\Http\Request;

use gaya\Card;

class CardController extends Controller
{
    public function index() {
        return view('cards.index');
    }
    public function create() {
        return view('cards.create');
    }

    public function store(Request $request) {
        $data = $request->all();

        $data['user_id'] = 123;
        $data['edition_id'] = 123;
        $data['official'] = false;

        Card::create($data);
        dd("Storing card", $data);
    }
}
