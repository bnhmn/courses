package kotlincourse.k_functions

fun multiply(numA: Int, numB: Int): Int = numA * numB       // Single line function (has an "Expression Body")
fun multiply(numA: Short, numB: Short) = numA * numB        // With Expression Bodys you can omit the return type

fun multiply(numA: Double, numB: Double): Double {          // Multi line function (has a "Block Body")
    return numA * numB
}

fun printHelloWorld() {                             // With Block Bodys a return type is required
    println("Hello World!")                         // Only if the Function returns nothing (Unit), it's optional
}

fun printHelloMe() = println("Hello Me!")           // Expression Bodys can call functions

fun printHello(name: String = "Me", greeting: String = "Hello") {   // Parameters can have default values
    println("$greeting $name!")
}

fun printHello(vararg names: String, greeting: String = "Hello") {  // Varargs example
    for (name in names) {
        println("$greeting $name!")
    }
}

fun concatArrays(numsA: IntArray, numsB: IntArray): IntArray {
    return intArrayOf(*numsA, *numsB)       // Using the spread operator * you can unpack Arrays
}


fun main() {
    printHelloWorld()
    printHelloMe()
    printHello("Max")
    printHello("Max", greeting = "Good Morning")            // Parameters can be passed via name in arbitrary order
    printHello(name = "John", greeting = "Good Morning")    // This is called "Named Arguments"
    printHello("Peter", "Robert", "Paul", greeting = "Good Day")
}
