# Gaya_CardManager
A website to create and store Cards for Gaya.

Youtrack - http://dspace.dainst.org:8080

## Deployment
Run
```
composer install
npm install
php artisan migrate
```

## Development
If you included new dependencies make sure to run `npm run dev` after it.

You can use the seeder with 
```
php artisan db:seed
```