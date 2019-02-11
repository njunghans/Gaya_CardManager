@extends('layouts.app')

@section('title')
    Cards
@endsection

@section('menu')
    @include('cards.nav')
@endsection

@section('content')
    <div id="animated-thumbnails"></div>
@endsection

@section('js')
    <script src="{{ mix('js/gallery.js') }}"></script>
@endsection
