<!-- Body of the side -->
<body>
    <div class="flex-center position-ref">
        <div class="content">
            @include('layouts.login')
            <div class="title m-b-md">
                @yield('title')
            </div>
            @include('layouts.nav')
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
