import requests as req # Importamos la librería requests

def obtener_palabra():
    """
    Obtiene una palabra aleatoria de la API de palabras
    """
    url = "https://random-word-api.herokuapp.com/word?lang=es&number=1&length=5" # URL de la API de palabras
    palabra = req.get(url).json()[0] # Obtenemos la palabra aleatoria
    return normalizar_palabra(palabra) # Retornamos la palabra

def normalizar_palabra(palabra: str):
    """
    Normaliza una palabra para que sea válida en el juego
    """
    palabra = palabra.upper() # Convertimos la palabra a minúsculas
    palabra = palabra.replace("Á", "A") # Reemplazamos las vocales con tilde
    palabra = palabra.replace("É", "E")
    palabra = palabra.replace("Í", "I")
    palabra = palabra.replace("Ó", "O")
    palabra = palabra.replace("Ú", "U")
    palabra = palabra.replace("Ü", "U")
    return palabra # Retornamos la palabra normalizada