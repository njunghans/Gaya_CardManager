<?php

namespace gaya\Http\Controllers;

use Auth;
use gaya\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function index()
    {
        return view('cards.index');
    }

    public function create()
    {
        $dropDowns = config('gaya.drop_downs');
        return view('cards.create', compact('dropDowns'));
    }

    public function edit($cardId)
    {
        $card = Card::find($cardId);
        $dropDowns = config('gaya.drop_downs');
        return view('cards.edit', compact('card', 'dropDowns'));
    }

    public function show($cardId)
    {
        $card = Card::find($cardId);
        return view('cards.show', compact('card'));
    }

    public function store(Request $request)
    {
        Card::create($this->enrich($request));

        return redirect()->route('cards.index');
    }

    public function update(Request $request, $cardId)
    {
        $card = Card::find($cardId);
        $card->fill($this->enrich($request))->save();
        return redirect()->route('cards.edit', ['cardId' => $cardId]);
    }

    protected function enrich(Request $request)
    {
        $data = $request->all();

        if ($request->hasFile('card_image')) {
            $data['image_path'] = $this->processImage($request);
        }
        $data['user_id'] = Auth::id();
        $data['official'] = false;
        $data['edition_id'] = 1;
        unset($data['card_image']);

        return $data;
    }

    public function uploadImage(Request $request) {
        return $this->processImage($request);
    }

    protected function processImage(Request $request) {
        $image = $request->file('card_image');
        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path(config('gaya.image_base_path')), $imageName);
        return config('gaya.image_base_path') . $imageName;

    }
}
