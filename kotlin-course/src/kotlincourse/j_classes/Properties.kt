package kotlincourse.j_classes

import kotlin.random.Random

class Employee(val name: String, location: String = "Germany") {
    // Custom getter and setter for a property
    var location = location
        get() {
            println("Getter called: Employee.location")
            return field
        }
        set(value) {
            println("Setter called: Employee.location")
            field = value
        }

    // Computed Properties. Computed every time it's called
    val fullTime: Boolean get() {
        println("Getter called: Employee.fullTime")
        return true
    }
    val department get() = listOf("A", "B", "C", "D", "E", "F", "G")[Random.nextInt(7)]

    // Lazy property. Computed once when called for the first time
    val session by lazy {
        println("Initialized: Employee.session")
        "The session"
    }
}

fun main() {
    val employee = Employee("Max")

    println("Location is '${employee.location}'")
    employee.location = "France"
    println("Location is '${employee.location}'\n")

    println("Employee is full time: ${employee.fullTime}")
    println("Employee is full time: ${employee.fullTime}\n")

    println("Employee's department: ${employee.department}")
    println("Employee's department: ${employee.department}")
    println("Employee's session is: ${employee.session}")
    println("Employee's session is: ${employee.session}")
}
