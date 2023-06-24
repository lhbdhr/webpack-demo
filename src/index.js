import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
import Data from './data.xml'
import Seedbox from './seedbox.csv'
import config from './json.json'

function component() {
  const element = document.createElement('div')
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack', '为中华之崛起而读书'], ' ')
  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  console.log(Data)
  console.log(Seedbox)
  console.log(config)

  return element
}

document.body.appendChild(component())
