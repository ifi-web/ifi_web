import { useNavigate } from "react-router-dom";
import { MagicCard } from "@/components/ui/magic-card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import ShinyButtonGreen from "@/components/ui/ShinyButtonGreen";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import BoxRemove from "@/assets/box-remove.svg";
import BoxTick from "@/assets/box-tick.svg";
import BoxTime from "@/assets/box-time.svg";
import Category from "@/assets/category-2.svg";
import Bag from "@/assets/bag.svg";
import NoteFav from "@/assets/note-favorite.svg";
import Map from "@/assets/location-add.svg";
import Gift from "@/assets/gift.svg";
import Clock from "@/assets/clock.svg";
import User from "@/assets/user.svg";
import UserRemove from "@/assets/user-remove.svg";
import Plus from "@/assets/plus.svg";
import Message from "@/assets/messages.svg";

export default function Profile() {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/login");
  };

  return (
    <ScrollArea className="h-[80vh] w-full">
      <div className="Pfp grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center items-start px-4">
        <div className="lSide lg:col-span-2 grid grid-rows-[auto,1fr,1fr] gap-4 w-full">
          <MagicCard className="lSide1 PfpGrids flex flex-col p-2 h-full">
            <div className="flex justify-between">
              <h1 className="flex px-1">سفارش‌های من</h1>
              <a
                className="hover-link flex text-center items-center text-xs text-[#9094ff]"
                href=""
              >
                مشاهده همه
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="hover-icon size-4 mt-[1px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="BoxTime flex flex-row justify-around text-center items-center mt-6">
              <img className="AuthIcon w-16" src={BoxTime} alt="" />
              <img className="AuthIcon w-16" src={BoxRemove} alt="" />
              <img className="AuthIcon w-16" src={BoxTick} alt="" />
            </div>
            <div className="BoxTime grid grid-cols-3 gap-4 mt-4 text-center">
              <div className="text-xs backdrop-blur-md border-[1.1px] border-[#919191] rounded-lg p-2">
                <h1>جاری</h1>
                <Separator className="my-1 bg-neutral-600" />
                <h2>0 - سفارش</h2>
              </div>
              <div className="text-xs backdrop-blur-md border-[1.1px] border-[#919191] rounded-lg p-2">
                <h1>مرجوع شده</h1>
                <Separator className="my-1 bg-neutral-600" />
                <h2>0 - سفارش</h2>
              </div>
              <div className="text-xs backdrop-blur-md border-[1.1px] border-[#919191] rounded-lg p-2">
                <h1>تحویل شده</h1>
                <Separator className="my-1 bg-neutral-600" />
                <h2>0 - سفارش</h2>
              </div>
            </div>
          </MagicCard>
          <MagicCard className="lSide2 PfpGrids flex flex-col p-2 h-full relative">
            <div className="flex">
              <h1 className="px-1">از لیست‌های شما</h1>
            </div>
            <div className="flex flex-row overflow-hidden h-[15vh]"></div>
          </MagicCard>

          <MagicCard className="lSide3 PfpGrids flex p-2 h-full">
            خریدهای پرتکرار شما
          </MagicCard>
        </div>

        <MagicCard className="rSide PfpGrids flex flex-col w-full p-2 px-3 h-full">
          <div className="Info flex justify-between mb-1">
            <div className="Info flex flex-row text-center items-center">
              <h1 className="">نام کاربری</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 mx-2"
              >
                <path d="M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1ZM10.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1Z" />
              </svg>
              <h2 className="mt-1 text-neutral-400">09000000000</h2>
            </div>
            <div className="EditInfo flex flex-row text-center items-center">
              <a href="" className="flex">
                <h1 className="text-xs mx-1 mb-1 text-neutral-400">ویرایش</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                  <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="Info flex justify-between mb-1">
            <div className="Info flex flex-row text-center items-center">
              <h1 className="">کیف پول</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 mx-2"
              >
                <path d="M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1ZM10.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1Z" />
              </svg>
              <h2 className="mt-1 text-neutral-400">412,254</h2>
              <h2 className="text-xs text-neutral-300 mx-1">تومان</h2>
            </div>
            <div className="EditInfo flex flex-row text-center items-center">
              <a href="" className="flex">
                <h1 className="text-xs mx-1 mb-1 text-neutral-400">
                  افزایش موجودی
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5V5h14v-.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    fillRule="evenodd"
                    d="M15 7H1v4.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V7ZM3 10.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="Info flex justify-between mb-1">
            <div className="Info flex flex-row text-center items-center">
              <h1 className="ml-[0.3rem]">امتیاز خرید</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 mx-2"
              >
                <path d="M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1ZM10.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 ml-1 text-neutral-400"
              >
                <path d="M6.621 6.584c.208-.026.418-.046.629-.06v1.034l-.598-.138a.227.227 0 0 1-.116-.065.094.094 0 0 1-.028-.06 5.345 5.345 0 0 1 .002-.616.082.082 0 0 1 .025-.055.144.144 0 0 1 .086-.04ZM8.75 10.475V9.443l.594.137a.227.227 0 0 1 .116.065.094.094 0 0 1 .028.06 5.355 5.355 0 0 1-.002.616.082.082 0 0 1-.025.055.144.144 0 0 1-.086.04c-.207.026-.415.045-.625.06Z" />
                <path
                  fillRule="evenodd"
                  d="M2.5 3.5A1.5 1.5 0 0 1 4 2h4.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12a1.5 1.5 0 0 1 .439 1.061V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Zm6.25 1.25a.75.75 0 0 0-1.5 0v.272c-.273.016-.543.04-.81.073-.748.09-1.38.689-1.428 1.494a6.836 6.836 0 0 0-.002.789c.044.785.635 1.348 1.305 1.503l.935.216v1.379a11.27 11.27 0 0 1-1.36-.173.75.75 0 1 0-.28 1.474c.536.102 1.084.17 1.64.202v.271a.75.75 0 0 0 1.5 0v-.272c.271-.016.54-.04.807-.073.747-.09 1.378-.689 1.427-1.494a6.843 6.843 0 0 0 .002-.789c-.044-.785-.635-1.348-1.305-1.503l-.931-.215v-1.38c.46.03.913.089 1.356.173a.75.75 0 0 0 .28-1.474 12.767 12.767 0 0 0-1.636-.201V4.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mt-1 text-neutral-400">153</h2>
            </div>
            <div className="EditInfo flex flex-row text-center items-center">
              <a href="" className="flex">
                <h1 className="text-xs mx-1 mb-1 text-neutral-400">
                  افزایش امتیازات
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M6.375 5.5h.875v1.75h-.875a.875.875 0 1 1 0-1.75ZM8.75 10.5V8.75h.875a.875.875 0 0 1 0 1.75H8.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.25 3.75a.75.75 0 0 1 1.5 0V4h2.5a.75.75 0 0 1 0 1.5h-2.5v1.75h.875a2.375 2.375 0 1 1 0 4.75H8.75v.25a.75.75 0 0 1-1.5 0V12h-2.5a.75.75 0 0 1 0-1.5h2.5V8.75h-.875a2.375 2.375 0 1 1 0-4.75h.875v-.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Separator className="my-2 bg-neutral-700" />
          <div className="flex flex-row justify-center items-center text-center">
            {/* <Button
              className="VerifyIco mx-2 text-[#00FFA1] border-[#00FFA1]"
              variant="outline"
            >
              <img className="size-7" src={TickV} alt="" />
              Verify
            </Button> */}
            <ShinyButtonGreen className="" onClick={handleProfileClick}>
              احراز هویت حساب کاربری
            </ShinyButtonGreen>
          </div>
          <Separator className="my-2 bg-neutral-700" />
          <div className="Links flex flex-col justify-start items-start -mr-3">
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={Category} alt="" />
              خلاصه فعالیت ‌ها
            </Button>
            <Button variant="link" className="my-1 text-violet-500">
              <img className="AuthIcon size-7" src={Plus} alt="" />
              پلاس
            </Button>
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={Bag} alt="" />
              سفارش‌ها
            </Button>
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={NoteFav} alt="" />
              لیست‌های من
            </Button>
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={Message} alt="" />
              دیدگاه‌ها و پرسش‌ها
            </Button>
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={Map} alt="" />
              آدرس‌ها
            </Button>
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={Gift} alt="" />
              کارت‌های هدیه
            </Button>
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={Clock} alt="" />
              بازدید‌های اخیر
            </Button>
            <Button variant="link" className="my-1">
              <img className="AuthIcon size-7" src={User} alt="" />
              اطلاعات حساب کاربری
            </Button>
            <Button variant="link" className="my-1 text-red-500">
              <img className="ExitIc size-7" src={UserRemove} alt="" />
              خروج
            </Button>
          </div>
        </MagicCard>
      </div>
    </ScrollArea>
  );
}
