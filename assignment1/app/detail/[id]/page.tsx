import BillionaryDetails from "@/components/detail";

interface IParams {
    params: { id: string };
  }

export default function Detail({params: {id}}) {
        return (
            <div className="max-w-screen-lg justify-center mx-auto">
                <BillionaryDetails id={id} />
            </div>
        );
}