import Image from "next/image";
import Star from "../lib/svg-components/Star";

export default function Reviews() {
  return (
    <section>
      <div className="mx-auto w-fit">
      <Star />
      </div>
      <h4 className="text-3xl text-center my-8">
        What do people think about SYAA?
      </h4>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8">
        <p>
          &quot;This is a great place to bring your kids for soccer, baseball, and
          softball. It&apos;s a great experience. My kids love playing baseball out
          here and enjoy the friends they&apos;ve made. <br />
          <br /> Over the years we&apos;ve had the opportunity to play some good
          teams from around the area without the high cost of travel. The
          training and coaches are good and one of my sons now starts as an 8th
          grader on the high school team. This is a good organization to develop
          your kids.&quot;
        </p>
        <h4 className="font-bold text-2xl my-2">Rick Ilich</h4>
      </div>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8">
        <p>
          &quot;We switched from BCLL and while the commute was significantly longer,
          it was well worth it. Games weren&apos;t cancelled often due to &quot;possible&quot;
          bad weather. Our Coach Ricky was great. The kids got a trophy at the
          end which was included with our initial dues. And we only had to cover
          concession once. Thank you so much for a great season!&quot;
        </p>
        <h4 className="font-bold text-2xl my-2">Hanna Bennett</h4>
      </div>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8">
        <p>
          &quot;We&apos;ve been involved with multiple organizations over the past 10
          years and this is by far the best. The level of coaching at our
          daughter&apos;s level is excellent. The coaches push her to grow and truly
          care about her as a person as well as a player. We drive an hour each
          way to be a part of this great program. I would recommend SYAA to any
          new or experienced player who is looking to improve their skills.&quot;
        </p>
        <h4 className="font-bold text-2xl my-2">Larry O&apos;Brien</h4>
      </div>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8">
        <p>
          &quot;Great Organization! Very organized and the commissioners and coaches
          are top notch. We&apos;ve definitely made some lasting friendships through
          the organization and our daughter loves playing soccer with SYAA.&quot;
        </p>
        <h4 className="font-bold text-2xl my-2">Mari Burrell</h4>
      </div>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8">
        <p>
          &quot;I played at SYAA from coach pitch baseball all the way through to the
          Pony league (13-14y). I practically lived at the ballfield and I
          absolutely loved it. The games were competitive, people were friendly, the fields were
          great, and I made some friendships that will last a lifetime.
          <br />
          <br /> I would absolutely recommend SYAA to anyone looking to get
          their children engaged with sports. It is a great chance to make
          friends, build athletic skills, gain a community, and even
          volunteer/help out. There is something for everyone at SYAA.&quot;
        </p>
        <h4 className="font-bold text-2xl my-2">Clifton Beale</h4>
      </div>
    </section>
  );
}
