const textOld = document.querySelector('.textOld')
const input = document.querySelector('#textUsers')
const textNew = document.querySelector('.textNew')

const buttonPush = document.querySelector('#push')
const buttonPop = document.querySelector('#pop')
const buttonShift = document.querySelector('#shift')
const buttonUnshift = document.querySelector('#unshift')
const buttonSplice = document.querySelector('#splice')
const buttonSlice = document.querySelector('#slice')
const buttonСoncat = document.querySelector('#concat')
const buttonIndexOf = document.querySelector('#indexOf')
const buttonIncludes = document.querySelector('#includes')
const buttonFind = document.querySelector('#find')
const buttonMap = document.querySelector('#map')
const buttonSort = document.querySelector('#sort')
const buttonReverse = document.querySelector('#reverse')
const buttonFilter = document.querySelector('#filter')

let lorem = ['арбуз', 'яблоко', 'грушка', 'виноград', 'чирешня', 'мармелад', 'шоколад', 'приники', 'чипсы']
textOld.innerHTML = 'Массив: ' + lorem

buttonPush.addEventListener('click', function () {
    const newElement = input.value
    lorem.push(newElement)
    textNew.innerHTML = lorem
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonPop.addEventListener('click', function () {
    textNew.innerHTML = lorem.pop()
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonShift.addEventListener('click', function () {
    textNew.innerHTML = lorem.shift()
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonUnshift.addEventListener('click', function () {
    const newElement = input.value
    lorem.unshift(newElement)
    textNew.innerHTML = lorem
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonSplice.addEventListener('click', function () {
    const newElement = input.value
    lorem.splice(1, 3, newElement)
    textNew.innerHTML = lorem
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonSlice.addEventListener('click', function () {
    textNew.innerHTML = 'Новый массив: ' + lorem.slice(2, 5)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonСoncat.addEventListener('click', function () {
    const newElement = input.value
    textNew.innerHTML = 'Новый массив: ' + lorem.concat(newElement)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonIndexOf.addEventListener('click', function () {
    const newElement = input.value
    textNew.innerHTML = 'Индех элемента, если он есть: ' + lorem.indexOf(newElement)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonIncludes.addEventListener('click', function () {
    const newElement = input.value
    textNew.innerHTML = 'Проверяет наличие введенного слова в массиве: ' + lorem.includes(newElement)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonIncludes.addEventListener('click', function () {
    const newElement = input.value
    textNew.innerHTML = 'Проверяет наличие введенного слова в массиве: ' + lorem.includes(newElement)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonFind.addEventListener('click', function () {
    const newElement = input.value
    textNew.innerHTML = 'Проверяет наличие введенного слова в массиве: ' + lorem.find(item => item == newElement)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonFilter.addEventListener('click', function () {
    const newElement = input.value
    textNew.innerHTML = 'Фильтр на длину слов в массиве не менее 6 букв: ' + lorem.filter(item => item.length >= 6)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonMap.addEventListener('click', function () {
    textNew.innerHTML = 'Выводит длину слов в массиве: ' + lorem.map(item => item.length)
    textOld.innerHTML = 'Массив: ' + lorem
})

buttonSort.addEventListener('click', function () {
    textOld.innerHTML = 'Массив: ' + lorem
    textNew.innerHTML = 'Отсортировал массив: ' + lorem.sort()
})

buttonReverse.addEventListener('click', function () {
    textOld.innerHTML = 'Массив: ' + lorem
    textNew.innerHTML = 'Реверс массива: ' + lorem.reverse()
})