import s from "./List.module.css"



function List(props) {
    

  return (
      <section className={s.section}>
           
        <div className="container">
            Некс ID: {props.ListPage.NextId}
        </div>
             
      </section>
  )
}

export default List
