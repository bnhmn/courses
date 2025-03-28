package kotlincourse.j_classes

const val MAX_SIZE = 100    // Use const keywords for constants. const variables will be initialized at compile-time.
const val HOST = "google.de"
const val USERNAME = "admin"

/*
 Like val, variables defined with the const keyword are immutable.
 The difference here is that const is used for variables that are known at compile-time.

 Declaring a variable const is much like using the static keyword in Java.

 The Kotlin compiler inlines the const val values into the locations where they’re used.
 This is more efficient than using mutable variables.
 */
fun main() {
    println("This URL is built at compile time: https://www.$HOST/images")
}

