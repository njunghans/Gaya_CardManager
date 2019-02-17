@extends('layouts.app')

@section('title')
    Set "{{$set->name}}"
@endsection

@section('menu')
    @include('sets.nav')
@endsection

@section('content')
    {{$set->description}}
    <hr>
    <div id="setId" class="hidden">{{$set->id}}</div>
    <div id="animated-thumbnails"></div>
@endsection

@section('js')
    <script src="{{ mix('js/setGallery.js') }}"></script>
@endsection
