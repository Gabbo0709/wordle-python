# Lógica de negocio para el juego Wordle
# Funciones que serán llamadas por los endpoints de la API en app.py

def validar_palabra(entrada: str, palabra: str) -> tuple:
    """
    Valida la palabra ingresada por el usuario
    :param entrada: Palabra ingresada por el usuario
    :param palabra: Palabra a adivinar
    :return: Tupla con las posiciones correctas, incorrectas y no encontradas de la palabra ingresada
    """
    # Inicializa el resultado con -1 para cada posición
    resultado = [-1] * len(entrada)

    # Cuenta las apariciones de cada letra en la palabra a adivinar
    apariciones_palabra_dia = {letra: palabra.count(letra) for letra in set(palabra)}
    # Inicializa un diccionario para llevar el conteo de letras analizadas en la entrada
    analizado_entrada = {letra: 0 for letra in set(entrada)}

    # Marcar letras correctas
    for i, letra in enumerate(entrada):
        if letra == palabra[i]:
            resultado[i] = 1
            analizado_entrada[letra] += 1

    # Marcar letras incorrectas o en posiciones incorrectas
    for i, letra in enumerate(entrada):
        if resultado[i] == -1:
            if letra in apariciones_palabra_dia and analizado_entrada[letra] < apariciones_palabra_dia[letra]:
                resultado[i] = 0
                analizado_entrada[letra] += 1

    return tuple(resultado)





    return resultado

def intento(entrada: str, palabra: str, intento: int) -> list:
    """
    Realiza un intento de adivinanza.

    :param entrada: Palabra ingresada por el usuario.
    :param palabra: Palabra a adivinar.
    :param intento: Número de intento.
    :return: Lista con el resultado del intento.
    """
    validacion = validar_palabra(entrada, palabra)
    resultado = [intento + 1, validacion]
    return resultado

def puede_jugar(intento: int) -> bool:
    """
    Permite al jugador seguir realizando intentos mientras no haya llegado al límite de intentos
    :param intento: Número de intento actual
    :return: True si el jugador puede seguir jugando, False si ha llegado al límite de intentos
    """
    return intento < 5