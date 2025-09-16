# 🧑‍🤝‍🧑 Sorteo de Amigo Secreto

Este es un pequeño proyecto en JavaScript enfocado en mejorar habilidades de **lógica de programación** mediante una aplicación interactiva que permite:

- Agregar amigos a una lista (sin duplicados).
- Mostrar la lista de amigos en pantalla.
- Sortear aleatoriamente un amigo secreto.
- Reiniciar el juego.

## 🚀 Funcionalidades

### ✅ Agregar amigos
- Se ingresan nombres en un input de texto.
- Se valida que el campo no esté vacío.
- Se evita agregar nombres duplicados (ignorando mayúsculas/minúsculas).

### 📋 Mostrar amigos
- Los nombres se muestran en una lista `<ul>` dinámica.
- Cada vez que se agrega un nuevo amigo, la lista se actualiza.

### 🎁 Sortear un amigo secreto
- Solo se puede realizar el sorteo si hay **al menos dos** amigos en la lista.
- Se selecciona un amigo al azar y se muestra en pantalla.

### 🔁 Reiniciar el juego
- Vacía la lista de amigos y limpia los resultados del sorteo.

## 🧠 Tecnologías utilizadas

- HTML (estructura del DOM)
- JavaScript puro (sin frameworks)
- DOM API para manejar elementos HTML dinámicamente

## 💻 Cómo usar

1. Escribe el nombre de un amigo en el campo de entrada.
2. Haz clic en **"Agregar"** para sumarlo a la lista.
3. Una vez agregados al menos dos amigos, haz clic en **"Sortear"** para elegir aleatoriamente a uno como el amigo secreto.
4. Puedes hacer clic en **"Reiniciar"** para comenzar de nuevo.

## 📦 Estructura del proyecto (mínima esperada)

```plaintext
📁 proyecto-amigo-secreto
│
├─ index.html       // Interfaz HTML
├─ script.js        // Código JavaScript (tu código actual)
└─ README.md        // Este archivo
✍️ Autor
Desarrollado como ejercicio para fortalecer habilidades de lógica de programación y manipulación del DOM con JavaScript.
