import TickV from "@/assets/tick-circle.svg";

export default function VerifyEmail() {
  return (
    <div
      className="VerifyMail flex flex-col justify-center items-center text-center h-[50vh]"
      dir="rtl"
    >
      <h1 className="VerifyIco flex flex-row text-[#00FFA2] text-2xl border-[2px] border-[#00FFA2] p-5 rounded-2xl">
        ایمیل با موفقیت تایید شد
        <img className="VerifyIco size-9 mr-3" src={TickV} alt="" />
      </h1>
      <h2 className="VerifyIco flex flex-row text-[#00FFA2] text-lg mt-5">
        {" "}
        خروج از صفحه در 5 ثانیه دیگر
      </h2>
    </div>
  );
}
