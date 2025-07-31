#  Espacio entrega final

Sistema de Gestión de Productos con Express y Firebase

## Instalación

1. Clonar el repositorio

2. Instalar las dependencias:

```shell
npm install
```

3. Copiar/renombrar .env.example como .env 

```shell
cp .env-example .env
```

4. Editar las variables del archivo `.env`


## Ejecutar el proyecto

```shell
npm run dev
```

## Documentacion de la API

### Obtener todos los productos

- **GET** `/api/products`
- **Descripcion:** Obtiene una lista de los productos.
- **Respuesta de ejemplo:**

```json
[
 {
    "id": "1",
    "nombre": "Auricular Genius Hs-02b",
    "precio": 8900,
    "descripcion": "El auricular Genius HS-02B 31710037100 es un modelo básico de auriculares con cable diseñado para ser utilizado en computadoras, laptops, tablets y otros dispositivos con conector de audio de 3.5mm.",
    "stock": 15
  },
  {
    "id": "2",
    "nombre": "Mouse Trust Gxt108 Rava Mouse",
    "precio": 14000,
    "descripcion": "El Trust GXT 108 Rava es un mouse óptico diseñado para gamers que buscan precisión y comodidad durante largas sesiones de juego.",
    "stock": 10
  }
]
```

### Buscar productos por nombre

- **GET** `/api/products/search?nombre=nombreproducto`
- **Descripcion:** Obtiene los productos cuyo nombre contiene la palabra nombreproducto.
- **Parámetros:**
    - `nombre` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplos de uso:** `/api/products/search?nombre=auricular`
- **Respuesta de ejemplo:**

```json
[
    {
        "id": "1",
        "nombre": "Auricular Genius Hs-02b",
        "precio": 8900,
        "descripcion": "El auricular Genius HS-02B 31710037100 es un modelo básico de auriculares con cable diseñado para ser utilizado en computadoras, laptops, tablets y otros dispositivos con conector de audio de 3.5mm.",
        "stock": 15
    }
]
```

### Obtener producto por ID

- **GET** `/api/products/:id`
- **Descripcion:** Devuelve un producto específico por su ID.
- **Parámetros:** 
    - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/api/products/1`
- **Respuesta de ejemplo:**

```json
[
    {
        "id": "1",
        "nombre": "Auricular Genius Hs-02b",
        "precio": 8900,
        "descripcion": "El auricular Genius HS-02B 31710037100 es un modelo básico de auriculares con cable diseñado para ser utilizado en computadoras, laptops, tablets y otros dispositivos con conector de audio de 3.5mm.",
        "stock": 15
    }
]
```

### Crear un producto

- **POST** `/api/products`
- **Descripción:** Crear un producto nuevo.
- **Body (JSON):**

```json
[
    {
        "nombre": "Auricular Genius Hs-02b",
        "precio": 8900,
        "descripcion": "El auricular Genius HS-02B 31710037100 es un modelo básico de auriculares con cable diseñado para ser utilizado en computadoras, laptops, tablets y otros dispositivos con conector de audio de 3.5mm.",
        "stock": 15
    }
]
```

- **Respuesta de ejemplo:**

```json
[
    {
        "id": "1",
        "nombre": "Auricular Genius Hs-02b",
        "precio": 8900,
        "descripcion": "El auricular Genius HS-02B 31710037100 es un modelo básico de auriculares con cable diseñado para ser utilizado en computadoras, laptops, tablets y otros dispositivos con conector de audio de 3.5mm.",
        "stock": 15
    }
]
```

### Eliminar un producto

- **DELETE** `/api/products/:id`
- **Descripcion:** Elimina un producto por su ID.
- **Parámetros:**
    - `id` (path, requerido): ID del producto a eliminar
- **Ejemplo de uso:** `/api/products/oY3K7Wzkcx2kEIzvPQoq`
- **Respuesta de ejemplo:**

```json
[
    {
        "id": "1",
        "nombre": "Auricular Genius Hs-02b",
        "precio": 8900,
        "descripcion": "El auricular Genius HS-02B 31710037100 es un modelo básico de auriculares con cable diseñado para ser utilizado en computadoras, laptops, tablets y otros dispositivos con conector de audio de 3.5mm.",
        "stock": 15
    }
]
```
