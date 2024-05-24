import Header from "@/components/header";
import getResources from "@/utils/get-resources";
import Link from "next/link";

export default async function Home() {
  const resources = await getResources();

  return (
    <div className="max-w-[75rem] mx-auto px-8  ">
      <Header />
      <section>
        <p className="text-2xl md:text-4xl font-bold text-gray-800">
          Base is an Ethereum Layer 2 (L2) chain that offers a safe, low-cost,
          developer-friendly way to build on-chain. Base is an L2 built on OP
          Stack
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Awesome Base is a list of Base ecosystem links including (d)apps,
          projects and more. This is a community project and is not affiliated
          with Base. Feel free to contribute by submitting a pull request on the{" "}
          <Link href="https://github.com/suhailkakar/awesome-base-info">
            <span className="text-blue-500 hover:underline cursor-pointer">
              GitHub repository
            </span>
          </Link>
        </p>
      </section>
      <section className="my-8 font-sans">
        <div
          className="markdown-body "
          dangerouslySetInnerHTML={{ __html: resources }}
        />
      </section>
    </div>
  );
}
