package kotlincourse.n_forloop

/*
In Kotlin, there are no traditional for loops:

for (int i = 1; i <= 3; i++) {
    System.out.println(i)
}

Instead, you have to loop over Iterables/Ranges.
 */
fun main() {
    val numRange = 1..3
    val string = "ABC"
    val names = arrayOf("Max", "Anna", "John")

    for (num in numRange) {
        println("num: $num")
    }
    for (char in string) {
        println("char: $char")
    }
    for (name in names) {
        println("name: $name")
    }
    // Same as
    names.forEach { println("name: $it") }

    // Loop over indices
    for (index in names.indices) {
        println("name $index = ${names[index]}")
    }
    // Same as
    names.forEachIndexed { index, name -> println("name $index = $name") }
}
