package kotlincourse.e_strings

fun main() {
    // String Templates (String interpolation)
    val template = "String Template"
    println("This is a $template")
    println("This is not a \$template")
    println("1 + 2 = ${1 + 2}")

    // Raw Strings
    val filePathA = "C:\\\\Users\\benja\\Desktop"
    val filePathB = """C:\\Users\benja\Desktop"""
    val multiline = """
        <p>
        This is still a $template.
        1 + 2 = ${1 + 2}
        </p>
    """.trimIndent()
    println(multiline)
}
