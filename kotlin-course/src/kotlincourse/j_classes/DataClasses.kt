package kotlincourse.j_classes

/**
 * A data class has default implementations for these methods:
 * - toString()
 * - equals()
 * - hashcode()
 * - copy()
 *
 * It can have additional properties and methods.
 * However, these will not be considered in the default implementations.
 */
data class Car(val brand: String, val model: String, var color: String = "black") {
    val brandAndModel get() = "$brand $model"
}

fun main() {
    val car1 = Car("Mercedes", "A-Class")
    val car2 = Car("Mercedes", "A-Class")
    val car3 = car1.copy(model = "C-Class")

    println("car1: $car1")
    println("car2: $car2")
    println("car3: $car3")
    println("car1 == car2: ${car1 == car2}")
    println("car1 == car3: ${car1 == car3}")
    println("car1 == car1.copy(): ${car1 == car1.copy()}")
    println("car1: ${car1.brandAndModel}")
}
