const textOld = document.querySelector('.textOld')
const input = document.querySelector('#textUsers')
const textNew = document.querySelector('.textNew')

const methods = ['#push', '#pop', '#shift', '#unshift', '#splice', '#slice', '#concat', '#indexOf', '#includes', '#find', '#map', '#sort', '#reverse', '#filter']
let lorem = ['арбуз', 'яблоко', 'грушка', 'виноград', 'чирешня', 'мармелад', 'шоколад', 'приники', 'чипсы']

textNew.innerHTML = lorem
textOld.innerHTML = 'Массив: ' + lorem

methods.forEach(item => {
    document.querySelector(item).addEventListener('click', function () {
        const newElement = input.value
        if (item === '#push') {
            textNew.innerHTML = lorem.push(newElement)
        } else if (item === '#pop') {
            textNew.innerHTML = lorem.pop()
        } else if (item === '#shift') {
            textNew.innerHTML = lorem.shift()
        } else if (item === '#unshift') {
            textNew.innerHTML = lorem.unshift(newElement)
        } else if (item === '#splice') {
            textNew.innerHTML = lorem.splice(1, 3, newElement)
        } else if (item === '#slice') {
            textNew.innerHTML = 'Новый массив: ' + lorem.slice(2, 5)
        } else if (item === '#concat') {
            textNew.innerHTML = 'Новый массив: ' + lorem.concat(newElement)
        } else if (item === '#indexOf') {
            textNew.innerHTML = 'Индех элемента, если он есть: ' + lorem.indexOf(newElement)
        } else if (item === '#includes') {
            textNew.innerHTML = 'Проверяет наличие введенного слова в массиве: ' + lorem.includes(newElement)
        } else if (item === '#find') {
            textNew.innerHTML = 'Проверяет наличие введенного слова в массиве: ' + lorem.find(item => item == newElement)
        } else if (item === '#map') {
            textNew.innerHTML = 'Выводит длину слов в массиве: ' + lorem.map(item => item.length)
        } else if (item === '#sort') {
            textNew.innerHTML = 'Отсортировал массив: ' + lorem.sort()
        } else if (item === '#reverse') {
            textNew.innerHTML = 'Реверс массива: ' + lorem.reverse()
        } else if (item === '#filter') {
            textNew.innerHTML = 'Фильтр на длину слов в массиве не менее 6 букв: ' + lorem.filter(item => item.length >= 6)
        }
        textOld.innerHTML = 'Массив: ' + lorem
    })
})