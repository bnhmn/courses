package kotlincourse.n_forloop

import java.time.LocalDate.parse

fun main() {
    for (num in 0..10) {        // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        println("up: $num")
    }
    for (num in 0..10 step 2) { // 0, 2, 4, 6, 8, 10
        println("up step 2: $num")
    }
    for (num in 0 until 10) {   // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        println("until: $num")
    }
    for (num in 10 downTo 0) {  // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
        println("down: $num")
    }

    // Ranges can be assigned to variables
    val numberRange = 0..10
    val numberRangeStep = 0.rangeTo(10).step(2)
    val numberRangeUntil = 0.until(10)
    val numberRangeDown = 10.downTo(0)
    val numberRangeReversed = numberRange.reversed()

    // Ranges can be of any Comparable type
    val charRange = 'a'..'z'
    val stringRange = "ABC".."XYZ"
    val dateRange = parse("2020-01-01")..parse("2020-12-31")

    // You can check if an element is inside a range
    // (x in range a..b) returns true if (x >= a && x <= b)
    require(3 in numberRange)
    require('b' in charRange)
    require('@' !in charRange)
    require("ABC" in stringRange)
    require("XXXXXXXXXX" in stringRange)    // XXXXXXXXXX > XYZ in dictionary order
    require(parse("2020-06-01") in dateRange)
}
