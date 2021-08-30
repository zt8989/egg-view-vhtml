const h = require("vhtml")
const Layout = require("./layout")

function Index(props){
  return <Layout title={props.title}>hello {props.data}</Layout>
}

module.exports = Index