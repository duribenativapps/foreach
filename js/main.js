var frutas = [
    {'nombre': 'Manzana', 'color': 'verde'},
    {'nombre': 'Mango', 'color': 'marillo'},
    {'nombre': 'Pera', 'color': 'verde'},
    {'nombre': 'Uva', 'color': 'morado'},
    {'nombre': 'Mamon', 'color': 'verde'},
    {'nombre': 'Cereza', 'color': 'roja'},
    {'nombre': 'Piña', 'color': 'amarillo'},
    {'nombre': 'Mora', 'color': 'morado'},
    {'nombre': 'Ciruela', 'color': 'roja'},
    {'nombre': 'Gauanabana', 'color': 'verde'},
    {'nombre': 'Papaya', 'color': 'naranjado'},
    {'nombre': 'Melon', 'color': 'amarillo'},
    {'nombre': 'Guayaba', 'color': 'amarillo'},
    {'nombre': 'Fresa', 'color': 'roja'},
    {'nombre': 'Limon', 'color': 'verde'},
    {'nombre': 'Naranja', 'color': 'naranjado'},
    {'nombre': 'Maracuya', 'color': 'amarillo'},
    {'nombre': 'Tomate de arbol', 'color': 'naranjado'},
    {'nombre': 'Frambuesa', 'color': 'roja'},
    {'nombre': 'Banano', 'color': 'amarillo'},
]

frutas.forEach(fruta => {
    console.log("La fruta "+fruta.nombre+" es de color "+fruta.color)
});