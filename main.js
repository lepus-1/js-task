var todoInput = document.getElementById('product')
var todoPrice = document.getElementById('price')
var addTodoBtn = document.getElementById('add-todo')
var todoList = document.getElementById('todo-list')
var  result= document.getElementById('result')
var  sumbox = document.getElementById('sumbox')


var todos = []

var renderAllItem = () => {
  todoList.innerHTML = ''
  todos.forEach(function (todo) {
    var li = document.createElement('li')
    var div1 = document.createElement('div')
    var div2 = document.createElement('div')
    div1.innerText = todo.product
    div2.innerText = todo.price

    li.appendChild(div1)
    li.appendChild(div2)
    li.classList.add('object')
    div1.classList.add('prod')
    
    // li.innerText = ` ${todo.product}  ${todo.price}`
    todoList.appendChild(li)
      
  })
  product.value = ''
  price.value = ''
}

var handleButtonClick = () => {
  var inputValue = todoInput.value
  var inputPrice = todoPrice.value
  if (inputValue !== ""  && inputPrice !== ""){
  todos.push({ product:inputValue, price:inputPrice })}
  renderAllItem()
}

var resultPrice = () => {
   var sum = 0;
   todos.forEach((todo) => {
    sum += parseInt(todo.price)
   })
   sumbox.innerText = `გადასახდელი ${sum} ლარი`
} 

addTodoBtn.addEventListener('click', handleButtonClick)
result.addEventListener('click', resultPrice)