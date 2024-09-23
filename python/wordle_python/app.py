import utility.obtener_palabra as op  # Importamos el módulo obtener_palabra
import api.palabras as palabras  # Importamos el módulo palabras
from flask import Flask, request, jsonify  # Importamos Flask, request y jsonify
from flasgger import Swagger  # Importamos Swagger
from flask_cors import CORS  # Importamos CORS

app = Flask(__name__)  # Creamos una instancia de Flask
Swagger(app)  # Creamos una instancia de Swagger
CORS(app)

palabra_dia = op.obtener_palabra()  # Obtenemos una palabra de 5 letras




@app.route("/wordle", methods=["POST"])  # Definimos la ruta del endpoint
def wordle():
    """
    Endpoint para jugar Wordle
    ---
    parameters:
      - name: palabra
        in: body
        required: true
        schema:
          type: object
          properties:
            palabra:
              type: string
            intento:
              type: integer
    responses:
      200:
        description: Resultado del intento
      400:
        description: Error en la solicitud
      401:
        description: La palabra no es válida. La palabra debe tener 5 letras
      402:
        description: Intento inválido. No puedes seguir jugando
      403:
        description: Intento inválido. El intento debe ser un número entero
    """
    global palabra_dia
    data = request.json
    palabra = data["palabra"]
    intento = data["intento"] if "intento" in data else 0
    if len(palabra) != 5:
        return jsonify({"error": "La palabra debe tener 5 letras"}), 401
    if not isinstance(intento, int):
        return jsonify({"error": "El intento debe ser un número entero"}), 403
    if palabras.puede_jugar(intento):
        resultado = palabras.intento(palabra.upper(), palabra_dia.upper(), intento)
        print(jsonify(resultado))
        return jsonify(resultado)
    else:
        return jsonify({"error": "No puedes seguir jugando"}), 402
    
print(palabra_dia)  # Imprimimos la palabra del día
if __name__ == "__main__":
    app.run(port=5000, debug=True)  # Ejecutamos la aplicación en el puerto 5000 con modo debug activado
