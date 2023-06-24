import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
import toml from './data.toml'
import yaml from './data.yaml'
import json from './data.json5'

console.log(toml.title) // output `TOML Example`
console.log(toml.owner.name) // output `Tom Preston-Werner`
console.log(yaml.title) // output `YAML Example`
console.log(yaml.owner.name) // output `Tom Preston-Werner`
console.log(json.title) // output `JSON5 Example`
console.log(json.owner.name) // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div')
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack', '为中华之崛起而读书'], ' ')
  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  return element
}

document.body.appendChild(component())
