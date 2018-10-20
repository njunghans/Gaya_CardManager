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
        $dropDowns = config('gaya.drop_downs');
        return view('cards.create', compact('dropDowns'));
    }

    public function edit($cardId) {
        $card = Card::find($cardId);
        $dropDowns = config('gaya.drop_downs');
        return view('cards.edit', compact('card', 'dropDowns'));
    }

    public function store(Request $request) {
        $data = $request->all();
        Card::create($this->enrich($data));
        return redirect()->route('cards.index');
    }

    public function update(Request $request, $cardId) {
        $card = Card::find($cardId);
        $data = $request->all();
        $card->fill($this->enrich($data))->save();
        return redirect()->route('cards.index');
    }

    protected function enrich($data) {
        $data['user_id'] = Auth::id();
        $data['official'] = false;
        $data['edition_id'] = 1;
        return $data;
    }
}
