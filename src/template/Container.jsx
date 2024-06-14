const Container = (props) => {
  const Conclasses="container " + props.className
  return (
    <div className={Conclasses}>{props.children}</div>
  )
}
export default Container;