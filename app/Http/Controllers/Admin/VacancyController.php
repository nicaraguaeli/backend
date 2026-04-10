<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vacancy;
use App\Models\Country; // agregado
use Intervention\Image\ImageManager;
use Intervention\Image\Laravel\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class VacancyController extends Controller
{

    protected $types = [
        'con_experiencia'       => 'Con experiencia',
        'sin_experiencia'       => 'Sin experiencia',
        'con_sin_experiencia'   => 'Con y sin experiencia',
        'disponibilidad_inmediata' => 'Disponibilidad inmediata',
    ];
    
    
    public function index(Request $request)
    {
        $query = Vacancy::orderByDesc('created_at');

        // Búsqueda por título o empresa
        if ($request->filled('q')) {
            $q = $request->input('q');
            $query->where(function ($qb) use ($q) {
                $qb->where('title', 'like', "%{$q}%")
                   ->orWhere('company', 'like', "%{$q}%");
            });
        }

        $perPage = (int) $request->get('per_page', 15);
        $vacancies = $query->paginate($perPage)->appends($request->query());

        return view('admin.vacancies.index', compact('vacancies'));
    }

    public function create()
    {
        // cargar ciudades en el controlador para el select
        
        $cities = Country::where('name', 'Nicaragua')
            ->firstOrFail()
            ->cities()
            ->orderBy('name')
            ->get();

        $vacancies_types = $this->types;
         
       
        return view('admin.vacancies.create', compact('cities', 'vacancies_types'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'           => 'required|string|max:255',
            'company'         => 'nullable|string|max:255',
            'city'            => 'nullable|string',
            'employment_type' => 'nullable|string|max:100',
            'description'     => 'nullable|string',
            'expires_at'      => 'required|date',
            'image_path'      => 'nullable|image|max:4096',
        ]);

        // Las vacantes nuevas se crean como activas por defecto
        $data['is_active'] = true;

        // Subida opcional de imagen
        if ($request->hasFile('image_path')) {
            $data['file_path'] = $request->file('image_path')->store('vacancies', 'public');
        }
        unset($data['image_path']); // no existe como columna

        Vacancy::create($data);

        return redirect()->route('admin.vacancies.index')->with('success', 'Vacante creada.');
    }

    public function edit(Vacancy $vacancy)
    {
        // cargar ciudades también para edición
        $cities = Country::where('name', 'Nicaragua')
        ->firstOrFail()
        ->cities()
        ->orderBy('name')
        ->get();
        
        $vacancies_types = $this->types;
        return view('admin.vacancies.edit', compact('vacancy', 'cities', 'vacancies_types'));
    }

    public function update(Request $request, Vacancy $vacancy)
    {
        $data = $request->validate([
            'title'           => 'required|string|max:255',
            'company'         => 'nullable|string|max:255',
            'city'            => 'nullable|string',
            'employment_type' => 'nullable|string|max:100',
            'description'     => 'nullable|string',
            'expires_at'      => 'required|date',
            'image_path'      => 'nullable|image|max:4096',
        ]);

        // Si se actualizó la fecha y ahora es futura o igual a hoy, activar automáticamente
        $data['is_active'] = \Carbon\Carbon::parse($data['expires_at'])->endOfDay()->isFuture();

        // Subida opcional de imagen (reemplaza la anterior)
        if ($request->hasFile('image_path')) {
            // Eliminar imagen anterior si existe
            if ($vacancy->file_path) {
                Storage::disk('public')->delete($vacancy->file_path);
            }
            $data['file_path'] = $request->file('image_path')->store('vacancies', 'public');
        }
        unset($data['image_path']);

        $vacancy->update($data);

        return redirect()->route('admin.vacancies.index')->with('success', 'Vacante actualizada.');
    }

    public function destroy(Vacancy $vacancy)
    {
        $vacancy->delete();
        return redirect()->route('admin.vacancies.index')->with('success', 'Vacante eliminada.');
    }
}
