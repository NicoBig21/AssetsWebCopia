# Atajos de Vs Code

- Visualizar Markdown: `Ctrl + Shift + V`
- Generar interfaz de objeto en el portapapeles: `Ctrl + Shift + P` y escribir `paste json as code`

---

# Tipados de React

- `ReactNode:` Representa cualquier cosa que puede ser renderizada por React, incluyendo elementos JSX, strings, arrays, números, fragmentos, o null.

- `ReactElement:` Representa un elemento React específico, como <div /> o un componente definido por el usuario. Es más específico que ReactNode.

- `FC (FunctionComponent):` Tipado para componentes funcionales en React. Incluye automáticamente la tipificación para children.

- `JSX.Element:` Similar a ReactElement, representa el resultado de una función que retorna JSX, como un componente.

- `Dispatch:` Tipado para la función dispatch usada con useReducer. Generalmente se combina con la tipificación de las acciones.

- `useState:` Tipado para el hook useState, que maneja el estado en componentes funcionales. Acepta y devuelve un valor y una función de actualización con tipos específicos.

- `useReducer:` Similar a useState, pero para useReducer. Tipifica el estado y las acciones que el reducer manejará.

- `React.Context:` Tipado para el objeto de contexto creado con React.createContext. Define qué tipos de valores se pueden pasar a través del contexto.

- `PropsWithChildren:` Similar a FC, pero se utiliza cuando deseas definir tus propios tipos de props y necesitas incluir children.

- `SyntheticEvent:` Tipado para eventos en React, como eventos de clic o cambio. Es una abstracción sobre los eventos del navegador.