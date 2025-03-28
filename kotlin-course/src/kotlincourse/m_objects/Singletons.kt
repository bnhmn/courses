package kotlincourse.m_objects

/*
A Singleton is an object that has exactly one instance.

In Kotlin, you can create exactly-one-instances using the 'object' keyword.
 */
object MailSender {
    fun sendMail(from: String, to: String, subject: String, message: String) {
        println(">>> From:    $from")
        println(">>> To:      $to")
        println(">>> Subject: $subject")
        println()
        println(message)
    }
}

fun main() {
    MailSender.sendMail(
        from = "John <john.doe@gmail.com>",
        to = "Peter <peter.pfiffig@outlook.de>",
        subject = "Greetings",
        message = """
            Hello Peter,
            
            I hope you are doing well.
            
            Best regards,
            John
        """.trimIndent()
    )
}
