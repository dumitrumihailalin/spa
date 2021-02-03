<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use DB;
use Laravel\Passport\TokenRepository;
use Laravel\Passport\RefreshTokenRepository;

class AuthController extends Controller
{
    /**
     * Handles Registration Request
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users|max:50',
            'password' => 'required:users|min:10',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        try {
            $user = User::create($input);
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            $success['name'] =  $user->name;

            return response()->json($success, 200);
        } catch (\Illuminate\Database\QueryException $e) {
            $errorCode = $e->errorInfo[1];
                return response()->json($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            // return bad request
            return response()->json('error', 400);
        }

        // check email and password
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['user'] = $user;
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json($success, 200);
        } else {
            return response()->json('error', 400);
        }
    }

    public function logout(Request $request)
    {

        $request->user()->token()->revoke();

        // Revoke all of the token's refresh tokens
        // => Set oauth_refresh_tokens.revoked to TRUE (t)
        $refreshTokenRepository = app('Laravel\Passport\RefreshTokenRepository');
        $refreshTokenRepository->revokeRefreshTokensByAccessTokenId($request->user()->token()->id);
        return response()->json(['message' => 'Logged out'], 200);
    }

    public function userInfo()
    {
        $user = auth()->user();

        return response()->json(['user' => $user], 200);

    }
}
