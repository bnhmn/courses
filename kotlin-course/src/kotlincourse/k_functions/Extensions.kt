package kotlincourse.k_functions

import java.time.Instant
import java.time.ZoneId.of
import java.time.format.DateTimeFormatter

// Extension Functions
fun Instant.isoDate(): String = DateTimeFormatter.ISO_DATE.withZone(of("UTC")).format(this)
fun Instant.isoDateTime(): String = this.toString()     // "this" is optional here

fun List<Int>.evens() = this.filter { it % 2 == 0 }
fun List<Int>.odds() = this.filter {it % 2 == 1}

// Extension Properties
val Instant.isoDate
    get() = this.isoDate()
val Instant.isoDateTime
    get() = this.isoDateTime()

/*
- You can only invoke an Extension Function if it is imported into the current Kotlin file.
- Extension Function invocations are statically bound by the Compiler
  (in contrast to class methods which are dynamically bound).
 */
fun main() {
    val now = Instant.now()
    println(now.isoDate())
    println(now.isoDate)
    println(now.isoDateTime())
    println(now.isoDateTime + "\n")

    val numbers = listOf(1, 2, 3)
    println(numbers)
    println("Even: ${numbers.evens()}")
    println("Odd:  ${numbers.odds()}")
}
