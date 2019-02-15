@extends('layouts.app')

@section('title')
    Sets
@endsection

@section('content')
    <a href="{{route('sets.create')}}">Create</a>

    <table>
        @foreach ($sets as $set)
            <tr>
                <td><a href="{{route('sets.view', ['setId' => $set->id])}}">{{$set->name}}</a></td>
                <td>{{$set->description}}</td>
                <td>{{$set->official}}</td>
            </tr>
        @endforeach
    </table>
@endsection

