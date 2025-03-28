package kotlincourse.m_objects

/*
In Kotlin, there are no static properties and functions.

If you want to add fields bound to the class not to an instance, you have to implement
the Companion object.
 */
enum class HttpStatus(val code: Int) {
    OK(200),
    BAD_REQUEST(401),
    SERVER_ERROR(500);

    override fun toString(): String {
        return "$code - $name"
    }

    companion object {
        private val statuses = values().associateBy { it.code }

        fun ofCode(code: Int): HttpStatus? {
            return statuses[code]
        }
    }
}

fun main() {
    println(HttpStatus.ofCode(200))
    println(HttpStatus.ofCode(401))
    println(HttpStatus.ofCode(500))
}
