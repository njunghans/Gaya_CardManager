# Gaya_CardManager
A website to create and store Cards for Gaya.

Youtrack - http://dspace.dainst.org:8080

## Installation

### Basic Steps
Execute the following steps on your server. If you are using Homestead
have a look at the Homestead section *before* excecuting those steps.
1. `git clone --recurse-submodules https://github.com/njunghans/Gaya_CardManager gaya`
1. `cd gaya/node_server && npm run init && cd ..`
1. `npm run init-dev` or `npm run init-prod`
1. Adapt your `.env` and your `node_server/config.json`
1. `php artisan migrate` 
1. `php artisan db:seed` if you want to seed your database

### Using Homestead
Follow https://laravel.com/docs/5.8/homestead

Make sure to forward the nodeJS port to your local machine by adding 
```
ports:
    - send: 1111
      to: 1111
```
to your `Homestead.yaml`.

In your Homstead/homestead.yml, indicate the correct location of your project. E.g.:
```
folders:
    - map: ~/workspace/gaya/
      to: /home/vagrant/gaya/
```

Then access your Machine via `vagrant ssh` and remember to create your database user.
```
mysql -u homestead -p (Passwort "secret")
CREATE DATABASE gayadb;
CREATE USER 'gaya'@'localhost' IDENTIFIED BY 'gayapw';
GRANT ALL PRIVILEGES ON gayadb.* TO 'gaya'@'localhost';
```

If you use a different user/database remember to adapt your .env later in the installation process.

Run the whole installation from your "server", using `vagrant ssh`"


## Development
Make sure to run `npm run watch-poll` to have your frontend-js files compiled automatically.

Run all commands (such as `npm`, `composer`, `php artisan`) from your Homestead machine.
