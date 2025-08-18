import { redirect } from "next/navigation"

const NotFoundPage = () => {
    redirect("/docs")
    return null
}

export default NotFoundPage
