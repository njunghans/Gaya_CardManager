@extends('layouts.master')

@section('title')
    Create a Card
@endsection

@section('content')
    {{ Form::open(['method' => 'POST' , 'class'=>'form-horizontal' , 'route' => ['cards.store']]) }}

    @include('forms.card')
    <div class="form-group">
        <div class="col-sm-5">
            {{ Form::submit('Create' , array('class' => 'btn btn-primary btn-sm')) }}
        </div>
    </div>

    {{ Form::close() }}
@endsection
