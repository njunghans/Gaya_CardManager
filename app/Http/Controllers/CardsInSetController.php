<?php

namespace gaya\Http\Controllers;

use gaya\CardsInSet;
use Illuminate\Http\Request;

class CardsInSetController extends Controller
{
    public function addCardToSet(Request $request)
    {
        CardsInSet::create($request->toArray());
    }
}
