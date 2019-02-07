<!-- Body of the side -->
<body>
@include('layouts.nav')
        <div class="content">
            @include('layouts.errors')
            @yield('content')
            <div class="title m-b-md">
                @yield('title')
            </div>
            <hr>
            @include('version')
        </div>
    <script src="{{ mix('js/app.js') }}"></script>
    @yield('js')


</body>
