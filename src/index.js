import _ from 'lodash'

function component() {
  const element = document.createElement('div')
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack', '为中华之崛起而读书'], ' ')

  return element
}

document.body.appendChild(component())
