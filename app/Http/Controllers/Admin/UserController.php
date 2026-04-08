<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        return view('admin.users.index', compact('users'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit(User $user)
    {
        return view('admin.users.edit', compact('user'));
    }

    /**
     * Update user role and active status (admin only).
     */
    public function update(Request $request, User $user)
    {
        // Only admins can modify users
        if (auth()->user()->role !== 'admin') {
            abort(403, 'No tienes permisos para realizar esta acción.');
        }

        $request->validate([
            'role'      => 'required|in:admin,Editor',
            'is_active' => 'required|boolean',
        ]);

        $user->update([
            'role'      => $request->role,
            'is_active' => $request->is_active,
        ]);

        return redirect()->route('admin.users.index')
            ->with('success', 'Usuario actualizado correctamente.');
    }

    /**
     * Delete a user (admin only).
     */
    public function destroy(User $user)
    {
        if (auth()->user()->role !== 'admin') {
            abort(403, 'Solo los administradores pueden eliminar usuarios.');
        }

        // Prevent self-deletion
        if (auth()->id() === $user->id) {
            return redirect()->route('admin.users.index')
                ->with('error', 'No puedes eliminar tu propia cuenta.');
        }

        $user->delete();

        return redirect()->route('admin.users.index')
            ->with('success', 'Usuario eliminado correctamente.');
    }

    /**
     * Quick AJAX toggle for status (kept for backward compatibility).
     */
    public function updateStatus(Request $request, User $user)
    {
        if (auth()->user()->role !== 'admin') {
            return response()->json(['message' => 'No autorizado.'], 403);
        }

        $request->validate([
            'is_active' => 'required|boolean',
        ]);

        $user->is_active = $request->is_active;
        $user->save();

        return response()->json(['message' => 'Estado actualizado correctamente.']);
    }
}
