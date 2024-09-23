const url = 'http://localhost:5000/'

/**
 * Valida una palabra en el juego de Wordle.
 *
 * @param {string} palabra - La palabra que se desea validar.
 * @param {number} intento - El número de intento actual.
 * @returns {Promise<Object>} Un objeto que contiene el intento y la evaluación de la palabra.
 * @throws {Error} Si la petición falla o si la palabra o el intento no son válidos.
 */
const validarPalabra = async (palabra, intento) => {
    if (intento === null) {
        intento = 1;
    }
    const data = { palabra: palabra, intento: intento }
    const response = await fetch(`${url}/wordle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        result = await response.json();
        let validacionResult = {
            intento: result[0],
            evaluacion: result[1],
        };
        return validacionResult;
    }
    if (response.status === 400) {
        throw new Error('Error en la petición');
    }
    if (response.status === 401) {
        throw new Error('La palabra no es válida. La palabra debe tener 5 letras.');
    }
    if (response.status === 402) {
        throw new Error('Intento inválido. No puedes seguir jugando.');
    }
    if (response.status === 403) {
        throw new Error('Intento inválido. El intento debe ser un número entero');
    }
}

export { validarPalabra }