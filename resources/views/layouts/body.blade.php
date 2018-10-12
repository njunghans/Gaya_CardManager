<!-- Body of the side -->
<body>
@include('layouts.nav')
    <div class="flex-center position-ref">
        <div class="content">
            <div class="title m-b-md">
                @yield('title')
            </div>
            @include('layouts.errors')
            @yield('content')
            <hr>
            @include('version')
        </div>
    </div>
    <script>
        @yield('js')
    </script>
    <script src="/js/app.js"></script>


</body>
