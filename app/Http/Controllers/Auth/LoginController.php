<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('auth')->only('logout');
    }

    /**
     * Get the needed authorization credentials from the request.
     * Require is_active = 1 so inactive accounts cannot log in.
     */
    protected function credentials(Request $request): array
    {
        return array_merge(
            $request->only($this->username(), 'password'),
            ['is_active' => 1]
        );
    }

    /**
     * Show a tailored error when the account exists but is inactive.
     */
    protected function sendFailedLoginResponse(Request $request)
    {
        // Check whether the email exists at all
        $user = \App\Models\User::where($this->username(), $request->input($this->username()))->first();

        if ($user && !$user->is_active) {
            throw ValidationException::withMessages([
                $this->username() => ['Tu cuenta está pendiente de aprobación por un administrador.'],
            ]);
        }

        throw ValidationException::withMessages([
            $this->username() => [trans('auth.failed')],
        ]);
    }
}
