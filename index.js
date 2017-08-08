function getFirstSelector(selector) {
  var firstElement= document.querySelector(selector)
  return firstElement
}

function nestedTarget() {
  var nestedElement= document.querySelector('#nested .target')
  return nestedElement
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
}

function deepestChild() {
  var grandNode= document.querySelectorAll('#grand-node div')
  var deepest= grandNode[grandNode.length-1]
  return deepest
}
