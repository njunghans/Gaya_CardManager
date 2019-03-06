# Gaya_CardManager
A website to create and store Cards for Gaya.

Youtrack - http://dspace.dainst.org:8080
## Development
In your Homstead/homestead.yml, indicate the correct location of your project.

Then Run in Homestead/
```
vagrant ssh
mysql -u homestead -p (Passwort "secret")
CREATE DATABASE gayadb;
CREATE USER 'gaya'@'localhost' IDENTIFIED BY 'gayapw';
GRANT ALL PRIVILEGES ON gayadb.* TO 'gaya'@'localhost';
```
Then Run Deployment with .env.dev as .env

Use watchpoll (but not during pulls)

```
npm run watch-poll
```

## Deployment
Run
```
create .env (see.env.example)
composer install
npm install
php artisan migrate
git submodule add https://github.com/ngrippa/gaya-node-server
cd gaya-node-server
npm run init
```

## Development
If you included new dependencies make sure to run `npm run dev` after it.

You can use the seeder with 
```
php artisan db:seed
```

for php commands:
In Homestead
```
vagrant ssh
cd code
php stuff
```
