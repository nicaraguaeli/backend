<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión | Panel Administrativo</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            /* Background: Dark Blue to Indigo */
            background: linear-gradient(135deg, #002060 0%, #4B0082 100%);
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }
        
        .login-container {
            width: 100%;
            max-width: 420px;
            padding: 15px;
        }

        .card {
            background: rgba(255, 255, 255, 0.95);
            border: none;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            backdrop-filter: blur(10px);
            overflow: hidden;
            border-top: 5px solid #FFD700; /* Gold accent */
        }

        .card-header {
            background: transparent;
            border-bottom: none;
            padding: 2rem 2rem 1rem;
            text-align: center;
        }

        .logo-icon {
            margin-bottom: 1rem;
            display: flex;
            justify-content: center;
        }
        
        .logo-icon img {
            max-height: 100px;
            width: auto;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .card-header h3 {
            color: #002060; /* Dark Blue */
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .card-header p {
            color: #666;
            font-size: 0.9rem;
        }

        .card-body {
            padding: 1rem 2rem 2rem;
        }

        .form-floating > .form-control {
            border-radius: 10px;
            border: 1px solid #e1e1e1;
            padding-left: 1rem;
        }

        .form-floating > .form-control:focus {
            border-color: #FF8C00; /* Dark Orange focus */
            box-shadow: 0 0 0 0.25rem rgba(255, 140, 0, 0.15);
        }

        .form-floating > label {
            padding-left: 1rem;
            color: #888;
        }

        .btn-login {
            /* Button: Dark Blue to Dark Green */
            background: linear-gradient(to right, #002060, #006B3F);
            border: none;
            border-radius: 10px;
            padding: 0.8rem;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            margin-top: 1rem;
            color: white;
        }

        .btn-login:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 107, 63, 0.4);
            background: linear-gradient(to right, #002060, #004d2e);
        }

        .form-check-input:checked {
            background-color: #006B3F; /* Dark Green */
            border-color: #006B3F;
        }

        .forgot-password {
            color: #666;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s;
        }

        .forgot-password:hover {
            color: #FF0000; /* Red hover */
        }

        .input-group-text {
            background: transparent;
            border: none;
            color: #002060;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="card">
            <div class="card-header">
                <div class="logo-icon">
                    <img src="{{ asset('storage/avatars/logo.png') }}" alt="Logo">
                </div>
                <h3>Bienvenido</h3>
                <p>Ingresa a tu cuenta para continuar</p>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control @error('email') is-invalid @enderror" 
                               id="email" name="email" placeholder="nombre@ejemplo.com" 
                               value="{{ old('email') }}" required autocomplete="email" autofocus>
                        <label for="email">Correo Electrónico</label>
                        @error('email')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" class="form-control @error('password') is-invalid @enderror" 
                               id="password" name="password" placeholder="Contraseña" 
                               required autocomplete="current-password">
                        <label for="password">Contraseña</label>
                        @error('password')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label text-secondary" for="remember">
                                Recordarme
                            </label>
                        </div>
                        @if (Route::has('password.request'))
                            <a class="forgot-password" href="{{ route('password.request') }}">
                                ¿Olvidaste tu contraseña?
                            </a>
                        @endif
                    </div>

                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary btn-login">
                            <i class="fas fa-sign-in-alt me-2"></i> Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>