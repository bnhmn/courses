package kotlincourse.m_objects

/*
Object Orientation Challenge:

1. Convert Java classes Bicycle, MountainBike and RoadBike to Kotlin classes
2. Add a main() function, create a bicycle of each type and print their descriptions.
3. Make the gear parameter optional with a default value of 10.
4. Create three new bicycles without gears and print their descriptions.
5. Add a Companion object to the MountainBike class having a list availableColors=blue,red,white,black,green,brown.
6. Print the available colors in the main() function.
 */
open class Bicycle(var cadence: Int, var speed: Int, var gear: Int = 10) {
    fun applyBrake(decrement: Int) {
        speed -= decrement
    }

    fun speedUp(increment: Int) {
        speed += increment
    }

    open fun printDescription() {
        println("Bike is in gear $gear with a cadence of $cadence travelling at a speed of $speed km/h.")
    }
}

class MountainBike(var seatHeight: Int, cadence: Int, speed: Int, gear: Int = 10) : Bicycle(cadence, speed, gear) {
    override fun printDescription() {
        super.printDescription()
        println("The mountain bike has a seat height of $seatHeight inches.")
    }

    companion object {
        val availableColors = listOf("blue", "red", "white", "black", "green", "brown")
    }
}

class RoadBike(val tireWidth: Int, cadence: Int, speed: Int, gear: Int = 10) : Bicycle(cadence, speed, gear) {
    override fun printDescription() {
        super.printDescription()
        println("The road bike has a tire width of $tireWidth mm.")
    }
}

fun main() {
    println(
        """
        Bikes
        --------------------------
        """.trimIndent()
    )
    val bikes = listOf(
        Bicycle(cadence = 1, speed = 25, gear = 5),
        MountainBike(cadence = 1, speed = 20, gear = 3, seatHeight = 19),
        RoadBike(cadence = 1, speed = 10, gear = 1, tireWidth = 45),
    )
    bikes.forEach { it.printDescription() }

    println(
        """
            
        Bikes without gears
        --------------------------
        """.trimIndent()
    )
    val bikesWithoutGears = listOf(
        Bicycle(cadence = 1, speed = 25),
        MountainBike(cadence = 1, speed = 20, seatHeight = 19),
        RoadBike(cadence = 1, speed = 10, tireWidth = 45),
    )
    bikesWithoutGears.forEach { it.printDescription() }

    println(
        """
            
        Available colors
        --------------------------
        ${MountainBike.availableColors}
        """.trimIndent()
    )
}
