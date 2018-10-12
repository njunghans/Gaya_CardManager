@extends('cards.layout')

@section('cards.title')
    Cards
@endsection

@section('cards.content')

    <a href="{{route('cards.create')}}">Create</a>
@endsection
