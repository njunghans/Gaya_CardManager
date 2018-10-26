@extends('sets.layout')

@section('sets.title')
    Edit a Set
@endsection

@section('sets.content')
    <div class="flex-center position-ref">
        {{ Form::model($set, ['method' => 'PATCH' , 'class'=>'form-horizontal' , 'route' => ['sets.update' , $set->id]]) }}

        @include('forms.set')
        <div class="form-group">
            <div class="col-sm-5">
                {{ Form::submit('Update' , array('class' => 'btn btn-primary btn-sm')) }}
            </div>
        </div>

        {{ Form::close() }}
    </div>
@endsection
