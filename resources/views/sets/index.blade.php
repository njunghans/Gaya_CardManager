@extends('layouts.app')

@section('title')
    Sets
@endsection

@section('menu')
    @include('sets.nav')
@endsection

@section('content')
    <div class="flex-center padded">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Official</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($sets as $set)
                <tr>
                    <th scope="row">{{$set->id}}</th>
                    <td><a href="{{route('sets.view', ['setId' => $set->id])}}">{{$set->name}}</a></td>
                    <td>{{$set->description}}</td>
                    <td>{{$set->official}}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection

