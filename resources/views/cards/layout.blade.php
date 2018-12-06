@extends('layouts.master')
@section('title')
    @yield('cards.title')
@endsection
@section('content')
    <div class="wrapper flex-fill">

        <!-- Sidebar -->
        <nav id="sidebar" class="float-left">
            Gallery
            <ul class="list-unstyled components">
                <li class="active">
                    <a href="{{route('cards.create')}}">Create</a>

                </li>
                <li>
                    <a href="#">About</a>
                </li>

            </ul>
        </nav>

        <!-- Page Content -->
        <div id="content" class="container fill">
            <!-- We'll fill this with dummy content -->
            @yield('cards.content')
        </div>

    </div>

@endsection
