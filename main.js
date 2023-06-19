
export const makeUpperCase = string => {
    return typeof string !== 'number' ? string.toUpperCase() : 'Numbers are not an acceptable argument'
}

export const reverseWords = string => {

    return string.split(' ').reverse().join(' ');
}
console.log(reverseWords('hello world'));

// export const removeVowels = string => {
//     let vowel = 'aeiou';
//     const arr = string.split('')
//     arr.forEach((item, index, array) => vowel.includes(item.toLowerCase()) ? array.splice(index, 1) : item)
//     return arr.join('')
// }
// console.log(removeVowels('efOsaisU'));