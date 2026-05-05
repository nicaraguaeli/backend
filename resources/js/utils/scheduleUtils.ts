export interface ScheduleItem {
    startH: number;
    startM: number;
    endH: number;
    endM: number;
    timeLabel: string;
    title: string;
    slogan: string;
    type: 'music' | 'news' | 'sports' | 'show';
}

export function toMinutes(h: number, m: number) {
    return h * 60 + m;
}

export const SCHEDULE: Record<string, ScheduleItem[]> = {
    Lunes: [
        { startH: 0, startM: 0, endH: 5, endM: 0, timeLabel: '12:00am – 05:00am', title: 'La radio que nunca duerme', slogan: 'Música continua', type: 'music' },
        { startH: 5, startM: 0, endH: 6, endM: 0, timeLabel: '05:00am – 06:00am', title: 'El Tempranero', slogan: 'Donde vos sos el primero', type: 'show' },
        { startH: 6, startM: 0, endH: 7, endM: 0, timeLabel: '06:00am – 07:00am', title: 'Noticias ABC', slogan: 'El radio informativo completo', type: 'news' },
        { startH: 7, startM: 0, endH: 8, endM: 0, timeLabel: '07:00am – 08:00am', title: 'Aquí entre nos', slogan: 'Para estar más cerca de vos', type: 'show' },
        { startH: 8, startM: 0, endH: 12, endM: 0, timeLabel: '08:00am – 12:00md', title: 'Cada mañana', slogan: 'La mañana de tu radio', type: 'show' },
        { startH: 12, startM: 0, endH: 12, endM: 40, timeLabel: '12:00md – 12:40md', title: 'Noticias ABC', slogan: 'El radio informativo completo', type: 'news' },
        { startH: 12, startM: 40, endH: 13, endM: 10, timeLabel: '12:40md – 01:10md', title: 'Deportivas ABC', slogan: 'Siempre en la jugada', type: 'sports' },
        { startH: 13, startM: 10, endH: 14, endM: 0, timeLabel: '01:10md – 02:00pm', title: 'Clásicos en inglés', slogan: 'Para usted', type: 'music' },
        { startH: 14, startM: 0, endH: 14, endM: 15, timeLabel: '02:00pm – 02:15pm', title: 'Una historia, una canción', slogan: 'Porque siempre hay una historia que nos llega directo al corazón', type: 'show' },
        { startH: 14, startM: 15, endH: 17, endM: 0, timeLabel: '02:15pm – 05:00pm', title: 'Tardes Románticas', slogan: 'La FM de tus sentimientos', type: 'music' },
        { startH: 17, startM: 0, endH: 19, endM: 0, timeLabel: '05:00pm – 07:00pm', title: 'Doble Hora Grupera', slogan: 'Hecha a tu manera', type: 'music' },
        { startH: 19, startM: 0, endH: 21, endM: 0, timeLabel: '07:00pm – 09:00pm', title: 'Espacio Ranchero y más', slogan: 'Más de tu música favorita', type: 'music' },
        { startH: 21, startM: 0, endH: 21, endM: 15, timeLabel: '09:00pm – 09:15pm', title: 'Una historia, una canción', slogan: 'Porque siempre hay una historia que nos llega directo al corazón', type: 'show' },
        { startH: 21, startM: 15, endH: 22, endM: 30, timeLabel: '09:15pm – 10:30pm', title: 'Ligaditas a tu recuerdo', slogan: 'Canciones inolvidables', type: 'music' },
        { startH: 22, startM: 30, endH: 24, endM: 0, timeLabel: '10:30pm – 12:00am', title: 'Clásicos en inglés', slogan: 'Para usted', type: 'music' },
    ],
    Martes: [
        { startH: 0, startM: 0, endH: 4, endM: 0, timeLabel: '12:00am – 04:00am', title: 'La radio que nunca duerme', slogan: 'Música continua', type: 'music' },
        { startH: 4, startM: 0, endH: 6, endM: 0, timeLabel: '04:00am – 06:00am', title: 'El Tempranero', slogan: 'Donde vos sos el primero', type: 'show' },
        { startH: 6, startM: 0, endH: 7, endM: 0, timeLabel: '06:00am – 07:00am', title: 'Noticias ABC', slogan: 'El radio informativo completo', type: 'news' },
        { startH: 7, startM: 0, endH: 8, endM: 0, timeLabel: '07:00am – 08:00am', title: 'Aquí entre nos', slogan: 'Para estar más cerca de vos', type: 'show' },
        { startH: 8, startM: 0, endH: 12, endM: 0, timeLabel: '08:00am – 12:00md', title: 'Cada mañana', slogan: 'La mañana de tu radio', type: 'show' },
        { startH: 12, startM: 0, endH: 12, endM: 40, timeLabel: '12:00md – 12:40md', title: 'Noticias ABC', slogan: 'El radio informativo completo', type: 'news' },
        { startH: 12, startM: 40, endH: 13, endM: 10, timeLabel: '12:40md – 01:10md', title: 'Deportivas ABC', slogan: 'Siempre en la jugada', type: 'sports' },
        { startH: 13, startM: 10, endH: 14, endM: 0, timeLabel: '01:10md – 02:00pm', title: 'Clásicos en inglés', slogan: 'Para usted', type: 'music' },
        { startH: 14, startM: 0, endH: 17, endM: 0, timeLabel: '02:00pm – 05:00pm', title: 'Tardes Románticas', slogan: 'La FM de tus sentimientos', type: 'music' },
        { startH: 17, startM: 0, endH: 19, endM: 0, timeLabel: '05:00pm – 07:00pm', title: 'Doble Hora Grupera', slogan: 'Hecha a tu manera', type: 'music' },
        { startH: 19, startM: 0, endH: 21, endM: 0, timeLabel: '07:00pm – 09:00pm', title: 'Espacio Ranchero y más', slogan: 'Más de tu música favorita', type: 'music' },
        { startH: 21, startM: 0, endH: 22, endM: 30, timeLabel: '09:00pm – 10:30pm', title: 'Ligaditas a tu recuerdo', slogan: 'Canciones inolvidables', type: 'music' },
        { startH: 22, startM: 30, endH: 24, endM: 0, timeLabel: '10:30pm – 12:00am', title: 'Clásicos en inglés', slogan: 'Para usted', type: 'music' },
    ],
    Viernes: [
        { startH: 0, startM: 0, endH: 5, endM: 0, timeLabel: '12:00am – 05:00am', title: 'La radio que nunca duerme', slogan: 'Música continua', type: 'music' },
        { startH: 5, startM: 0, endH: 6, endM: 0, timeLabel: '05:00am – 06:00am', title: 'El Tempranero', slogan: 'Donde vos sos el primero', type: 'show' },
        { startH: 6, startM: 0, endH: 7, endM: 0, timeLabel: '06:00am – 07:00am', title: 'Noticias ABC', slogan: 'El radio informativo completo', type: 'news' },
        { startH: 7, startM: 0, endH: 8, endM: 0, timeLabel: '07:00am – 08:00am', title: 'El arte de saber vivir', slogan: 'Con su amiga Hirtcia Parrilla', type: 'show' },
        { startH: 8, startM: 0, endH: 12, endM: 0, timeLabel: '08:00am – 12:00md', title: 'Cada mañana', slogan: 'La mañana de tu radio', type: 'show' },
        { startH: 12, startM: 0, endH: 12, endM: 40, timeLabel: '12:00md – 12:40md', title: 'Noticias ABC', slogan: 'El radio informativo completo', type: 'news' },
        { startH: 12, startM: 40, endH: 13, endM: 10, timeLabel: '12:40md – 01:10md', title: 'Deportivas ABC', slogan: 'Siempre en la jugada', type: 'sports' },
        { startH: 13, startM: 10, endH: 14, endM: 0, timeLabel: '01:10md – 02:00pm', title: 'Clásicos en inglés', slogan: 'Para usted', type: 'music' },
        { startH: 14, startM: 0, endH: 14, endM: 15, timeLabel: '02:00pm – 02:15pm', title: 'Una historia, una canción', slogan: 'Porque siempre hay una historia que nos llega directo al corazón', type: 'show' },
        { startH: 14, startM: 15, endH: 17, endM: 0, timeLabel: '02:15pm – 05:00pm', title: 'Viernes Romántico', slogan: 'La llamada del amor', type: 'show' },
        { startH: 17, startM: 0, endH: 18, endM: 0, timeLabel: '05:00pm – 06:00pm', title: 'Doble Hora Grupera', slogan: 'Hecha a tu manera', type: 'music' },
        { startH: 18, startM: 0, endH: 19, endM: 0, timeLabel: '06:00pm – 07:00pm', title: 'Viernes de bandas', slogan: 'Especial de bandas', type: 'music' },
        { startH: 19, startM: 0, endH: 21, endM: 0, timeLabel: '07:00pm – 09:00pm', title: 'Pedímela cantando', slogan: 'Si le hacés a la cantada, pedímela cantando', type: 'show' },
        { startH: 21, startM: 0, endH: 21, endM: 15, timeLabel: '09:00pm – 09:15pm', title: 'Una historia, una canción', slogan: 'Porque siempre hay una historia que nos llega directo al corazón', type: 'show' },
        { startH: 21, startM: 15, endH: 24, endM: 0, timeLabel: '09:15pm – 12:00am', title: 'Clásicos en inglés', slogan: 'Por fin es viernes – Especial de clásicos en inglés', type: 'music' },
    ],
    Sábado: [
        { startH: 0, startM: 0, endH: 5, endM: 0, timeLabel: '12:00am – 05:00am', title: 'La radio que nunca duerme', slogan: 'Música continua', type: 'music' },
        { startH: 5, startM: 0, endH: 8, endM: 0, timeLabel: '05:00am – 08:00am', title: 'Sábado en blanco y negro', slogan: 'Para que le pongás color a tu día', type: 'show' },
        { startH: 8, startM: 0, endH: 12, endM: 0, timeLabel: '08:00am – 12:00md', title: 'Sábado 7', slogan: 'Tu día diferente', type: 'show' },
        { startH: 12, startM: 0, endH: 16, endM: 0, timeLabel: '12:00md – 04:00pm', title: 'Ponele ganas a tu fin de semana', slogan: 'Programación sabatina', type: 'show' },
        { startH: 16, startM: 0, endH: 17, endM: 0, timeLabel: '04:00pm – 05:00pm', title: 'La Ruta 997', slogan: 'Conduciendo con vos', type: 'music' },
        { startH: 17, startM: 0, endH: 18, endM: 0, timeLabel: '05:00pm – 06:00pm', title: 'El sonidito caliente', slogan: 'Música continua', type: 'music' },
        { startH: 18, startM: 0, endH: 21, endM: 0, timeLabel: '06:00pm – 09:00pm', title: 'Antesala de Haga su fiesta en casa', slogan: 'Música y saludos', type: 'show' },
        { startH: 21, startM: 0, endH: 24, endM: 0, timeLabel: '09:00pm – 05:30am', title: 'Haga su fiesta en casa', slogan: 'Nosotros ponemos la música', type: 'show' },
    ],
    Domingo: [
        { startH: 5, startM: 30, endH: 6, endM: 45, timeLabel: '05:30am – 06:45am', title: 'Los Alegres de San José', slogan: 'El programa con mayor tradición', type: 'show' },
        { startH: 6, startM: 45, endH: 7, endM: 0, timeLabel: '06:45am – 07:00am', title: 'Jesús te ama', slogan: 'Un espacio de fe y reflexión', type: 'show' },
        { startH: 7, startM: 0, endH: 8, endM: 30, timeLabel: '07:00am – 08:30am', title: 'Épocas de oro', slogan: 'Donde el tiempo y la nostalgia se detienen', type: 'music' },
        { startH: 8, startM: 30, endH: 9, endM: 0, timeLabel: '08:30am – 09:00am', title: 'Recordando con los conjuntos nicaragüenses', slogan: 'Con Martín García', type: 'show' },
        { startH: 9, startM: 0, endH: 12, endM: 0, timeLabel: '09:00am – 12:00md', title: 'Programación dominical', slogan: 'Música y saludos', type: 'show' },
        { startH: 12, startM: 0, endH: 13, endM: 0, timeLabel: '12:00md – 01:00pm', title: 'Música del recuerdo a la carta', slogan: 'Buen provecho', type: 'music' },
        { startH: 13, startM: 0, endH: 14, endM: 0, timeLabel: '01:00pm – 02:00pm', title: 'Clásicos en inglés', slogan: 'Para usted', type: 'music' },
        { startH: 14, startM: 0, endH: 17, endM: 0, timeLabel: '02:00pm – 05:00pm', title: 'Espacio dominguero', slogan: 'Está como lo quiero', type: 'show' },
        { startH: 17, startM: 0, endH: 17, endM: 30, timeLabel: '05:00pm – 05:30pm', title: 'Las rancheras de siempre', slogan: 'Inolvidables', type: 'music' },
        { startH: 17, startM: 30, endH: 18, endM: 0, timeLabel: '05:30pm – 06:00pm', title: 'De dos en dos', slogan: 'Dos canciones con un mismo artista', type: 'music' },
        { startH: 18, startM: 0, endH: 19, endM: 0, timeLabel: '06:00pm – 07:00pm', title: 'El especial de tu artista favorito', slogan: 'Una hora con la música de tu artista, dúo o grupo favorito', type: 'music' },
        { startH: 19, startM: 0, endH: 24, endM: 0, timeLabel: '07:00pm – 05:00am', title: 'La radio que nunca duerme', slogan: 'Música continua', type: 'music' },
    ],
};

// Lunes = Miércoles, Martes = Jueves
SCHEDULE['Miércoles'] = SCHEDULE['Lunes'];
SCHEDULE['Jueves'] = SCHEDULE['Martes'];

export const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export function getTodayKey(): string {
    return DAY_NAMES[new Date().getDay()];
}

export function getCurrentProgram(items: ScheduleItem[]): ScheduleItem | null {
    const now = new Date();
    const nowMins = toMinutes(now.getHours(), now.getMinutes());
    return items.find(p => {
        const start = toMinutes(p.startH, p.startM);
        const end = p.endH === 24 ? 1440 : toMinutes(p.endH, p.endM);
        return nowMins >= start && nowMins < end;
    }) ?? null;
}
