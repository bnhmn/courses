package kotlincourse.g_datatypes

fun main() {
    val anInt = 1
    var aLong = 1L

    aLong = anInt.toLong()  // There is no implicit type conversion!

    val aDouble = 1.0
    val aFloat = 1.0F
    val aByte: Byte = 1
    val aShort: Short = 1

    val aString = "This is a String"
    val aChar = 'A'
    val aBoolean = true

    val anything: Any = 1   // Any is the super type of all types
    val unit = Unit         // Unit is the void of Kotlin
    val nothing: Nothing    // Nothing can be used to indicate that a function does not return (i.e. infinite loop)
}
