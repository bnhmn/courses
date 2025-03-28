package kotlincourse.j_classes

class Employee1 constructor(name: String, location: String = "Germany") /* The primary constructor */ {
    val name: String
    val location: String

    init {  // An Initializer block
        this.name = name
        this.location = location
    }
}

// Same as
class Employee2 constructor(name: String, location: String = "Germany") {
    val name = name
    val location = location
}

// Same as
class Employee3(val name: String, val location: String = "Germany")

fun main() {
    val emp1 = Employee1("Max")
    val emp2 = Employee2("John")
    val emp3 = Employee3("Paul")
    println("name=${emp1.name}, location=${emp1.location}")
    println("name=${emp2.name}, location=${emp2.location}")
    println("name=${emp3.name}, location=${emp3.location}")
}
