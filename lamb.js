// lyrics
// remove punctuation and space.
const rawLyrics =
  "Mary had a little lamb, little lamb, little lamb. Mary had a little lamb, whose fleece was white as snow. And everywhere that Mary went, Mary went, Mary went, and everywhere that Mary went the lamb was sure to go!"
const punctuation = /[!.,]/g
const lyrics = rawLyrics.replace(punctuation, "").toLowerCase().split(" ")
// console.log(lyrics)

// order by first alphabet
const orderByAlphabet = lyrics.sort()
console.log("orderByAlphabet:", orderByAlphabet)

// order by count
// use the reduce method to manipulate lyrics array, and set the parameter song as an empty object initially.
// recorded as 1 when the word is iterated at the first time.
// increase count when the word appears again.
const wordsCount = lyrics.reduce((song, word) => {
  if (word in song) {
    song[word]++
  } else {
    song[word] = 1
  }
  return song
}, {})
console.log("count of each word:", wordsCount)

// the wordsCount return an object, but we need an array to use the map method,
// so we create the wordsCountArr to push each item into it.
let wordsCountArr = []
for (let word in wordsCount) {
  let item = { index: word, value: wordsCount[word] }
  wordsCountArr.push(item)
}

// create a function to sort each word by its count.
function sortByCount(a, b) {
  return b.value - a.value
}
// console.log(wordsCountArr.sort(sortByCount))

// show words only and remove duplicates.
const orderByCount = wordsCountArr.map((item) => Object.values(item)[0])
console.log("orderByCount:", orderByCount)
