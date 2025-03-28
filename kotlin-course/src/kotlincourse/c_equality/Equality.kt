package kotlincourse.c_equality

fun main() {
    val emp1 = Employee("Max", 1)
    val emp2 = Employee("Jan", 1)
    val emp3 = Employee("Jan", 1)
    println("emp1 = $emp1")
    println("emp2 = $emp2")
    println("emp3 = $emp3")
    println("emp1 === emp1: ${emp1 === emp1}")  // Tests referential equality
    println("emp1 == emp1: ${emp1 == emp1}")    // Uses equals() method
    println("emp1 == emp2: ${emp1 == emp2}")
    println("emp2 == emp3: ${emp2 == emp3}")
}


class Employee(var name: String, val id: Int) {
    override fun equals(other: Any?): Boolean {
        if (other is Employee) {
            return (this.name == other.name) && (this.id == other.id)
        }
        return false
    }

    override fun hashCode(): Int {
        var result = name.hashCode()
        result = 31 * result + id
        return result
    }

    override fun toString(): String {
        return "Employee(name='$name', id=$id)"
    }
}

// Can be simplified to:
data class Employee2(var name: String, val id: Int)
