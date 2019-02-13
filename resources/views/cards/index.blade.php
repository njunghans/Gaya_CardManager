@extends('layouts.app')

@section('title')
    Cards
@endsection

@section('menu')
    @include('cards.nav')
@endsection

@section('content')
    <div class="flex-center">
        <div class="form-group row">
            {{ Form::label('card-query' , 'Filter:' , array('class' => 'col-sm-2 control-label')) }}
            <div class="col-sm-8">
                {{ Form::text('card-query', null, array('placeholder' => 'e.g. attack=2&life=3', 'class' => 'form-control')) }}
            </div>
            <div class="col-sm-2">
                {{ Form::submit('Search' , array('class' => 'btn btn-primary btn-sm', 'id' => 'search-cards')) }}
            </div>
        </div>
    </div>
    <div id="animated-thumbnails"></div>
@endsection

@section('js')
    <script src="{{ mix('js/gallery.js') }}"></script>
@endsection
