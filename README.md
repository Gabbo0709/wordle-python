# wordle-python
Juego de palabras estilo wordle. Se utilizará Python 3, Flask, JavaScript, CSS3 y HTML5

## Requisitos

### API (Python)
- Python 3
- Flask

### App web
- HTML5
- CSS3
- JavaScript

### Python:

- Generar una palabra aleatoria de 5 letras.
- Recibir una palabra del usuario.
- Validar la entrada del usuario.
- Retornar resultado de la validación.
    - Letras correctas en su posición.
    - Letras correctas en posición incorrecta.
    - Letras incorrectas.
    - Fin del juego. (victoria o derrota).
- Contar los intentos del usuario.
- Mostrar los intentos del usuario.

- Condición de victoria: Todas las letras correctas en su posición.
- Condición de derrota: 5 intentos fallidos.

### App web:

- Interfaz gráfica.
- Input para ingresar la palabra.
- Botón para enviar la palabra.
- Mostrar resultado de la validación.
- Mostrar intentos del usuario.
- Mostrar mensaje de victoria o derrota.

## Ciclo de vida

1. El usuario ingresa a la página.
2. Se genera una palabra aleatoria.
3. El usuario ingresa una palabra.
4. Se valida la palabra.
5. Se muestra el resultado de la validación.
6. Se muestra los intentos del usuario.
7. Se repiten los pasos 3 al 6 hasta que el usuario gane o pierda.

