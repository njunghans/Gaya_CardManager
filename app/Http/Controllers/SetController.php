<?php

namespace gaya\Http\Controllers;

use Auth;
use gaya\Set;
use Illuminate\Http\Request;

class SetController extends Controller
{
    public function index()
    {
        return view('sets.index');
    }

    public function view($setId)
    {
        $set = Set::find($setId);
        $cards = $set->getCardsInSet();
        dd($cards);
    }

    public function create()
    {
        $dropDowns = config('gaya.drop_downs');
        return view('sets.create', compact('dropDowns'));
    }

    public function edit($setId)
    {
        $set = Set::find($setId);
        $dropDowns = config('gaya.drop_downs');
        return view('sets.edit', compact('set', 'dropDowns'));
    }

    public function store(Request $request)
    {
        $data = $request->all();
        Set::create($this->enrich($data));
        return redirect()->route('sets.index');
    }

    public function update(Request $request, $setId)
    {
        $set = Set::find($setId);
        $data = $request->all();
        $set->fill($this->enrich($data))->save();
        return redirect()->route('sets.index');
    }

    protected function enrich($data)
    {
        $data['user_id'] = Auth::id();
        $data['official'] = false;
        return $data;
    }

}
