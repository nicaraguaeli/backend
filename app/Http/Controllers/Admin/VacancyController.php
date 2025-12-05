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
        'full_time' => 'Tiempo Completo',
        'part_time' => 'Medio Tiempo',
        'contract' => 'Contrato',
        'internship' => 'Pasantía',
        'temporary' => 'Temporal',
        'project' => 'Por proyecto',
    ];
    
    
    public function index(Request $request)
    {
        $perPage = (int) $request->get('per_page', 15);
        $vacancies = Vacancy::orderByDesc('created_at')->paginate($perPage);

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
            'title' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'city' => 'nullable|string', // location guarda city_id
            'employment_type' => 'nullable|string|max:100',
            'description' => 'nullable|string',
            'expires_at' => 'required|date|after:today',


        ]);

        Vacancy::create($data);

        return redirect()->route('admin.vacancies.index')->with('success', 'Vacante creada.');
    }

    public function edit(Vacancy $vacancy)
    {
        // cargar ciudades también para edición
        $cities = City::orderBy('name')->get();
        return view('admin.vacancies.edit', compact('vacancy', 'cities'));
    }

    public function update(Request $request, Vacancy $vacancy)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'location' => 'nullable|exists:cities,id',
            'type' => 'nullable|string|max:100',
            'description' => 'nullable|string',
            'salary' => 'nullable|string|max:100',
            'is_active' => 'nullable|boolean',
        ]);

        $data['is_active'] = $request->has('is_active') ? (bool) $request->input('is_active') : false;

        $vacancy->update($data);

        return redirect()->route('admin.vacancies.index')->with('success', 'Vacante actualizada.');
    }

    public function destroy(Vacancy $vacancy)
    {
        $vacancy->delete();
        return redirect()->route('admin.vacancies.index')->with('success', 'Vacante eliminada.');
    }
}
