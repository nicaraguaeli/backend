@extends('adminlte::page')

@section('title', 'Usuarios')

@section('content_header')
    <h1>Usuarios</h1>
@stop

@section('css')
<style>
    .custom-control-label::before {
        border-radius: 0.25rem;
    }

    .custom-control-label::after {
        border-radius: 0.25rem;
    }
</style>
@stop

@section('content')
    <div class="card">
       
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Role </th> 
                        <th>Estado de la cuenta</th>
                        <th colspan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->role }}</td>
                            <td>
                                <!-- Bootstrap 4 custom switch -->
                                <div class="custom-control custom-switch">
                                    <input type="checkbox"
                                           class="custom-control-input user-status-toggle"
                                           id="statusSwitch{{ $user->id }}"
                                           data-user-id="{{ $user->id }}"
                                           {{ $user->status == 'active' ? 'checked' : '' }}>
                                    <label class="custom-control-label" for="statusSwitch{{ $user->id }}"></label>
                                </div>
                            </td>
                            
                            <td width="10px">
                                <form action="{{ route('admin.users.destroy', $user) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@stop

@section('js')
<script>
    $(document).ready(function() {
        $('.user-status-toggle').change(function() {
            var userId = $(this).data('user-id');
            var status = $(this).is(':checked') ? 'active' : 'inactive';

            $.ajax({
                url: '/admin/users/' + userId + '/status',
                type: 'PATCH',
                data: {
                    _token: '{{ csrf_token() }}',
                    status: status
                },
                success: function(response) {
                    console.log(response);
                },
                error: function(xhr) {
                    console.log(xhr.responseText);
                }
            });
        });
    });
</script>
@stop
