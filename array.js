array1=["home","sweet","home","hello","world","baabtra"]
array2=["fruits","apple","mango","grape","pappaya","orange"]
// x=array1
// console.log(x)

// array1.pop()
// y=array1
//  console.log(y)

// array2.push("banana")
// console.log(array2)

// array2.shift()
// console.log(array2)

// array2.unshift("mellon")
// console.log(array2)

// delete array2[1]
// console.log(array2)

// x=array2.length
// console.log(x)

// z=array1.concat(array2)
// console.log(z)


array2.splice(2,2,"cat","hen")
console.log(array2)

// slice first 2 elements of array
x=array1.slice(2)
console.log(x)

// to slice elements b/w 1&4
y=array2.slice(1,4)   
console.log(y)

array2.toString()
console.log(array2)

st="color of apple is red"

console.log(st.length)

y=st.toUpperCase()
console.log(y)
l=y.toLowerCase()
console.log(l)

s=st.slice(-5,-2)
console.log(s)

sb=st.substring(2,5)
console.log(sb)

// display 7 elements starting from 3 
sr=st.substr(3,7)
console.log(sr)

rp=st.replace("apple","plum")
console.log(rp)

q="fruits"
x1=st.concat("    ",q)
console.log(x1)
t="       apple banana     "
tr=t.trim()
console.log(tr)

sp=st.split(" ")
console.log(sp)



