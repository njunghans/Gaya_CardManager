@extends('layouts.app')

@section('title')
    Edit a Card
@endsection

@section('content')
    <div class="flex-center position-ref">
        @include('cards.live_render')
        {{ Form::model($card, ['method' => 'PATCH', 'enctype' => 'multipart/form-data', 'class'=>'form-horizontal' , 'route' => ['cards.update' , $card->id]]) }}

        @include('forms.card')
        <div class="form-group">
            <div class="col-sm-5">
                {{ Form::submit('Update' , array('class' => 'btn btn-primary btn-sm')) }}
            </div>
        </div>

        {{ Form::close() }}
    </div>
@endsection