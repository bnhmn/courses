package kotlincourse.h_arrays

fun main() {
    val numbers = arrayOf(1, 2, 3)  // arrayOf<Int>(1, 2, 3)
    val names = arrayOf("John", "Jane", "Jill", "Joe")
    val empty = emptyArray<String>()
    println(numbers.contentToString())
    println(names.contentToString())
    println(empty.contentToString())
    println("${numbers[0]}; ${names[0]}\n")

    val allNums = Array(10) { i -> i }
    val allZero = Array(10) { 0 }
    val evenNums = Array(10) { i -> 2 * i }
    println(allNums.contentToString())
    println(allZero.contentToString())
    println(evenNums.contentToString() + "\n")

    for (num in allNums) {
        print("$num, ")
    }
    println("\n")

    val mixed = arrayOf(1, 2, "John", 'J', 3.0)
    println("${mixed.contentToString()}\n")

    // Use IntArray, DoubleArray, etc. to call Java code / for better performance
    // Use toTypedArray() and toIntArray() methods to convert between special and typed Arrays.
    val integers = intArrayOf(1, 2, 3)
    val doubles = doubleArrayOf(1.0, 2.0, 3.0)
    val zeros = IntArray(3)
    println(integers.contentToString())
    println(doubles.contentToString())
    println(zeros.contentToString())
}
