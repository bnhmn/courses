package kotlincourse.m_objects

data class Car(val brand: String, val model: String, var color: String = "black")

interface CarSerializer {
    fun serialize(car: Car): String
}


fun main() {
    val car = Car(brand = "VW", model = "Golf", color = "white")

    val serializers = listOf<CarSerializer>(
        /*
        - Anonymous Objects are like Anonymous Classes in Java.
        - Anonymous Objects are not Singletons! On repeated invocations, new instances are created.
         */
        object : CarSerializer {
            override fun serialize(car: Car): String {
                return """{"brand": "${car.brand}", "model": "${car.model}", "color": "${car.color}"}"""
            }
        },
        object : CarSerializer {
            override fun serialize(car: Car): String {
                return "${car.brand},${car.model},${car.color}"
            }
        }
    )

    println("$car\n")

    serializers.forEach { println(it.serialize(car)) }
}
