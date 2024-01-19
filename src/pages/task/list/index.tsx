import * as React from 'react';

function MyComponent(props) {
  return (
    <div className="bg-slate-50 flex flex-col items-stretch pb-12">
      <span className="items-stretch border-b-[color:var(--BG-,#DBDBDB)] bg-slate-50 self-center flex w-full max-w-[860px] flex-col pt-2.5 pb-5 border-b border-solid max-md:max-w-full">
        <div className="text-zinc-700 text-3xl font-semibold leading-10 max-md:max-w-full">
          任务列表
        </div>
        <div className="text-zinc-700 text-xs leading-5 tracking-wide mt-1 max-md:max-w-full">
          本周共有 10位长者待评估
        </div>
        <div className="justify-between items-center border border-[color:var(--BG-,#DBDBDB)] bg-white flex w-full gap-5 mt-1 pl-5 pr-1 py-1 rounded-[100px] border-solid max-md:max-w-full max-md:flex-wrap">
          <span className="justify-center items-stretch flex gap-2.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/306bf67cdfaef096c66c79178b70c9bd10b2d21fba5388b9c594a4edfdb02aff?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-600 text-sm leading-5 tracking-wider self-center my-auto">
              搜索
            </div>
          </span>
          <span className="text-white text-center text-sm leading-5 tracking-wider whitespace-nowrap justify-center items-stretch bg-teal-500 self-stretch px-7 py-2.5 rounded-3xl max-md:px-5">
            搜索
          </span>
        </div>
      </span>
      <div className="self-center w-full max-w-[1082px] mb-9 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center flex flex-col px-11 py-2.5 max-md:mt-6 max-md:px-5">
              <div className="items-stretch bg-slate-200 self-center flex w-[75px] max-w-full flex-col justify-center p-1 rounded-[54px]">
                <span className="text-teal-500 text-sm leading-5 tracking-wider whitespace-nowrap justify-center items-stretch border border-[color:var(--FG-Main-bluegreen,#00ADB8)] bg-white aspect-[1.725] px-5 py-2.5 rounded-3xl border-solid">
                  全部
                </span>
              </div>
              <span className="text-zinc-600 text-sm leading-5 tracking-wider whitespace-nowrap justify-center items-stretch border border-[color:var(--BG-,#DBDBDB)] self-stretch mt-2.5 px-5 py-2.5 rounded-3xl border-solid">
                上月待评估
              </span>
              <span className="text-zinc-600 text-sm leading-5 tracking-wider whitespace-nowrap justify-center items-stretch border border-[color:var(--BG-,#DBDBDB)] self-stretch mt-2.5 px-5 py-2.5 rounded-3xl border-solid">
                本月待评估
              </span>
              <span className="text-zinc-600 text-sm leading-5 tracking-wider whitespace-nowrap justify-center items-stretch border border-[color:var(--BG-,#DBDBDB)] self-stretch mt-2.5 px-5 py-2.5 rounded-3xl border-solid">
                下月待评估
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-start flex grow flex-col mt-14 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-zinc-700 text-3xl font-semibold leading-10 whitespace-nowrap self-start">
                上月待评估长者
              </div>
              <div className="text-zinc-700 text-xs leading-5 tracking-wide">
                2023年12月28日
              </div>
              <div className="self-stretch mt-2.5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="rounded bg-white grow w-full pl-5 pr-9 py-5 max-md:mt-10 max-md:pr-5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                            className="aspect-square object-contain object-center w-32 overflow-hidden shrink-0 max-w-full max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="justify-between items-stretch flex grow flex-col pr-3.5 max-md:mt-10">
                            <span className="items-stretch flex justify-between gap-5">
                              <div className="text-zinc-700 text-xl font-semibold leading-8">
                                张毅
                              </div>
                              <span className="text-teal-500 text-xs font-semibold leading-5 tracking-wide items-stretch bg-slate-200 self-center grow justify-center my-auto px-2.5 py-1 rounded-xl">
                                2级照护
                              </span>
                            </span>
                            <div className="text-zinc-700 text-base font-semibold leading-6 tracking-wider mt-2">
                              1号楼-3层-301-1床
                            </div>
                            <span className="items-stretch flex justify-between gap-1 mt-2">
                              <div className="text-zinc-700 text-xs leading-5 tracking-wide grow whitespace-nowrap">
                                上次评估结果：2023-12-02
                              </div>
                              <div className="text-teal-500 text-xs leading-5 tracking-wide whitespace-nowrap">
                                查看
                              </div>
                            </span>
                            <div className="items-stretch rounded border border-[color:var(--FG-Main-bluegreen,#00ADB8)] flex w-full flex-col justify-center mt-2.5 border-solid">
                              <span className="items-stretch rounded bg-teal-500 flex justify-between gap-1 px-2 py-1">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d58a626b5c604c4338c26657b56414f420f009c604817b27163fbd0f00f322e?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-sm leading-5 tracking-wider my-auto">
                                  开始评估
                                </div>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="rounded bg-white grow w-full pl-5 pr-9 py-5 max-md:mt-10 max-md:pr-5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd298457b71ba27322cb38cb45ae3278ff393b221920e25d5cdcf004b785afcd?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                            className="aspect-square object-contain object-center w-32 overflow-hidden shrink-0 max-w-full max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="justify-between items-stretch flex grow flex-col pr-3.5 max-md:mt-10">
                            <span className="items-stretch flex justify-between gap-5">
                              <div className="text-zinc-700 text-xl font-semibold leading-8">
                                李娉
                              </div>
                              <span className="text-teal-500 text-xs font-semibold leading-5 tracking-wide items-stretch bg-slate-200 self-center grow justify-center my-auto px-2.5 py-1 rounded-xl">
                                2级照护
                              </span>
                            </span>
                            <div className="text-zinc-700 text-base font-semibold leading-6 tracking-wider mt-2">
                              1号楼-3层-301-1床
                            </div>
                            <span className="items-stretch flex justify-between gap-1 mt-2">
                              <div className="text-zinc-700 text-xs leading-5 tracking-wide grow whitespace-nowrap">
                                上次评估结果：2023-12-02
                              </div>
                              <div className="text-teal-500 text-xs leading-5 tracking-wide whitespace-nowrap">
                                查看
                              </div>
                            </span>
                            <div className="items-stretch rounded border border-[color:var(--FG-Main-bluegreen,#00ADB8)] flex w-full flex-col justify-center mt-2.5 border-solid">
                              <span className="items-stretch rounded bg-teal-500 flex justify-between gap-1 px-2 py-1">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d58a626b5c604c4338c26657b56414f420f009c604817b27163fbd0f00f322e?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-sm leading-5 tracking-wider my-auto">
                                  开始评估
                                </div>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-zinc-700 text-3xl font-semibold leading-10 whitespace-nowrap mt-10 self-start">
                本月待评估长者
              </div>
              <div className="text-zinc-700 text-xs leading-5 tracking-wide">
                2023年12月28日
              </div>
              <div className="self-stretch mt-2.5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="rounded bg-white grow w-full pl-5 pr-9 py-5 max-md:mt-10 max-md:pr-5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                            className="aspect-square object-contain object-center w-32 overflow-hidden shrink-0 max-w-full max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="justify-between items-stretch flex grow flex-col pr-3.5 max-md:mt-10">
                            <span className="items-stretch flex justify-between gap-5">
                              <div className="text-zinc-700 text-xl font-semibold leading-8">
                                赵萸艳
                              </div>
                              <span className="text-teal-500 text-xs font-semibold leading-5 tracking-wide whitespace-nowrap items-stretch bg-slate-200 self-center grow justify-center my-auto px-2.5 py-1 rounded-xl">
                                2级照护
                              </span>
                            </span>
                            <div className="text-zinc-700 text-base font-semibold leading-6 tracking-wider mt-2">
                              1号楼-3层-301-1床
                            </div>
                            <span className="items-stretch flex justify-between gap-1 mt-2">
                              <div className="text-zinc-700 text-xs leading-5 tracking-wide grow whitespace-nowrap">
                                上次评估结果：2023-12-02
                              </div>
                              <div className="text-teal-500 text-xs leading-5 tracking-wide whitespace-nowrap">
                                查看
                              </div>
                            </span>
                            <div className="items-stretch rounded border border-[color:var(--FG-Main-bluegreen,#00ADB8)] flex w-full flex-col justify-center mt-2.5 border-solid">
                              <span className="items-stretch rounded bg-teal-500 flex justify-between gap-1 px-2 py-1">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d58a626b5c604c4338c26657b56414f420f009c604817b27163fbd0f00f322e?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-sm leading-5 tracking-wider my-auto">
                                  开始评估
                                </div>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="rounded bg-white grow w-full pl-5 pr-9 py-5 max-md:mt-10 max-md:pr-5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                            className="aspect-square object-contain object-center w-32 overflow-hidden shrink-0 max-w-full max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="justify-between items-stretch flex grow flex-col pr-3.5 max-md:mt-10">
                            <span className="items-stretch flex justify-between gap-5">
                              <div className="text-zinc-700 text-xl font-semibold leading-8">
                                吴萱萱
                              </div>
                              <span className="text-teal-500 text-xs font-semibold leading-5 tracking-wide whitespace-nowrap items-stretch bg-slate-200 self-center grow justify-center my-auto px-2.5 py-1 rounded-xl">
                                2级照护
                              </span>
                            </span>
                            <div className="text-zinc-700 text-base font-semibold leading-6 tracking-wider mt-2">
                              1号楼-3层-301-1床
                            </div>
                            <span className="items-stretch flex justify-between gap-1 mt-2">
                              <div className="text-zinc-700 text-xs leading-5 tracking-wide grow whitespace-nowrap">
                                上次评估结果：2023-12-02
                              </div>
                              <div className="text-teal-500 text-xs leading-5 tracking-wide whitespace-nowrap">
                                查看
                              </div>
                            </span>
                            <div className="items-stretch rounded border border-[color:var(--FG-Main-bluegreen,#00ADB8)] flex w-full flex-col justify-center mt-2.5 border-solid">
                              <span className="items-stretch rounded bg-teal-500 flex justify-between gap-1 px-2 py-1">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d58a626b5c604c4338c26657b56414f420f009c604817b27163fbd0f00f322e?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-sm leading-5 tracking-wider my-auto">
                                  开始评估
                                </div>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded bg-white w-[410px] max-w-full mt-10 pl-5 pr-9 py-5 self-start max-md:pr-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32d7e213f2fce03dfc8914d4cca1842b74218901d6e5c278cec1b68f430e0a6?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                      className="aspect-square object-contain object-center w-32 overflow-hidden shrink-0 max-w-full max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                    <span className="justify-between items-stretch flex grow flex-col pr-3.5 max-md:mt-10">
                      <span className="items-stretch flex justify-between gap-5">
                        <div className="text-zinc-700 text-xl font-semibold leading-8">
                          赵光
                        </div>
                        <span className="text-teal-500 text-xs font-semibold leading-5 tracking-wide items-stretch bg-slate-200 self-center grow justify-center my-auto px-2.5 py-1 rounded-xl">
                          2级照护
                        </span>
                      </span>
                      <div className="text-zinc-700 text-base font-semibold leading-6 tracking-wider mt-2">
                        1号楼-3层-301-1床
                      </div>
                      <span className="items-stretch flex justify-between gap-1 mt-2">
                        <div className="text-zinc-700 text-xs leading-5 tracking-wide grow whitespace-nowrap">
                          上次评估结果：2023-12-02
                        </div>
                        <div className="text-teal-500 text-xs leading-5 tracking-wide whitespace-nowrap">
                          查看
                        </div>
                      </span>
                      <div className="items-stretch rounded border border-[color:var(--FG-Main-bluegreen,#00ADB8)] flex w-full flex-col justify-center mt-2.5 border-solid">
                        <span className="items-stretch rounded bg-teal-500 flex justify-between gap-1 px-2 py-1">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d58a626b5c604c4338c26657b56414f420f009c604817b27163fbd0f00f322e?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                          />
                          <div className="text-white text-sm leading-5 tracking-wider my-auto">
                            开始评估
                          </div>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-zinc-700 text-3xl font-semibold leading-10 whitespace-nowrap mt-10 self-start">
                下月待评估长者
              </div>
              <div className="text-zinc-700 text-xs leading-5 tracking-wide">
                本周共有 2位长者待评估
              </div>
              <div className="self-stretch mt-2.5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="rounded bg-white grow w-full pl-5 pr-9 py-5 max-md:mt-10 max-md:pr-5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c346639db1c7023b77ffdf75adb9e7a341069601bdb75ac32764f86f171d2c?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                            className="aspect-square object-contain object-center w-32 overflow-hidden shrink-0 max-w-full max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="justify-between items-stretch flex grow flex-col pr-3.5 max-md:mt-10">
                            <span className="items-stretch flex justify-between gap-5">
                              <div className="text-zinc-700 text-xl font-semibold leading-8">
                                李豫卓
                              </div>
                              <span className="text-teal-500 text-xs font-semibold leading-5 tracking-wide whitespace-nowrap items-stretch bg-slate-200 self-center grow justify-center my-auto px-2.5 py-1 rounded-xl">
                                2级照护
                              </span>
                            </span>
                            <div className="text-zinc-700 text-base font-semibold leading-6 tracking-wider mt-2">
                              1号楼-3层-301-1床
                            </div>
                            <span className="items-stretch flex justify-between gap-1 mt-2">
                              <div className="text-zinc-700 text-xs leading-5 tracking-wide grow whitespace-nowrap">
                                上次评估结果：2023-12-02
                              </div>
                              <div className="text-teal-500 text-xs leading-5 tracking-wide whitespace-nowrap">
                                查看
                              </div>
                            </span>
                            <div className="items-stretch rounded border border-[color:var(--FG-Main-bluegreen,#00ADB8)] flex w-full flex-col justify-center mt-2.5 border-solid">
                              <span className="items-stretch rounded bg-teal-500 flex justify-between gap-1 px-2 py-1">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d58a626b5c604c4338c26657b56414f420f009c604817b27163fbd0f00f322e?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-sm leading-5 tracking-wider my-auto">
                                  开始评估
                                </div>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="rounded bg-white grow w-full pl-5 pr-9 py-5 max-md:mt-10 max-md:pr-5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0856c77d2568a0ff3c151a125fa0a58e559449bbc5d9fa199bcb01624a839c1?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                            className="aspect-square object-contain object-center w-32 overflow-hidden shrink-0 max-w-full max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="justify-between items-stretch flex grow flex-col pr-3.5 max-md:mt-10">
                            <span className="items-stretch flex justify-between gap-5">
                              <div className="text-zinc-700 text-xl font-semibold leading-8">
                                周俊
                              </div>
                              <span className="text-teal-500 text-xs font-semibold leading-5 tracking-wide items-stretch bg-slate-200 self-center grow justify-center my-auto px-2.5 py-1 rounded-xl">
                                2级照护
                              </span>
                            </span>
                            <div className="text-zinc-700 text-base font-semibold leading-6 tracking-wider mt-2">
                              1号楼-3层-301-1床
                            </div>
                            <span className="items-stretch flex justify-between gap-1 mt-2">
                              <div className="text-zinc-700 text-xs leading-5 tracking-wide grow whitespace-nowrap">
                                上次评估结果：2023-12-02
                              </div>
                              <div className="text-teal-500 text-xs leading-5 tracking-wide whitespace-nowrap">
                                查看
                              </div>
                            </span>
                            <div className="items-stretch rounded border border-[color:var(--FG-Main-bluegreen,#00ADB8)] flex w-full flex-col justify-center mt-2.5 border-solid">
                              <span className="items-stretch rounded bg-teal-500 flex justify-between gap-1 px-2 py-1">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d58a626b5c604c4338c26657b56414f420f009c604817b27163fbd0f00f322e?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
                                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-sm leading-5 tracking-wider my-auto">
                                  开始评估
                                </div>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
