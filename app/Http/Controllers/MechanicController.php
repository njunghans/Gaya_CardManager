<?php

namespace gaya\Http\Controllers;

use gaya\Mechanic;
use Illuminate\Http\Request;

class MechanicController extends Controller
{
    //Generate font

    public function index() {
        return Mechanic::all();
    }

    public function saveSvg(Request $request){

        $image = $request->file('icon');
        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path(config('gaya.icon_base_path')), $imageName);
        return config('gaya.icon_base_path') . $imageName;
    }
}
