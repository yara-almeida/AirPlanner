import Image from "next/image";
import airplaneSvg from "../assets/airplane.svg";
import logoSvg from "../assets/logo.svg";
import Link from "next/link";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <section
                id="hero"
                className="w-full h-screen bg-white flex flex-col mx-auto max-w-screen-xl p-8"
            >
                <nav className="items-center justify-between w-full flex">
                    <Link href="/">
                        <Image
                            className="w-14 h-14"
                            src={logoSvg}
                            alt="Logo da página"
                        />
                    </Link>

                    <div className="flex gap-8 items-center">
                        <Link
                            href="#hero"
                            className="font-medium hover:text-fuchsia-500 transition-colors text-stone-700 rounded-full"
                        >
                            Preço
                        </Link>

                        <Link
                            href="#hero"
                            className="font-medium hover:text-fuchsia-500 transition-colors text-stone-700 rounded-full"
                        >
                            Sobre
                        </Link>

                        <Link
                            href="#hero"
                            className="font-medium hover:text-fuchsia-500 transition-colors text-stone-700 rounded-full"
                        >
                            Blog
                        </Link>

                        <Link
                            href="#hero"
                            className="font-medium hover:bg-fuchsia-700 transition-colors py-3 px-5 text-white bg-fuchsia-500 rounded-full"
                        >
                            Começar
                        </Link>
                    </div>
                </nav>

                <div className="items-center justify-between mt-8 w-full flex">
                    <div>
                        <h1 className="min-[500px]:text-center text-left text-7xl font-black text-stone-800">
                            Planeje sua viagem com o
                            <span className="text-fuchsia-500">
                                {" "}
                                AirPlanner
                            </span>
                            .
                        </h1>
                        <p className="min-[500px]:text-center text-lg mt-8 font-bold text-stone-700">
                            Nunca foi tão fácil planejar uma viagem.
                            <br />
                            Faça tudo de forma rápida e sem dor de cabeça.
                        </p>
                    </div>

                    <Image
                        className="hidden md:block w-full max-w-2xl"
                        src={airplaneSvg}
                        alt="Desenho de um avião sobrevoando a Terra"
                    />
                </div>
                <Link
                    href="#hero"
                    className="hidden md:block font-medium hover:bg-fuchsia-700 transition-colors py-3 px-5 text-white bg-fuchsia-500 rounded-full w-fit mx-auto -mt-20"
                >
                    Começar
                </Link>
            </section>
        </main>
    );
}


