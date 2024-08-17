import Image from "next/image";

export default function VolunteersNeeded() {
    return(
        <section className="m-4 lg:w-10/12 lg:mx-auto my-12 lg:flex justify-between">
            <Image src={"./volunteers.svg"} alt="Volunteers of SYAA" width={500} height={500} />
            <div className="flex flex-col lg:w-8/12 text-xl mt-4">
                <h3 className="text-blue-700 my-4 font-semibold text-2xl">How to get involved</h3>
                <p>SYAA is proud to be 100% volunteer run - parents, families, alums, and local businesses are directly responsible for every kid’s experience, and we wouldn’t have it any other way!</p>
                <br/>
                <p>We rely on our members to run the programs and maintain the facilities.  Those that can are encouraged to participate and assist the volunteer committees.</p>
                <br />
                <p>Want to get more involved?  If you have the time, we have a role.</p>
                <br />
                <a href="/volunteer" className="my-6 border-2 border-blue-700 w-fit p-4 transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black">View volunteer opportunities</a>
            </div>
        </section>
    )
}