import Image from "next/image";
export default function Home() {
    return (
        <main
            className="flex 
        justify-center 
        bg-gray-100 
        min-h-full 
        flex-col 
        py-12 
        sm:px-6 
        lg:px-8"
        >
            <form className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    className="mx-auto"
                    alt="Messenger Logo"
                    src="/../public/images/logo.png"
                    width={48}
                    height={48}
                />
                <h2 className="mt-6 text-center font-bold text-3xl tracking-tight text-black">
                    Sign in to your account
                </h2>
            </form>
            {/*sm:w-full ensures that div is centered wrt to the parent container*/}
        </main>
    );
}
