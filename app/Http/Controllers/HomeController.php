<?php

namespace gaya\Http\Controllers;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function start()
    {
        return view('welcome');
    }

    public function profile()
    {
        $this->middleware('auth');
        return view('home');
    }
}
