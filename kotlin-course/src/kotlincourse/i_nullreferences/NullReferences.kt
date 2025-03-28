package kotlincourse.i_nullreferences

fun printName1(name: String?) {
    // Safe call operator ?.
    // When (name == null) => (name?.uppercase() == null)
    println(name?.uppercase())
}

fun printName2(name: String?) {
    // Set default value using Elvis operator ?:
    // When (name == null) => (safeName = "No name :(")
    val safeName = name ?: "No name :("
    println(safeName.uppercase())
}

fun main() {
    printName1("Max")
    printName2("Max")
    printName1(null)
    printName2(null)
    println()

    val name: String? = "Max"
    println(name!!.uppercase()) // Non-null assertion (throws NullPointerException if null)
    println(name as? Number)    // Safe cast operator. Returns Number or null
    println()
}
