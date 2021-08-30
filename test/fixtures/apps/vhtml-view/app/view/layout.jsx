const h = require("vhtml")

function Layout(props){
  return <div title={props.title}>{props.children}</div>
}

module.exports = Layout