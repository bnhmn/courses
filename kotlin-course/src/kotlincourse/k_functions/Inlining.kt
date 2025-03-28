package kotlincourse.k_functions

/*
When an Inline Function is compiled, its body is directly substituted for the function call.
This means it is not compiled to a function at all!

Inlining usually leads to better performance.
The Compiler applies inlining and other optimizations by default based on heuristics.

However, you can explicitly make a function inline by using the inline keyword.
This works best for functions with parameters of functional types.
 */

inline fun multiply(numA: Float, numB: Float): Float {
    return numA * numB
}
