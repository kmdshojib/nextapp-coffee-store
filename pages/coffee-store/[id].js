import Link from "next/link"
import { useRouter } from "next/router"

const CoffeeSotre = () => {
  const router = useRouter()
  console.log("router",router)
  return (
    <div>CoffeeSotre <Link href="/">Home</Link></div>
  )
}

export default CoffeeSotre