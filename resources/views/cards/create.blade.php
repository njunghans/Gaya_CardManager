@extends('cards.layout')

@section('cards.title')
    Create a Card
@endsection

@section('cards.content')
    <div class="flex-center position-ref">
        {{ Form::open(['method' => 'POST' , 'class'=>'form-horizontal' , 'route' => ['cards.store']]) }}

        @include('forms.card')
        <div class="form-group">
            <div class="col-sm-5">
                {{ Form::submit('Create' , array('class' => 'btn btn-primary btn-sm')) }}
            </div>
        </div>

        {{ Form::close() }}
    </div>
@endsection
