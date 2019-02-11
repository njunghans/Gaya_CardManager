<div id="body">
    <main class="py-4">
        <div class="content">
            <div class="title-menu">
                <div class="title flex-center">
                    @yield('title')
                </div>
                <div class="links">
                    @yield('menu')
                </div>
            </div>
            @yield('content')
        </div>
    </main>
</div>