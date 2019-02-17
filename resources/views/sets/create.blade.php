@extends('layouts.app')

@section('title')
    Create a Set
@endsection

@section('menu')
    @include('sets.nav')
@endsection

@section('content')
    <div class="flex-center position-ref">
        {{ Form::open(['method' => 'POST' , 'class'=>'form-horizontal' , 'route' => ['sets.store']]) }}

        @include('forms.set')
        <div class="form-group">
            <div class="col-sm-5">
                {{ Form::submit('Create' , array('class' => 'btn btn-primary btn-sm')) }}
            </div>
        </div>

        {{ Form::close() }}
    </div>
@endsection
