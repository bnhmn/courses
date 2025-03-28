package kotlincourse.o_expressions

/*
In Kotlin, there is no ternary operator.

num % 2 == 0 ? "even" : "odd"

Instead, you have to use if as expression.
 */
fun main() {
    for (num in 1..3) {
        val evenOrOdd = if (num % 2 == 0) "even" else "odd"
        println("$num: $evenOrOdd")
    }

    // Return statement
    fun isEvenOrOdd(number: Int): String {
        return if (number % 2 == 0) "even" else "odd"
    }

    // As function argument
    println(if (1 == 2) "1 == 2" else "1 != 2")

    // In a String template
    val gender = "female"
    val salutation = "Dear ${if (gender == "male") "Mr" else "Mrs"} Jones"
    println(salutation)
}
