package kotlincourse.j_classes

/* Access levels:
- public
- protected
- private  (top level elements are visible inside the file; methods and properties inside the class they are declared)
- internal (elements are visible inside the module they are declared (IntelliJ project, Maven project))

- Kotlin Classes and methods are public final by default!
- Top level functions are public by default!

 */
data class PublicEmployee(val id: Int) {}

private data class PrivateEmployee(val id: Int) {}

fun main() {
    val emp1 = PublicEmployee(1)
    val emp2 = PrivateEmployee(2)
    println(emp1)
    println(emp2)
}
