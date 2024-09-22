import io
import os

def crear_archivo():
    if not os.path.exists("palabras_usadas.txt"):
        with io.open("palabras_usadas.txt", "w", encoding="utf-8") as archivo:
            archivo.write("")

def registrar_palabra(palabra:str):
    with io.open("palabras_usadas.txt", "a", encoding="utf-8") as archivo:
        archivo.write(palabra + "\n")

def leer_palabras():
    with io.open("palabras_usadas.txt", "r", encoding="utf-8") as archivo:
        palabras = archivo.readlines()
    return [palabra.strip() for palabra in palabras]

def palabra_usada(palabra:str):
    palabras = leer_palabras()
    return palabra in palabras