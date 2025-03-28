package kotlincourse.j_classes

/*
Enums in Kotlin == Enums in Java
 */
enum class HttpStatus(val code: Int) {
    OK(200),
    BAD_REQUEST(401),
    SERVER_ERROR(500);  // Insert a semikolon after the last enum member!

    override fun toString(): String {
        return "$code - $name"
    }
}

fun main() {
    println(HttpStatus.OK)
    println(HttpStatus.BAD_REQUEST)
    println(HttpStatus.SERVER_ERROR)
}
