enum STATUS {
    Success = 1,
    Error = -1,
    Warning = -2
}

enum STATUS_MESSAGES {
    Success = 'La operación se ejecutó correctamente',
    Error = 'Ocurrio un error',
    Warning = ''
}


export class Enumerador {
    static STATUS = STATUS;
    static STATUS_MESSAGES = STATUS_MESSAGES;
}

