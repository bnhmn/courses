package kotlincourse.l_inheritance

import kotlin.math.PI
import kotlin.math.pow

/*
You have to declare a class as 'open' or 'abstract', else you cannot extend it!

class Shape             ✖
data class Shape        ✖   Data classes can extend other classes, but cannot be extended themselves

open class Shape        ✔
abstract class Shape    ✔
interface Shape         ✔
 */
abstract class Shape {
    abstract fun area(): Double

    // You have to explicitly declare a method 'open' or 'abstract', else you cannot override it!
    open fun print() = println("Area: ${this.area()} m²")
}

class Square(val a: Number) : Shape() {                     // Must call super constructor
    override fun area(): Double = a.toDouble().pow(2)       // Must use 'override' keyword when overriding functions
    override fun print() = println("Square(a=$a): ${this.area()} m²")
}

class Circle(val r: Number) : Shape() {
    override fun area(): Double = PI * r.toDouble().pow(2)
    override fun print() = println("Circle(r=$r): ${this.area()} m²")
}

fun main() {
    val shapes = listOf(
        Square(2),
        Circle(1),
    )
    shapes.forEach { it.print() }
}
