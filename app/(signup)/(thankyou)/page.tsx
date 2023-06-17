import Thankyou from "@/components/Forms/Thankyou";
import { useRouter } from "next/navigation";

export default function ThankYou() {

    const router = useRouter()

    const goBack = () => {
        router.push('/')
    }

    return (
        <Thankyou goBack={goBack}/>
    )
}