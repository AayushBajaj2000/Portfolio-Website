import React, { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import RobotLogo from "@components/RobotLogo";
import { motion } from "framer-motion";
import useBackdrop from "@hooks/useBackdrop";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import useLinks from "@hooks/useLinks";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
      duration: 1.5,
      staggerChildren: 0.2,
      delay: 3,
      type: "spring",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
};

const GithubSVG = () => {
  return (
    <svg
      className="mr-2 "
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1.4em"
      width="1.4em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
    </svg>
  );
};

const Navbar = () => {
  const backdrop = useBackdrop();
  const { state } = useLinks();

  return (
    <div className="flex justify-center w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`h-[90px] max-w-5xl w-full justify-between flex fixed p-3 px-5 items-center z-10 transition-all  ${
          backdrop ? "bg-[#20202380] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="/">
          <div className="flex items-center h-full">
            <RobotLogo />
            <p className="ml-10 text-xl font-semibold md:text-3xl font-heading hover:cursor-pointer">
              Aayush Bajaj
            </p>
          </div>
        </Link>
        <div className="justify-around w-[250px] items-center hidden md:flex">
          {/*<motion.p
            variants={item}
            className="text-xl hover:underline hover:cursor-pointer"
          >
            Projects
          </motion.p>
          */}
          <motion.div
            variants={item}
            className="flex items-center"
            onClick={() => {
              window.open(state.github, "_blank");
            }}
          >
            <GithubSVG />
            <p className="text-xl hover:underline hover:cursor-pointer">
              Source
            </p>
          </motion.div>
          <motion.div variants={item}>
            <Button
              onClick={() => {
                window.open(state.resume, "_blank");
              }}
              className="h-full p-2 text-xl rounded-md outline-2 hover:bg-slate-300 hover:bg-opacity-30 outline-white outline"
            >
              Resume
            </Button>
          </motion.div>
        </div>
        <div className="md:hidden">
          <Popover>
            {({ close }) => (
              <>
                <Popover.Button>
                  <motion.div
                    variants={item}
                    className="p-1 border-2 border-white border-opacity-25 rounded-md hover:cursor-pointer hover:bg-[rgba(255,255,255,0.08)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </motion.div>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-[5px] sm:right-[20px] top-[55px] z-10 w-screen max-w-[250px] px-4 mt-3 transform sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border-2 border-[rgba(255,255,255,0.16)]">
                      <div className="relative grid gap-8 bg-[#2d3748]  p-5 lg:grid-cols-2">
                        <Link href="/">
                          <div
                            onClick={close}
                            className="hover:cursor-pointer flex p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-[rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring focus-visible:ring-orange-500  focus-visible:ring-opacity-50"
                          >
                            <div className="w-full ml-1 text-start">
                              <p className="text-sm font-medium text-white font-heading">
                                Home
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link href="/robotics">
                          <div
                            onClick={close}
                            className="hover:cursor-pointer flex p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-[rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring focus-visible:ring-orange-500  focus-visible:ring-opacity-50"
                          >
                            <div className="w-full ml-1 text-start">
                              <p className="text-sm font-medium text-white font-heading">
                                Robotics Projects
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div
                          onClick={() => {
                            window.open(state.resume, "_blank");
                            close();
                          }}
                          className="hover:cursor-pointer flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-[rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring focus-visible:ring-orange-500  focus-visible:ring-opacity-50"
                        >
                          <div className="ml-1">
                            <p className="text-sm font-medium text-white font-heading">
                              Resume
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                          <div className="flex w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 24 24"
                              className="w-6 h-6 mr-5 hover:cursor-pointer"
                              fill="white"
                              onClick={() => {
                                window.open(state.linkedin, "_blank");
                              }}
                            >
                              <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                            </svg>
                            <svg
                              className="w-6 h-6 mr-5 hover:cursor-pointer"
                              viewBox="0 0 101 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => {
                                window.open(state.github, "_blank");
                              }}
                            >
                              <path
                                d="M29.2065 72.9866C28.9059 73.3248 28.5301 73.2684 28.0792 72.8175C27.5908 72.4042 27.5156 72.0473 27.8538 71.7467C28.1544 71.4085 28.5301 71.4648 28.981 71.9157C29.4319 72.3291 29.5071 72.686 29.2065 72.9866ZM26.8393 69.5486C27.1775 69.9994 27.1775 70.3564 26.8393 70.6194C26.5387 70.8449 26.2193 70.7134 25.8811 70.2249C25.543 69.7364 25.543 69.3983 25.8811 69.2104C26.2193 68.9474 26.5387 69.0601 26.8393 69.5486ZM23.4012 66.1669C23.2134 66.4299 22.9691 66.4675 22.6685 66.2796C22.2928 66.0917 22.1613 65.8663 22.274 65.6032C22.3867 65.4154 22.631 65.3778 23.0067 65.4905C23.3824 65.6784 23.514 65.9038 23.4012 66.1669ZM25.1484 68.0832C24.923 68.3462 24.6224 68.2898 24.2467 67.9141C23.9085 67.5007 23.8709 67.2002 24.1339 67.0123C24.3594 66.7868 24.66 66.8432 25.0357 67.1814C25.3739 67.5947 25.4115 67.8953 25.1484 68.0832ZM32.4191 74.3957C32.2688 74.8465 31.9118 74.9593 31.3482 74.7338C30.7095 74.5835 30.4652 74.3017 30.6155 73.8884C30.7658 73.4751 31.1228 73.3436 31.6864 73.4939C32.2876 73.6817 32.5318 73.9823 32.4191 74.3957ZM35.9699 74.6775C35.9699 75.0908 35.6693 75.2974 35.0681 75.2974C34.4293 75.3726 34.1099 75.1659 34.1099 74.6775C34.1099 74.2641 34.4105 74.0575 35.0117 74.0575C35.6505 73.9823 35.9699 74.189 35.9699 74.6775ZM39.2388 74.1138C39.314 74.4896 39.051 74.7526 38.4498 74.9029C37.8486 75.0532 37.5104 74.9029 37.4353 74.452C37.3601 74.0011 37.6231 73.7193 38.2243 73.6066C38.8255 73.5314 39.1637 73.7005 39.2388 74.1138ZM93.5714 20.2321V74.3393C93.5714 78.8106 91.9839 82.6338 88.8089 85.8089C85.6338 88.9839 81.8106 90.5714 77.3393 90.5714H64.7143C64.1131 90.5714 63.6528 90.5526 63.3334 90.5151C63.014 90.4775 62.6477 90.3836 62.2344 90.2333C61.8211 90.083 61.5205 89.8106 61.3326 89.416C61.1447 89.0215 61.0508 88.5048 61.0508 87.8661V74.3957C61.0508 70.7509 60.0739 68.0832 58.12 66.3923C60.2617 66.1669 62.1874 65.8287 63.897 65.3778C65.6067 64.9269 67.3727 64.1942 69.195 63.1797C71.0174 62.1652 72.5392 60.9158 73.7603 59.4316C74.9815 57.9475 75.9772 55.9748 76.7475 53.5137C77.5178 51.0526 77.9029 48.2251 77.9029 45.0313C77.9029 40.4848 76.4187 36.6146 73.4503 33.4208C74.8406 30.0015 74.6903 26.1689 72.9994 21.923C71.9474 21.5848 70.4256 21.7915 68.4342 22.543C66.4427 23.2945 64.7143 24.1211 63.2489 25.0229L61.1071 26.3756C57.6127 25.3986 54.0056 24.9102 50.2857 24.9102C46.5659 24.9102 42.9587 25.3986 39.4643 26.3756C38.8631 25.9622 38.0646 25.455 37.0689 24.8538C36.0732 24.2526 34.5045 23.5293 32.3627 22.6839C30.221 21.8385 28.6053 21.5848 27.5156 21.923C25.8624 26.1689 25.7308 30.0015 27.1211 33.4208C24.1527 36.6146 22.6685 40.4848 22.6685 45.0313C22.6685 48.2251 23.0537 51.0432 23.8239 53.4855C24.5942 55.9278 25.5805 57.9005 26.7829 59.4035C27.9853 60.9064 29.4977 62.1652 31.32 63.1797C33.1424 64.1942 34.9084 64.9269 36.618 65.3778C38.3277 65.8287 40.2534 66.1669 42.3951 66.3923C40.8921 67.745 39.9715 69.6801 39.6334 72.1976C38.8443 72.5733 37.9989 72.8551 37.0971 73.043C36.1953 73.2308 35.1244 73.3248 33.8845 73.3248C32.6445 73.3248 31.414 72.9209 30.1928 72.113C28.9716 71.3052 27.9289 70.131 27.0647 68.5904C26.3508 67.388 25.4396 66.4111 24.3312 65.6596C23.2228 64.9081 22.2928 64.4572 21.5413 64.3069L20.4141 64.1378C19.625 64.1378 19.0802 64.2224 18.7796 64.3915C18.479 64.5606 18.385 64.7766 18.4978 65.0396C18.6105 65.3026 18.7796 65.5657 19.005 65.8287C19.2305 66.0917 19.4747 66.3172 19.7377 66.505L20.1323 66.7868C20.9589 67.1626 21.7761 67.8765 22.584 68.9286C23.3918 69.9807 23.9836 70.9388 24.3594 71.803L24.923 73.0993C25.4115 74.5272 26.2381 75.6826 27.4029 76.5656C28.5677 77.4486 29.8265 78.0122 31.1791 78.2564C32.5318 78.5007 33.8375 78.6322 35.0963 78.651C36.355 78.6697 37.3977 78.604 38.2243 78.4537L39.5207 78.2282C39.5207 79.6561 39.53 81.5912 39.5488 84.0335C39.5676 86.4758 39.577 87.7534 39.577 87.8661C39.577 88.6927 39.3704 89.3221 38.957 89.7542C38.5437 90.1863 38.1304 90.4305 37.7171 90.4869C37.3038 90.5433 36.6838 90.5714 35.8571 90.5714H23.2321C18.7608 90.5714 14.9376 88.9839 11.7626 85.8089C8.58752 82.6338 7 78.8106 7 74.3393V20.2321C7 15.7608 8.58752 11.9376 11.7626 8.76256C14.9376 5.58752 18.7608 4 23.2321 4H77.3393C81.8106 4 85.6338 5.58752 88.8089 8.76256C91.9839 11.9376 93.5714 15.7608 93.5714 20.2321Z"
                                fill="white"
                              />
                            </svg>
                            <svg
                              className="w-6 h-6 mr-5 hover:cursor-pointer"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => {
                                window.open(`mailto:${state.email}`, "_blank");
                              }}
                            >
                              <path
                                d="M0.857422 5.57367V18.4285L7.29362 12.0011L0.857422 5.57367ZM2.13631 4.28564L10.2846 12.4229C11.3138 13.4506 13.1085 13.4506 14.1377 12.4229L22.286 4.28564H2.13631Z"
                                fill="white"
                              />
                              <path
                                d="M14.8333 13.7096C13.9592 14.5665 12.795 15.0394 11.5566 15.0394C10.3182 15.0394 9.15396 14.5665 8.27986 13.7096L7.84884 13.2875L1.28613 19.7144H21.827L15.2643 13.2875L14.8333 13.7096ZM16.575 12.0039L23.1433 18.4363V5.57153L16.575 12.0039Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
