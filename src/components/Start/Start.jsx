import s from "./Start.module.css"

import { NavLink } from "react-router"

function Start() {


  return (
      <section className={s.start}>
            <div className={s.content}>
                <h1 className={s.title}>ToDo list by KOVA</h1>
                <NavLink to="List" className={s.button}>Start</NavLink>
            </div>

             
      </section>
  )
}

export default Start
