<!-- Contains the loginbar, which ist only used when authentification is enabled -->
@if (Route::has('login'))
    <div class="top-right links">
        @auth
            <a href="{{ route('logout') }}">Logout</a>
        @else
            <a href="{{ route('login') }}">Login</a>
        @endauth
    </div>
@endif
