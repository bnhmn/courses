package kotlincourse.l_inheritance

/*
Multi level class inheritance
 */
abstract class AShape {
    abstract fun area(): Double
    abstract fun print()
}

open class ARectangle(val a: Number, val b: Number) : AShape() {    // Class must be declared 'open' to be extendable!
    override fun area(): Double = a.toDouble() * b.toDouble()
    override fun print() = println("ARectangle(a=$a, b=$b): ${this.area()} m²")
}

open class ASquare(a: Number) : ARectangle(a, a)


fun main() {
    val shapes = listOf(
        ARectangle(1, 2),
        ASquare(2),
    )
    shapes.forEach { it.print() }
}
