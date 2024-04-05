import Billionary from "@/components/billionary";

const api_uri = "https://billions-api.nomadcoders.workers.dev/";

export default async function Home() {
  const billionaries = await getBillionaries()
  return (
    <main className="">
      <div className="flex items-center justify-center mx-auto py-16 max-w-screen-lg">
      <div className="grid grid-cols-4 gap-4 gap-y-12">
      {billionaries.map((billionary) => (
        <Billionary
          id={billionary.id}
          name={billionary.name}
          squareImage={billionary.squareImage}
          netWorth={billionary.netWorth}
          industries={billionary.industries}
        />
      ))}
      </div>
      </div>
    </main>
  );
}

// make async function to get data from api
async function getBillionaries() {
  const response = await fetch(api_uri);
  const data = await response.json();
  return data;
}