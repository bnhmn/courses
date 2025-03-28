package kotlincourse.n_forloop

/*
You can assign labels to nested loops and use them
to break or continue the outer loop.
 */
fun main() {
    outer@
    for (i in 1..10) {
        inner@
        for (j in 2..20) {
            if (j == 7) {
                break@outer
            }
        }
    }
}
