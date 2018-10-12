<!-- Navbar File, contains links to other sides, which should be displayed at every single page -->
<!--<div class="links header container">

</div>-->
<nav class="navbar navbar-laravel navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-left">
            <a class="btn btn-default navbar-btn" href="{{ route('start') }}">Gaya</a>
            <a class="btn btn-default navbar-btn" href="{{ route('rules') }}">Rules</a>
            <a class="btn btn-default navbar-btn" href="{{ route('cards.index') }}">Cards</a>
        </div>
        @if (Route::has('login'))
            @auth
                <a class="btn btn-default navbar-btn navbar-right" href="{{ route('logout') }}">Logout</a>
            @else
                <a class="btn btn-default navbar-btn navbar-right" href="{{ route('login') }}">Login</a>
            @endauth
        @endif
    </div>
</nav>

