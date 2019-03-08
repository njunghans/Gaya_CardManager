<?php

namespace gaya\Http\Controllers;

use Auth;
use gaya\Card;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class CardController extends Controller
{
    public function index()
    {
        return view('cards.index');
    }

    public function getCards(Request $request)
    {
        return Card::matchParams($request)->get();
    }

    public function create()
    {
        $dropDowns = config('gaya.drop_downs');
        return view('cards.create', compact('dropDowns'));
    }

    public function edit($cardId)
    {
        $card = Card::findOrFail($cardId);
        $dropDowns = config('gaya.drop_downs');
        return view('cards.edit', compact('card', 'dropDowns'));
    }

    public function show($cardId)
    {
        $card = Card::findOrFail($cardId);
        $this->generateScreenshot([$card]);
        return view('cards.show', compact('card'));
    }

    public function store(Request $request)
    {
        $card = Card::create($this->enrich($request));
        $this->generateScreenshot([$card]);

        return redirect()->route('cards.index');
    }

    public function update(Request $request, $cardId)
    {
        $card = Card::findOrFail($cardId);
        $card->fill($this->enrich($request))->save();
        return redirect()->route('cards.edit', ['cardId' => $cardId]);
    }

    public function getCardsWithoutScreenshot()
    {
        return Card::where('screenshot', false)->get();
    }

    protected function generateScreenshot($cards) {
        $client = new Client();
        $promise = $client->postAsync(env('SCREENSHOT_SERVER_URL'), ['json' => $cards]);
        $promise->wait();
    }

    protected function enrich(Request $request)
    {
        $data = $request->all();

        if ($request->hasFile('card_image')) {
            $data['image_path'] = $this->processImage($request);
        }
        $data['user_id'] = Auth::id();
        $data['official'] = true;
        $data['edition_id'] = 1;
        unset($data['card_image']);
        $data['screenshot'] = false;

        return $data;
    }

    protected function processImage(Request $request)
    {
        $image = $request->file('card_image');
        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path(config('gaya.image_base_path')), $imageName);
        return config('gaya.image_base_path') . $imageName;

    }
}
