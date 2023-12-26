import s from "./Title.module.css"

export default function Title(props) {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{props.title ?? "title"}<span>{props.lesson ?? 1}</span></h1>
    </div>
  )
}
