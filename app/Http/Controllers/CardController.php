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

    public function edit($cardId) {
        $card = Card::find($cardId);
        return view('cards.edit', compact('card'));

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
