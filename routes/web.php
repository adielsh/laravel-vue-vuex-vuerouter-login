<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('index');
});
Route::resource('register', 'Auth\RegisterController');

Route::post("mylogin", function (\Illuminate\Http\Request $data) {
    if (Auth::attempt(['email' => $data->email, 'password' => $data->password])) {
        return Auth::user();
    }
    return ["שגיאה"];
});

Route::get("getuserlogin", function () {
//    dd(Auth::user());
    return Auth::user();
});
Route::get("logout", 'Auth\LoginController@logout');
Route::resource('apps', 'AppController');
