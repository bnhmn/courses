package kotlincourse.l_inheritance

data class Car(val brand: String, val model: String, var color: String = "black")

interface CarSerializer {
    val format: String  // Abstract Property
    fun serialize(car: Car): String
}

class JsonCarSerializer : CarSerializer {
    override val format = "json"
    override fun serialize(car: Car): String {
        return """{"brand": "${car.brand}", "model": "${car.model}", "color": "${car.color}"}"""
    }
}

class CsvCarSerializer : CarSerializer {
    override val format = "csv"
    override fun serialize(car: Car): String {
        return "${car.brand},${car.model},${car.color}"
    }
}

fun main() {
    val car = Car(brand = "BMW", model = "3 Series")
    val serializers = listOf(JsonCarSerializer(), CsvCarSerializer())

    println("$car\n")

    serializers.forEach { println("${it.format.padEnd(4)}: ${it.serialize(car)}") }
}
