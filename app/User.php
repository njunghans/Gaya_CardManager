<?php

namespace gaya;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * gaya\User
 *
 * @property int $id
 * @property string $username
 * @property string $email
 * @property string|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\gaya\User whereUsername($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
