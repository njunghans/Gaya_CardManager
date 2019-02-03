<?php

namespace gaya\Http\Controllers;

use Illuminate\Http\Request;

class MechanicController extends Controller
{
    //Generate font

    public function createFont(Request $request) {
        $svgFilePath=$this->saveSvg($request);
        $fontFilePath = config('gaya.font_base_path') . uniqid() . '.ttf';
        shell_exec('svg2ttf ' . $svgFilePath . ' ' . $fontFilePath);
        return $fontFilePath;
    }
    public function saveSvg(Request $request){

        $image = $request->file('icon');
        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path(config('gaya.icon_base_path')), $imageName);
        return config('gaya.icon_base_path') . $imageName;
    }
}
