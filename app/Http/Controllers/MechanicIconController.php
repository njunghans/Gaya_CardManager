<?php

namespace gaya\Http\Controllers;

use gaya\MechanicIcon;
use Illuminate\Http\Request;

class MechanicIconController extends Controller
{
    //Generate font

    public function getMechanicIcons()
    {
        return MechanicIcon::all();
    }

    public function getIdentifiers()
    {
        return MechanicIcon::all()->pluck('pattern');
    }

    public function getIconByIdentifier(Request $request)
    {
        $identifier = $request->toArray()['identifier'];
        return MechanicIcon::where('pattern', $identifier)->first();
    }
}
