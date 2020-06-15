const textOld = document.querySelector('.textOld')
const input = document.querySelector('#textUsers')
const textNew = document.querySelector('.textNew')
const mass = document.querySelector('form')

let lorem = ['арбуз', 'яблоко', 'грушка', 'виноград', 'чирешня', 'мармелад', 'шоколад', 'приники', 'чипсы']

textNew.innerHTML = lorem
textOld.innerHTML = 'Массив: ' + lorem

mass.addEventListener('click', function (e) {
    e.preventDefault()
    const newElement = input.value
    if (e.target.id === 'push') {
        textNew.innerHTML = lorem.push(newElement)
    } else if (e.target.id === 'pop') {
        textNew.innerHTML = lorem.pop()
    } else if (e.target.id === 'shift') {
        textNew.innerHTML = lorem.shift()
    } else if (e.target.id === 'unshift') {
        textNew.innerHTML = lorem.unshift(newElement)
    } else if (e.target.id === 'splice') {
        textNew.innerHTML = lorem.splice(1, 3, newElement)
    } else if (e.target.id === 'slice') {
        textNew.innerHTML = 'Новый массив: ' + lorem.slice(2, 5)
    } else if (e.target.id === 'concat') {
        textNew.innerHTML = 'Новый массив: ' + lorem.concat(newElement)
    } else if (e.target.id === 'indexOf') {
        textNew.innerHTML = 'Индех элемента, если он есть: ' + lorem.indexOf(newElement)
    } else if (e.target.id === 'includes') {
        textNew.innerHTML = 'Проверяет наличие введенного слова в массиве: ' + lorem.includes(newElement)
    } else if (e.target.id === 'find') {
        textNew.innerHTML = 'Проверяет наличие введенного слова в массиве: ' + lorem.find(item => item == newElement)
    } else if (e.target.id === 'map') {
        textNew.innerHTML = 'Выводит длину слов в массиве: ' + lorem.map(item => item.length)
    } else if (e.target.id === 'sort') {
        textNew.innerHTML = 'Отсортировал массив: ' + lorem.sort()
    } else if (e.target.id === 'reverse') {
        textNew.innerHTML = 'Реверс массива: ' + lorem.reverse()
    } else if (e.target.id === 'filter') {
        textNew.innerHTML = 'Фильтр на длину слов в массиве не менее 6 букв: ' + lorem.filter(item => item.length >= 6)
    }
    textOld.innerHTML = 'Массив: ' + lorem
})