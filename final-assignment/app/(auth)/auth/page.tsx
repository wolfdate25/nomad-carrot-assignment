import Link from "next/link";

export default function AuthPages() {
  return (
    <div className="bg-zinc-900 flex flex-col max-w-96 w-full h-screen">
      <h1 className="font-semibold text-3xl">지금 가입하세요.</h1>
      <Link href={"/create-account"}>
        <button className="bg-sky-500 rounded-full w-full text-white h-10">
          계정 만들기
        </button>
      </Link>
      <h1 className="font-semibold text-xl">이미 트위터에 가입하셨나요?</h1>
      <Link href={"/log-in"}>
        <button className="rounded-full w-full ring-1 text-sky-500 ring-white h-10">
          로그인
        </button>
      </Link>
    </div>
  );
}
