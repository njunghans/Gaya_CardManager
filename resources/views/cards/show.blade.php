@extends('cards.layout')

@section('cards.title')
    Show Card
@endsection

@section('cards.content')
    @include('cards.live_render')
@endsection