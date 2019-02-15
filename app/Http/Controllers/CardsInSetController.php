<?php

namespace gaya\Http\Controllers;

use gaya\CardsInSet;
use Illuminate\Http\Request;

class CardsInSetController extends Controller
{
    public function addCardToSet(Request $request)
    {
        $r = $request->toArray();
        $r['user_id'] = 1;
        CardsInSet::create($r);
    }
}
