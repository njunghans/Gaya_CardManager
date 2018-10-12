<?php

namespace gaya\Http\Controllers;

use Auth;
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

        $data['edition_id'] = 1;
        $data['official'] = false;

        Card::create($this->enrich($data));
        dd("Storing card", $data);
    }

    protected function enrich($data) {
        $data['user_id'] = Auth::id();
        return $data;
    }
}
