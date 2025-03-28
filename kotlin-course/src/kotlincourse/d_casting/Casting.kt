package kotlincourse.d_casting

data class Employee(var name: String, val id: Int)

fun main() {
    var something: Any = Employee("Max", 1)
    if (something is Employee) {
        println("An Employee: ${something.name}")  // Smart casting!
    }

    something = "just a string"
    if (something !is Employee) {
        println("Not an Employee: $something")
    }
}
