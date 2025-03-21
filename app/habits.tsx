
type Habits = {

    title: string;

    description: string;

}

type HabitsProps = {

    habits: Habits[];

}

export default function Habits() {
  return(
      <div>
          <h1>Lista de Hábitos</h1>
          <ul>
              <li>Leer</li>
              <li>Ejercicio</li>
              <li>Meditacion</li>
              <li>Estudiar Ingles</li>
              <li>Orar</li>
              <li>Escribir</li>
          </ul>
      </div>
  )
}

