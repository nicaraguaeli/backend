<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class JournalistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // traer periodistas con contador de noticias relacionadas
        $journalists = Author::withCount('news')->orderBy('name')->paginate(25);

        return view('admin.journalists.index', compact('journalists'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.journalists.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:authors,email',
            'phone_number' => 'nullable|string|max:20',
            'bio' => 'nullable|string',
            'avatar' => 'nullable|image|max:2048',
            'type' => 'required|string|in:Periodista,Colaborador',
        ]);

        $data = $request->only('name', 'email', 'phone_number', 'bio', 'type');

        if ($request->hasFile('avatar')) {
            $data['avatar'] = $request->file('avatar')->store('avatars', 'public');
        }

        Author::create($data);

        return redirect()->route('admin.journalists.index')->with('success', 'Periodista creado con éxito.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Author $journalist)
    {
        return view('admin.journalists.edit', compact('journalist'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Author $journalist)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:authors,email,' . $journalist->id,
            'phone_number' => 'nullable|string|max:20',
            'bio' => 'nullable|string',
            'avatar' => 'nullable|image|max:2048',
            'type' => 'required|string|in:Periodista,Colaborador',
        ]);

        $data = $request->only('name', 'email', 'phone_number', 'bio', 'type');

        if ($request->hasFile('avatar')) {
            // Delete old avatar if it exists
            if ($journalist->avatar) {
                Storage::disk('public')->delete($journalist->avatar);
            }
            $data['avatar'] = $request->file('avatar')->store('avatars', 'public');
        }

        $journalist->update($data);

        return redirect()->route('admin.journalists.index')->with('success', 'Periodista actualizado con éxito.');
    }

    public function updateStatus(Request $request, Author $journalist)
    {
        $request->validate([
            'is_active' => 'required|boolean',
        ]);

        $journalist->is_active = $request->is_active;
        $journalist->save();

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'message' => 'Estado actualizado con éxito.']);
        }

        return redirect()->route('admin.journalists.index')->with('success', 'Estado actualizado con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Author $journalist)
    {
        // Detach from news
        $journalist->news()->detach();

        // Delete associated audio reports
        $journalist->audioReports()->delete();

        // Delete avatar file if exists
        if ($journalist->avatar) {
            Storage::disk('public')->delete($journalist->avatar);
        }

        $journalist->delete();

        if (request()->expectsJson()) {
            return response()->json(['success' => true, 'message' => 'Periodista eliminado con éxito.']);
        }

        return redirect()->route('admin.journalists.index')->with('success', 'Periodista eliminado con éxito.');
    }
}
