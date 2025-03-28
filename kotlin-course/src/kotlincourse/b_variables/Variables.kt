package kotlincourse.b_variables

fun main() {
    val numA = 1   // val := constant value that cannot be changed
    var numB = 2   // var := variable that can be changed

    // numA = 3    // This does not work!
    numB = 4       // This is fine

    println("$numA, $numB")

    val employee = Employee(name = "Max", id = 1)
    employee.name = "Maxi"
    // employee = Employee(name = "John", id = 2)   // This does not work

    print(employee)
}

data class Employee(var name: String, val id: Int)

typealias EmployeeSet = MutableSet<Employee>
