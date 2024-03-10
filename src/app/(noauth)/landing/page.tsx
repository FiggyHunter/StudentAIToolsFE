"use client";

import "@/styles/globals.css";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return (
    <>
      <nav className="flex justify-between items-center w-full bg-primaryColor py-6 px-[8vw] box-border">
        <svg
          className="sm:block hidden"
          width="140"
          height="29"
          viewBox="0 0 140 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M126.59 27.9272L126.572 25.3671L136.329 3.06021L137.242 4.47453H126.59V1.073H139.373V3.6331L129.616 25.94L128.703 24.5257H139.373V27.9272H126.59Z"
            fill="white"
          />
          <path
            d="M111.005 27.9271V8.41302H114.227V11.188L113.655 10.5435C114.084 9.69606 114.669 9.05752 115.409 8.62786C116.161 8.18626 117.026 7.96545 118.005 7.96545C119.58 7.96545 120.834 8.52044 121.764 9.63041C122.707 10.7404 123.179 12.2621 123.179 14.1956V27.9271H119.956V14.1956C119.956 13.2886 119.7 12.5605 119.186 12.0115C118.673 11.4625 117.981 11.188 117.11 11.188C116.227 11.188 115.522 11.4625 114.997 12.0115C114.484 12.5605 114.227 13.2886 114.227 14.1956V27.9271H111.005Z"
            fill="white"
          />
          <path
            d="M100.717 28.3747C99.4875 28.3747 98.4074 28.1061 97.4764 27.569C96.5455 27.0319 95.8174 26.28 95.2923 25.3133C94.7791 24.3465 94.5225 23.2246 94.5225 21.9476V14.3747C94.5225 13.0976 94.7791 11.9757 95.2923 11.0089C95.8174 10.0422 96.5455 9.29623 97.4764 8.77108C98.4074 8.234 99.4875 7.96545 100.717 7.96545C102.579 7.96545 104.071 8.55625 105.193 9.73783C106.314 10.9075 106.875 12.4531 106.875 14.3747V18.8146H97.2079V15.7711H103.653V14.1956C103.653 13.2886 103.39 12.5605 102.865 12.0115C102.352 11.4625 101.636 11.188 100.717 11.188C99.8098 11.188 99.0877 11.4625 98.5506 12.0115C98.0135 12.5605 97.745 13.2886 97.745 14.1956V22.1266C97.745 23.0217 98.0135 23.7498 98.5506 24.3107C99.0877 24.8717 99.8098 25.1522 100.717 25.1522C101.636 25.1522 102.352 24.8717 102.865 24.3107C103.39 23.7498 103.653 23.0217 103.653 22.1266V21.5895H106.875V21.9476C106.875 23.8691 106.314 25.4207 105.193 26.6023C104.071 27.7839 102.579 28.3747 100.717 28.3747Z"
            fill="white"
          />
          <path
            d="M84.0964 28.5C82.1509 28.5 80.5874 27.8913 79.4058 26.6739C78.2362 25.4565 77.6514 23.8572 77.6514 21.876V7.12404C77.6514 5.13086 78.2362 3.53154 79.4058 2.32609C80.5874 1.1087 82.1509 0.5 84.0964 0.5C86.0538 0.5 87.6173 1.1087 88.7869 2.32609C89.9566 3.53154 90.5414 5.13086 90.5414 7.12404V8.19821H87.1399V7.12404C87.1399 6.15729 86.8653 5.3815 86.3163 4.79668C85.7673 4.19992 85.0273 3.90154 84.0964 3.90154C83.1654 3.90154 82.4255 4.19992 81.8764 4.79668C81.3274 5.3815 81.0529 6.15729 81.0529 7.12404V21.876C81.0529 22.8427 81.3274 23.6245 81.8764 24.2212C82.4255 24.8061 83.1654 25.0985 84.0964 25.0985C85.0273 25.0985 85.7673 24.8061 86.3163 24.2212C86.8653 23.6245 87.1399 22.8427 87.1399 21.876V18.2596H83.989V14.8581H90.5414V21.876C90.5414 23.8572 89.9566 25.4565 88.7869 26.6739C87.6173 27.8913 86.0538 28.5 84.0964 28.5Z"
            fill="white"
          />
          <path
            d="M69.4648 27.9271V8.41308H72.6873V27.9271H69.4648ZM69.4648 6.49748V2.14709H72.6873V6.49748H69.4648Z"
            fill="white"
          />
          <path
            d="M61.4575 27.9272V1.073H64.68V27.9272H61.4575Z"
            fill="white"
          />
          <path
            d="M53.4502 27.9272V1.073H56.6727V27.9272H53.4502Z"
            fill="white"
          />
          <path
            d="M43.1621 28.3747C41.9328 28.3747 40.8527 28.1061 39.9217 27.569C38.9908 27.0319 38.2627 26.28 37.7376 25.3133C37.2244 24.3465 36.9678 23.2246 36.9678 21.9476V14.3747C36.9678 13.0976 37.2244 11.9757 37.7376 11.0089C38.2627 10.0422 38.9908 9.29623 39.9217 8.77108C40.8527 8.234 41.9328 7.96545 43.1621 7.96545C45.024 7.96545 46.5159 8.55625 47.6378 9.73783C48.7598 10.9075 49.3207 12.4531 49.3207 14.3747V18.8146H39.6532V15.7711H46.0982V14.1956C46.0982 13.2886 45.8356 12.5605 45.3105 12.0115C44.7973 11.4625 44.0812 11.188 43.1621 11.188C42.2551 11.188 41.533 11.4625 40.9959 12.0115C40.4588 12.5605 40.1903 13.2886 40.1903 14.1956V22.1266C40.1903 23.0217 40.4588 23.7498 40.9959 24.3107C41.533 24.8717 42.2551 25.1522 43.1621 25.1522C44.0812 25.1522 44.7973 24.8717 45.3105 24.3107C45.8356 23.7498 46.0982 23.0217 46.0982 22.1266V21.5895H49.3207V21.9476C49.3207 23.8691 48.7598 25.4207 47.6378 26.6023C46.5159 27.7839 45.024 28.3747 43.1621 28.3747Z"
            fill="white"
          />
          <path
            d="M32.8163 28.16C30.9544 28.16 29.4565 27.5871 28.3227 26.4414C27.2008 25.2836 26.6398 23.7142 26.6398 21.7329V11.403H23.2383V8.39532H26.6398V3.57947H29.8623V8.39532H34.338V11.403H29.8623V21.7329C29.8623 22.6997 30.1309 23.4755 30.668 24.0603C31.205 24.6451 31.9211 24.9375 32.8163 24.9375H34.338V28.16H32.8163Z"
            fill="white"
          />
          <path
            d="M8.76318 27.9271V8.41302H11.9857V11.188L11.4128 10.5435C11.8425 9.69606 12.4273 9.05752 13.1673 8.62786C13.9192 8.18626 14.7845 7.96545 15.7632 7.96545C17.3386 7.96545 18.5918 8.52044 19.5228 9.63041C20.4657 10.7404 20.9371 12.2621 20.9371 14.1956V27.9271H17.7146V14.1956C17.7146 13.2886 17.458 12.5605 16.9448 12.0115C16.4316 11.4625 15.7393 11.188 14.868 11.188C13.9848 11.188 13.2807 11.4625 12.7555 12.0115C12.2423 12.5605 11.9857 13.2886 11.9857 14.1956V27.9271H8.76318Z"
            fill="white"
          />
          <path d="M3.40153 27.9272H0V1.073H3.40153V27.9272Z" fill="white" />
        </svg>
        <div
          className={`flex p-16 lg:p-0 gap-4 justify-between transition-all max-lg:w-[350px] bg-primaryShade2 lg:bg-transparent asbolute top-0 max-lg:fixed max-lg:h-[100vh] box-border ${
            isNavbarOpen ? "left-0" : "left-[-350px]"
          }`}
        >
          <ul className="flex gap-10 flex-col lg:flex-row top-0 left-0">
            <li className="list-none">
              <a
                className="text-white text-lg font-medium no-underline"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-white text-lg font-medium no-underline"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-white text-lg font-medium no-underline"
                href="#features"
              >
                Features
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-white text-lg font-medium no-underline"
                href="#pricing"
              >
                Pricing
              </a>
            </li>
          </ul>
          <svg
            onClick={() => setIsNavbarOpen(false)}
            className="lg:hidden cursor-pointer"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8072 1.19507L1.52148 23.4808"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.52148 1.19507L23.8072 23.4808"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex gap-2 items-center justify-between max-sm:w-full">
          <div
            onClick={() => setIsNavbarOpen(true)}
            className="flex flex-col gap-2 lg:hidden cursor-pointer mr-4"
          >
            <div className="w-[32px] h-[2px] rounded-sm bg-white"></div>
            <div className="w-[32px] h-[2px] rounded-sm bg-white"></div>
            <div className="w-[32px] h-[2px] rounded-sm bg-white"></div>
          </div>
          <div className="flex gap-2 items-center">
            <Link href="/login" className="button secondary no-underline">
              Login
            </Link>
            <Link href="/register" className="button primary no-underline">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <header
        id="home"
        className="bg-primaryColor text-center min-h-[100vh] w-full box-border px-[8vw] flex flex-col gap-7 items-center justify-center"
      >
        <h1 className="text-white text-[42px] leading-[70px] sm:text-[60px] sm:leading-[90px] sm:max-w-[800px]">
          Empower Your Academic Journey with IntelliGenz
        </h1>
        <p className="text-text font-base leading-6 sm:max-w-[800px]">
          Unlock the Future of Learning: Transform PDFs into Insights, Craft
          Concise Summaries, Generate Tasks, and Elevate Your Understanding.
          <br></br>
          <span className="font-bold">
            All in One Toolbox Designed for Students.
          </span>
        </p>
        <Link href="/register" className="button primary no-underline">
          GET STARTED
        </Link>
      </header>

      <section
        id="about"
        className="bg-white box-border px-[8vw] py-[80px] sm:py-[120px] flex flex-col gap-6"
      >
        <div className="">
          <h1 className="text-primaryColor text-[48px] leading-[75px]">
            About IntelliGenz
          </h1>
          <p className="text-primaryTint2 font-base text-3xl">
            At IntelliGenz, we're passionate about revolutionizing the way
            students learn and excel in their academic pursuits. Our mission is
            to empower students with cutting-edge tools that simplify complex
            information, enhance understanding, and streamline productivity.
            With [App Name], students can unleash their full potential and
            embark on a journey towards academic success like never before.
          </p>
        </div>
        <img src="/app-demo.png" alt="about us picture" srcset="" />
      </section>

      <section
        id="features"
        className="bg-primaryColor box-border px-[8vw] py-[80px] sm:py-[120px] flex flex-col gap-6"
      >
        <h1 className="text-white text-[48px] leading-[75px]">Features</h1>
        <p className="text-text font-base leading-6 sm:max-w-[800px]">
          Discover the power of IntelliGenZ with our comprehensive suite of
          student-friendly features. From transforming PDFs into summarized
          texts to enhancing your writing with AI grammar check, IntelliGenZ
          equips you with the tools you need to excel in your academic
          endeavors. Explore our range of intuitive features designed to
          streamline your study routine and elevate your learning experience.
        </p>

        <div className="flex flex-col gap-16 mt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="min-w-[124px] min-h-[124px] rounded-full border border-solid border-white/10 flex items-center justify-center">
              <div className="min-w-[96px] min-h-[96px] rounded-full border border-solid border-white/20 flex items-center justify-center">
                <div className="min-w-[70px] min-h-[70px] rounded-full red-gradient flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.6324 1.17306C15.6324 0.525198 16.1576 0 16.8055 0H18.7415C21.9808 0 24.6068 2.62599 24.6068 5.86531V6.98567H26.1568C26.5126 6.98567 26.8334 7.20003 26.9696 7.52879C27.1058 7.85754 27.0305 8.23596 26.7789 8.48758L24.0563 11.2101C23.8914 11.3751 23.6676 11.4678 23.4342 11.4678C23.2009 11.4678 22.9771 11.3751 22.812 11.2101L20.0897 8.48756C19.8381 8.23593 19.7629 7.85752 19.899 7.52877C20.0352 7.20002 20.356 6.98567 20.7119 6.98567H22.2607V5.86531C22.2607 3.92172 20.6851 2.34612 18.7415 2.34612H16.8055C16.1576 2.34612 15.6324 1.82092 15.6324 1.17306ZM1.69942 0.293266C0.759997 0.293266 0 1.05326 0 1.99268V12.6478C0 13.5872 0.759997 14.3472 1.69942 14.3472H9.53173C10.4711 14.3472 11.2311 13.5872 11.2311 12.6478V3.56635C11.2311 3.11643 11.0519 2.67257 10.7166 2.34876L9.0808 0.778426C8.75707 0.458771 8.3261 0.293266 7.89248 0.293266H1.69942ZM17.6251 13.6529C16.6857 13.6529 15.9257 14.4129 15.9257 15.3523V26.0073C15.9257 26.9468 16.6856 27.7069 17.6251 27.7069H25.4574C26.3968 27.7069 27.1568 26.9468 27.1568 26.0073V16.9259C27.1568 16.4761 26.9776 16.0322 26.6422 15.7084L25.0065 14.1381C24.6827 13.8184 24.2517 13.6529 23.8182 13.6529H17.6251ZM6.38539 21.0143C6.74124 21.0143 7.06203 20.8 7.19821 20.4712C7.3344 20.1425 7.25913 19.7641 7.00752 19.5124L4.28515 16.7899C4.12016 16.6248 3.89639 16.5322 3.66304 16.5322C3.4297 16.5322 3.20591 16.6248 3.04091 16.7899L0.318349 19.5124C0.0667284 19.7641 -0.00854219 20.1424 0.127633 20.4712C0.263809 20.8 0.584614 21.0143 0.940461 21.0143H2.49046V22.1347C2.49046 25.374 5.11645 28 8.35577 28H10.2918C10.9396 28 11.4648 27.4748 11.4648 26.8269C11.4648 26.1791 10.9396 25.6539 10.2918 25.6539H8.35577C6.41218 25.6539 4.83658 24.0782 4.83658 22.1347V21.0143H6.38539Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex  flex-col gap-4">
              <h3 className="text-white text-[27px]">SumaCraft</h3>
              <p className="text-text max-w-[70%]">
                Transform lengthy PDF documents into concise summaries
                effortlessly. Say goodbye to information overload and hello to
                streamlined study materials.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="min-w-[124px] min-h-[124px] rounded-full border border-solid border-white/10 flex items-center justify-center">
              <div className="min-w-[96px] min-h-[96px] rounded-full border border-solid border-white/20 flex items-center justify-center">
                <div className="min-w-[70px] min-h-[70px] rounded-full blue-gradient flex items-center justify-center">
                  <svg
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.54 2.50833L20.825 7.79333C20.9277 7.89168 20.9901 8.02479 21 8.16667V25.0833C21 25.238 20.9385 25.3864 20.8291 25.4958C20.7198 25.6052 20.5714 25.6667 20.4167 25.6667H2.91667C2.76196 25.6667 2.61358 25.6052 2.50419 25.4958C2.39479 25.3864 2.33333 25.238 2.33333 25.0833V2.91667C2.33333 2.76196 2.39479 2.61358 2.50419 2.50419C2.61358 2.39479 2.76196 2.33333 2.91667 2.33333H15.1667C15.3085 2.3432 15.4417 2.40559 15.54 2.50833ZM15.855 0H2.33333C1.71449 0 1.121 0.245833 0.683417 0.683418C0.245833 1.121 0 1.71449 0 2.33333V25.6667C0 26.2855 0.245833 26.879 0.683417 27.3166C1.121 27.7542 1.71449 28 2.33333 28H21C21.6188 28 22.2123 27.7542 22.6499 27.3166C23.0875 26.879 23.3333 26.2855 23.3333 25.6667V7.47833C23.332 7.17227 23.2105 6.87897 22.995 6.66167L16.6717 0.338333C16.4544 0.122798 16.1611 0.00128873 15.855 0Z"
                      fill="white"
                    />
                    <path
                      d="M16.3337 12.8333H5.83366C5.52424 12.8333 5.22749 12.7104 5.0087 12.4916C4.78991 12.2728 4.66699 11.9761 4.66699 11.6667C4.66699 11.3572 4.78991 11.0605 5.0087 10.8417C5.22749 10.6229 5.52424 10.5 5.83366 10.5H16.3337C16.6431 10.5 16.9398 10.6229 17.1586 10.8417C17.3774 11.0605 17.5003 11.3572 17.5003 11.6667C17.5003 11.9761 17.3774 12.2728 17.1586 12.4916C16.9398 12.7104 16.6431 12.8333 16.3337 12.8333Z"
                      fill="white"
                    />
                    <path
                      d="M16.3337 17.5001H5.83366C5.52424 17.5001 5.22749 17.3772 5.0087 17.1584C4.78991 16.9396 4.66699 16.6428 4.66699 16.3334C4.66699 16.024 4.78991 15.7272 5.0087 15.5085C5.22749 15.2897 5.52424 15.1667 5.83366 15.1667H16.3337C16.6431 15.1667 16.9398 15.2897 17.1586 15.5085C17.3774 15.7272 17.5003 16.024 17.5003 16.3334C17.5003 16.6428 17.3774 16.9396 17.1586 17.1584C16.9398 17.3772 16.6431 17.5001 16.3337 17.5001Z"
                      fill="white"
                    />
                    <path
                      d="M11.0837 22.1666H5.83366C5.52424 22.1666 5.22749 22.0437 5.0087 21.8249C4.78991 21.6061 4.66699 21.3093 4.66699 20.9999C4.66699 20.6905 4.78991 20.3938 5.0087 20.175C5.22749 19.9562 5.52424 19.8333 5.83366 19.8333H11.0837C11.3931 19.8333 11.6898 19.9562 11.9086 20.175C12.1274 20.3938 12.2503 20.6905 12.2503 20.9999C12.2503 21.3093 12.1274 21.6061 11.9086 21.8249C11.6898 22.0437 11.3931 22.1666 11.0837 22.1666Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex  flex-col gap-4">
              <h3 className="text-white text-[27px]">SumaPlus</h3>
              <p className="text-text max-w-[70%]">
                Experience an enhanced learning journey wit h IntelliGenZ. Our
                comprehensive suite of features transforms how you engage with
                study materials, facilitating deeper understanding and
                accelerated academic progress.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="min-w-[124px] min-h-[124px] rounded-full border border-solid border-white/10 flex items-center justify-center">
              <div className="min-w-[96px] min-h-[96px] rounded-full border border-solid border-white/20 flex items-center justify-center">
                <div className="min-w-[70px] min-h-[70px] rounded-full orange-gradient flex items-center justify-center">
                  <svg
                    width="23"
                    height="28"
                    viewBox="0 0 23 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8833 4.66667C20.7516 4.63977 20.6332 4.56818 20.5481 4.46401C20.4631 4.35983 20.4166 4.22948 20.4167 4.095V2.33333C20.4167 1.71449 20.1708 1.121 19.7332 0.683417C19.2957 0.245833 18.7022 0 18.0833 0L3.5 0C2.57174 0 1.6815 0.368749 1.02513 1.02513C0.368749 1.6815 0 2.57174 0 3.5V24.5C0 25.4283 0.368749 26.3185 1.02513 26.9749C1.6815 27.6312 2.57174 28 3.5 28H20.4167C21.0355 28 21.629 27.7542 22.0666 27.3166C22.5042 26.879 22.75 26.2855 22.75 25.6667V7C22.761 6.45413 22.5802 5.92167 22.2392 5.49533C21.8981 5.06899 21.4183 4.77575 20.8833 4.66667ZM17.7917 18.0833C17.7917 18.6602 17.6206 19.2241 17.3001 19.7037C16.9796 20.1834 16.5241 20.5572 15.9912 20.778C15.4582 20.9987 14.8718 21.0565 14.306 20.944C13.7402 20.8314 13.2205 20.5536 12.8126 20.1457C12.4047 19.7378 12.1269 19.2181 12.0144 18.6523C11.9018 18.0866 11.9596 17.5001 12.1804 16.9672C12.4011 16.4342 12.7749 15.9787 13.2546 15.6582C13.7342 15.3377 14.2981 15.1667 14.875 15.1667C15.0379 15.1495 15.2021 15.1495 15.365 15.1667C15.4483 15.1791 15.5333 15.1731 15.614 15.1489C15.6947 15.1247 15.769 15.0829 15.8317 15.0267C15.8994 14.9748 15.9538 14.9075 15.9903 14.8304C16.0268 14.7533 16.0444 14.6686 16.0417 14.5833V11.6667C16.0441 11.6239 16.0357 11.5812 16.0174 11.5425C15.999 11.5038 15.9713 11.4702 15.9367 11.445C15.9037 11.416 15.8642 11.3955 15.8214 11.3853C15.7787 11.3751 15.7342 11.3756 15.6917 11.3867L9.85833 12.635C9.79242 12.6461 9.73266 12.6805 9.68987 12.7318C9.64708 12.7832 9.62407 12.8482 9.625 12.915V20.4167C9.625 20.9935 9.45394 21.5574 9.13345 22.0371C8.81297 22.5167 8.35744 22.8906 7.82449 23.1113C7.29154 23.3321 6.7051 23.3898 6.13932 23.2773C5.57354 23.1648 5.05384 22.887 4.64594 22.4791C4.23804 22.0712 3.96025 21.5515 3.84771 20.9857C3.73517 20.4199 3.79293 19.8335 4.01368 19.3005C4.23444 18.7676 4.60828 18.312 5.08792 17.9915C5.56756 17.6711 6.13147 17.5 6.70833 17.5C6.87121 17.4828 7.03545 17.4828 7.19833 17.5C7.28163 17.5125 7.36665 17.5064 7.44733 17.4822C7.528 17.458 7.60233 17.4163 7.665 17.36C7.72656 17.313 7.77721 17.2531 7.81346 17.1847C7.84971 17.1162 7.8707 17.0407 7.875 16.9633V12.915C7.87512 12.4486 8.03493 11.9963 8.32785 11.6333C8.62076 11.2703 9.02913 11.0186 9.485 10.92L15.3183 9.67167C15.6162 9.60724 15.9246 9.6103 16.2211 9.68062C16.5176 9.75093 16.7946 9.88673 17.0318 10.078C17.269 10.2693 17.4603 10.5113 17.5918 10.7862C17.7233 11.0611 17.7916 11.3619 17.7917 11.6667V18.0833ZM18.0833 4.375C18.0833 4.45235 18.0526 4.52654 17.9979 4.58124C17.9432 4.63594 17.869 4.66667 17.7917 4.66667H3.5C3.19058 4.66667 2.89383 4.54375 2.67504 4.32496C2.45625 4.10617 2.33333 3.80942 2.33333 3.5C2.33333 3.19058 2.45625 2.89383 2.67504 2.67504C2.89383 2.45625 3.19058 2.33333 3.5 2.33333H17.7917C17.869 2.33333 17.9432 2.36406 17.9979 2.41876C18.0526 2.47346 18.0833 2.54765 18.0833 2.625V4.375Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[27px]">SpeecifyMe</h3>
              <p className="text-text max-w-[70%]">
                Listen to your summarized text with our built-in text-to-speech
                feature. Whether you're on the go or prefer auditory learning,
                our app ensures information accessibility anytime, anywhere.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="min-w-[124px] min-h-[124px] rounded-full border border-solid border-white/10 flex items-center justify-center">
              <div className="min-w-[96px] min-h-[96px] rounded-full border border-solid border-white/20 flex items-center justify-center">
                <div className="min-w-[70px] min-h-[70px] rounded-full lime-gradient flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8484 23.1165C11.8095 23.0641 11.7885 23.0006 11.7885 22.9354C11.7885 22.8702 11.8095 22.8067 11.8484 22.7544C12.4159 21.8603 12.7537 20.8398 12.8316 19.7837C12.9095 18.7276 12.7251 17.6686 12.2948 16.701C11.8646 15.7334 11.2018 14.8871 10.3655 14.2375C9.52914 13.5879 8.5452 13.1551 7.5012 12.9776C6.4572 12.8001 5.38551 12.8835 4.38151 13.2202C3.3775 13.557 2.4723 14.1367 1.74646 14.9078C1.02063 15.6789 0.496658 16.6175 0.221181 17.64C-0.0542969 18.6625 -0.0727394 19.7373 0.167494 20.7686C0.430458 21.9358 1.01703 23.0053 1.85996 23.8544C2.70288 24.7036 3.76804 25.298 4.93329 25.5695C5.77127 25.7669 6.64033 25.7941 7.48903 25.6497C8.33773 25.5052 9.14883 25.192 9.87431 24.7284C9.92403 24.6886 9.98583 24.6669 10.0495 24.6669C10.1132 24.6669 10.175 24.6886 10.2247 24.7284L13.1566 27.6603C13.3755 27.8779 13.6715 28 13.9801 28C14.2887 28 14.5848 27.8779 14.8036 27.6603C14.9131 27.5518 15 27.4226 15.0593 27.2802C15.1186 27.1379 15.1492 26.9852 15.1492 26.831C15.1492 26.6768 15.1186 26.5241 15.0593 26.3818C15 26.2394 14.9131 26.1102 14.8036 26.0017L11.8484 23.1165ZM6.3934 23.3618C5.58333 23.3618 4.79152 23.1211 4.11846 22.6703C3.4454 22.2195 2.92144 21.5789 2.61306 20.8298C2.30468 20.0807 2.22579 19.2569 2.3864 18.4629C2.54701 17.6689 2.93988 16.9405 3.51515 16.3702C4.09042 15.7998 4.82216 15.4133 5.61751 15.2595C6.41286 15.1057 7.23596 15.1917 7.98237 15.5065C8.72877 15.8213 9.36482 16.3508 9.80981 17.0277C10.2548 17.7046 10.4887 18.4985 10.4817 19.3085C10.4725 20.3867 10.0377 21.4176 9.27196 22.1768C8.50625 22.9359 7.47165 23.3618 6.3934 23.3618Z"
                      fill="white"
                    />
                    <path
                      d="M23.3312 8.76062C23.3312 8.45082 23.2081 8.15371 22.989 7.93465C22.77 7.7156 22.4729 7.59253 22.1631 7.59253H13.9864C13.6767 7.59253 13.3795 7.7156 13.1605 7.93465C12.9414 8.15371 12.8184 8.45082 12.8184 8.76062C12.8184 9.07041 12.9414 9.36752 13.1605 9.58658C13.3795 9.80564 13.6767 9.92871 13.9864 9.92871H22.1631C22.4729 9.92871 22.77 9.80564 22.989 9.58658C23.2081 9.36752 23.3312 9.07041 23.3312 8.76062Z"
                      fill="white"
                    />
                    <path
                      d="M14.5704 12.8491C14.2606 12.8491 13.9635 12.9722 13.7445 13.1912C13.5254 13.4103 13.4023 13.7074 13.4023 14.0172C13.4023 14.327 13.5254 14.6241 13.7445 14.8432C13.9635 15.0622 14.2606 15.1853 14.5704 15.1853H19.2428C19.5526 15.1853 19.8497 15.0622 20.0687 14.8432C20.2878 14.6241 20.4109 14.327 20.4109 14.0172C20.4109 13.7074 20.2878 13.4103 20.0687 13.1912C19.8497 12.9722 19.5526 12.8491 19.2428 12.8491H14.5704Z"
                      fill="white"
                    />
                    <path
                      d="M27.314 3.50426L24.4989 0.689172C24.0628 0.250452 23.4705 0.0026081 22.8519 0L9.31372 0C8.69412 0 8.09991 0.246132 7.66179 0.68425C7.22367 1.12237 6.97754 1.71658 6.97754 2.33618V10.8632C6.9773 10.9337 7.0036 11.0017 7.05123 11.0536C7.09885 11.1056 7.16429 11.1377 7.23452 11.1436C7.80953 11.2089 8.37679 11.3302 8.92825 11.5057C8.9715 11.5232 9.01844 11.5296 9.06481 11.5244C9.11119 11.5192 9.15553 11.5025 9.19381 11.4758C9.2321 11.4492 9.26311 11.4133 9.28405 11.3716C9.30499 11.3299 9.31519 11.2837 9.31372 11.237V2.92022C9.31372 2.76532 9.37525 2.61677 9.48478 2.50724C9.59431 2.39771 9.74286 2.33618 9.89776 2.33618H22.6066C22.6832 2.33524 22.7591 2.35035 22.8295 2.38053C22.8999 2.4107 22.9632 2.45528 23.0154 2.51139L25.4917 4.98774C25.5479 5.03989 25.5924 5.1032 25.6226 5.17361C25.6528 5.24402 25.6679 5.31997 25.667 5.39657V21.0256C25.667 21.1805 25.6054 21.329 25.4959 21.4386C25.3864 21.5481 25.2378 21.6096 25.0829 21.6096H14.4299C14.3686 21.6106 14.309 21.63 14.259 21.6655C14.209 21.7009 14.1708 21.7507 14.1496 21.8082C14.035 22.1851 13.8905 22.5523 13.7174 22.9062C13.6875 22.9815 13.6783 23.0634 13.6906 23.1435C13.7029 23.2236 13.7364 23.2989 13.7875 23.3618L14.2197 23.794C14.2565 23.8396 14.3026 23.8767 14.355 23.9029C14.4074 23.9291 14.4648 23.9437 14.5234 23.9458H25.667C26.2865 23.9458 26.8808 23.6997 27.3189 23.2616C27.757 22.8234 28.0031 22.2292 28.0031 21.6096V5.15127C28.0005 4.53268 27.7527 3.94037 27.314 3.50426Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex  flex-col gap-4">
              <h3 className="text-white text-[27px]">SyntaxSense</h3>
              <p className="text-text max-w-[70%]">
                Polish your writing with AI-powered grammar checking. From
                punctuation to sentence structure, our app helps you refine your
                work to perfection, ensuring clarity and professionalism.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="min-w-[124px] min-h-[124px] rounded-full border border-solid border-white/10 flex items-center justify-center">
              <div className="min-w-[96px] min-h-[96px] rounded-full border border-solid border-white/20 flex items-center justify-center">
                <div className="min-w-[70px] min-h-[70px] rounded-full green-gradient flex items-center justify-center">
                  <svg
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.995 6.66167L16.6717 0.338333C16.4544 0.122798 16.1611 0.00128873 15.855 0H2.33333C1.71449 0 1.121 0.245833 0.683417 0.683418C0.245833 1.121 0 1.71449 0 2.33333V25.6667C0 26.2855 0.245833 26.879 0.683417 27.3166C1.121 27.7542 1.71449 28 2.33333 28H21C21.6188 28 22.2123 27.7542 22.6499 27.3166C23.0875 26.879 23.3333 26.2855 23.3333 25.6667V7.47833C23.332 7.17227 23.2105 6.87897 22.995 6.66167ZM21 25.0833C21 25.238 20.9385 25.3864 20.8291 25.4958C20.7198 25.6052 20.5714 25.6667 20.4167 25.6667H2.91667C2.76196 25.6667 2.61358 25.6052 2.50419 25.4958C2.39479 25.3864 2.33333 25.238 2.33333 25.0833V2.91667C2.33333 2.76196 2.39479 2.61358 2.50419 2.50419C2.61358 2.39479 2.76196 2.33333 2.91667 2.33333H14.875C14.9524 2.33333 15.0265 2.36406 15.0812 2.41876C15.1359 2.47346 15.1667 2.54765 15.1667 2.625V5.83333C15.1667 6.45217 15.4125 7.04566 15.8501 7.48325C16.2877 7.92083 16.8812 8.16667 17.5 8.16667H20.7083C20.7857 8.16667 20.8599 8.1974 20.9146 8.25209C20.9693 8.30679 21 8.38098 21 8.45833V25.0833Z"
                      fill="white"
                    />
                    <path
                      d="M5.83333 12.25H8.16667C8.16667 12.25 8.75 12.25 8.75 12.8333V14C8.75 14 8.75 14.5833 8.16667 14.5833H5.83333C5.83333 14.5833 5.25 14.5833 5.25 14V12.8333C5.25 12.8333 5.25 12.25 5.83333 12.25Z"
                      fill="white"
                    />
                    <path
                      d="M5.83333 16.3333H8.16667C8.16667 16.3333 8.75 16.3333 8.75 16.9166V18.0833C8.75 18.0833 8.75 18.6666 8.16667 18.6666H5.83333C5.83333 18.6666 5.25 18.6666 5.25 18.0833V16.9166C5.25 16.9166 5.25 16.3333 5.83333 16.3333Z"
                      fill="white"
                    />
                    <path
                      d="M5.83333 20.4167H8.16667C8.16667 20.4167 8.75 20.4167 8.75 21.0001V22.1667C8.75 22.1667 8.75 22.7501 8.16667 22.7501H5.83333C5.83333 22.7501 5.25 22.7501 5.25 22.1667V21.0001C5.25 21.0001 5.25 20.4167 5.83333 20.4167Z"
                      fill="white"
                    />
                    <path
                      d="M11.0833 12.25H17.5C17.5 12.25 18.0833 12.25 18.0833 12.8333V14C18.0833 14 18.0833 14.5833 17.5 14.5833H11.0833C11.0833 14.5833 10.5 14.5833 10.5 14V12.8333C10.5 12.8333 10.5 12.25 11.0833 12.25Z"
                      fill="white"
                    />
                    <path
                      d="M11.0833 16.3333H17.5C17.5 16.3333 18.0833 16.3333 18.0833 16.9166V18.0833C18.0833 18.0833 18.0833 18.6666 17.5 18.6666H11.0833C11.0833 18.6666 10.5 18.6666 10.5 18.0833V16.9166C10.5 16.9166 10.5 16.3333 11.0833 16.3333Z"
                      fill="white"
                    />
                    <path
                      d="M11.0833 20.4167H17.5C17.5 20.4167 18.0833 20.4167 18.0833 21.0001V22.1667C18.0833 22.1667 18.0833 22.7501 17.5 22.7501H11.0833C11.0833 22.7501 10.5 22.7501 10.5 22.1667V21.0001C10.5 21.0001 10.5 20.4167 11.0833 20.4167Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[27px]">SummaTasks</h3>
              <p className="text-text max-w-[70%]">
                Effortlessly generate tasks based on summarized content. Stay
                organized and focused by converting key insights into actionable
                to-dos, maximizing productivity and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-white box-border px-[8vw] py-[80px] sm:py-[120px] flex flex-col gap-6 text-center items-center"
      >
        <h1 className="text-primaryColor text-[48px] leading-[75px] text-center">
          Choose Your Plan
        </h1>
        <p className="text-primaryTint2 font-base leading-6 sm:max-w-[800px] text-center">
          From free essentials to premium perks, there's an option to suit every
          student's needs.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 w-full mt-8">
          <div className="flex flex-col items-start text-left box-border gap-8 p-7 rounded-2xl border border-solid border-primaryTint4">
            <div className="flex flex-col gap-4">
              <h4 className="text-[28px] text-primaryColor">Starter</h4>
              <span className="text-lg text-text font-bold">FREE</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SummaCraft</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SummyTasks</span>
              </div>
              <div className="flex gap-2 items-center opacity-50">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L1 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L11 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SpeechifyMe</span>
              </div>
              <div className="flex gap-2 items-center opacity-50">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L1 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L11 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SyntaxSense</span>
              </div>
              <div className="flex gap-2 items-center opacity-50">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L1 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L11 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SummaPlus</span>
              </div>
              <div className="flex gap-2 items-center opacity-50">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L1 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L11 11"
                    stroke="#6F7382"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">MyNotes</span>
              </div>
            </div>
            <Link
              href="/register"
              className="button primary w-full no-underline box-border"
            >
              Choose this
            </Link>
          </div>
          <div className="flex flex-col items-start text-left box-border gap-8 p-7 rounded-2xl border border-solid border-primaryTint4">
            <div className="flex flex-col gap-4">
              <h4 className="text-[28px] text-primaryColor">Premium</h4>
              <span className="text-lg text-text font-bold">$9.99/mo</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SummaCraft</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SummyTasks</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SpeechifyMe</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SyntaxSense</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">SummaPlus</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.422L3.50458 10.6421C3.5891 10.752 3.69739 10.8412 3.82132 10.9032C3.94526 10.9652 4.08163 10.9983 4.22018 10.9999C4.3565 11.0016 4.49146 10.9727 4.61525 10.9156C4.73903 10.8585 4.84852 10.7744 4.93577 10.6697L12.9266 1"
                    stroke="#4890F9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-primaryTint2 text-base">MyNotes</span>
              </div>
            </div>
            <Link
              href="/register"
              className="button primary w-full no-underline box-border"
            >
              Choose this
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-primaryShade4 text-white text-center py-6 w-full box-border">
        ©️ 2024 IntelliGenZ. All rights reserved.
      </footer>
    </>
  );
}
