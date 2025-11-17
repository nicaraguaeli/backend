<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Country;

class CountryController extends Controller
{
    public function cities(Country $country)
    {
        return response()->json($country->cities()->select('id', 'name')->orderBy('name')->get());
    }
}