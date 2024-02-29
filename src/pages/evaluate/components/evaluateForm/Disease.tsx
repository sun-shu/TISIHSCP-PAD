import React from 'react'

const Disease = () => {
    return (
        <div
            className="w-[620px] h-[652px] px-[60px] py-5 bg-white rounded flex-col justify-start items-start gap-2.5 inline-flex">
            {/* <div className="w-[500px] justify-between items-center inline-flex">
                <div className="text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                    主要疾病-03
                </div>
                <div className="w-6 h-6 relative">
                    <img
                        className="w-[22px] h-[22px] left-[1px] top-[1px] absolute"
                        src="https://via.placeholder.com/22x22"
                    />
                </div>
            </div> */}
            <div className="w-[500px] h-[0px] border border-zinc-300"></div>
            <div className="flex-col justify-center items-center gap-5 flex">
                <div className="flex-col justify-center items-center gap-2.5 flex">
                    <div className="h-[494px] relative">
                        <div
                            className="w-[500px] h-[74px] left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                                疾病名称
                            </div>
                            <div className="w-[500px] h-10 justify-center items-center inline-flex">
                                <div
                                    className="w-[500px] h-10 px-2.5 py-0.5 bg-white rounded border border-zinc-600 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                                        | 请填写
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[500px] h-[74px] left-0 top-[84px] absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                                    就医时间
                                </div>
                            </div>
                            <div
                                className="w-[500px] h-10 px-2.5 bg-white rounded border border-teal-500 justify-between items-center inline-flex">
                                <div className="grow shrink basis-0 h-9 justify-between items-center flex">
                                    <div className="text-zinc-600 text-lg font-semibold font-['PingFang SC'] leading-9">
                                        选择后字段
                                    </div>
                                    <div className="w-6 h-6 px-1.5 py-2 justify-center items-center flex" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[500px] h-[74px] left-0 top-[168px] absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                                    医院
                                </div>
                            </div>
                            <div
                                className="w-[500px] h-10 px-2.5 py-2 bg-white rounded border border-zinc-600 justify-start items-center gap-[62px] inline-flex">
                                <div className="grow shrink basis-0 h-9 justify-between items-center flex">
                                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                                        请选择
                                    </div>
                                    <div className="w-6 h-6 px-1.5 py-2 justify-center items-center flex" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[500px] h-[74px] left-0 top-[252px] absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                                    科室
                                </div>
                            </div>
                            <div
                                className="w-[500px] h-10 px-2.5 py-2 bg-white rounded border border-zinc-600 justify-start items-center gap-[62px] inline-flex">
                                <div className="grow shrink basis-0 h-9 justify-between items-center flex">
                                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                                        请选择
                                    </div>
                                    <div className="w-6 h-6 px-1.5 py-2 justify-center items-center flex" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[500px] h-[74px] left-0 top-[336px] absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                                主治医师
                            </div>
                            <div className="w-[500px] h-10 justify-center items-center inline-flex">
                                <div
                                    className="w-[500px] h-10 px-2.5 py-0.5 bg-white rounded border border-zinc-600 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                                        | 请填写
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[500px] h-[74px] left-0 top-[420px] absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                                陪同人
                            </div>
                            <div className="w-[500px] h-10 justify-center items-center inline-flex">
                                <div
                                    className="w-[500px] h-10 px-2.5 py-0.5 bg-white rounded border border-zinc-600 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                                        | 请填写
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="justify-center items-center gap-5 inline-flex">
                    <div className="bg-white justify-center items-center flex">
                        <div className="h-12 bg-white justify-start items-start flex">
                            <div
                                className="grow shrink basis-0 h-12 px-5 py-3.5 rounded border border-teal-500 justify-center items-center gap-10 flex">
                                <div className="grow shrink basis-0 h-5 justify-center items-center gap-2.5 flex">
                                    <div
                                        className="grow shrink basis-0 text-center text-teal-500 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">
                                        删除
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded justify-center items-center flex"
                    >
                        <div className="w-60 h-12 px-5 py-3.5 bg-teal-500 rounded justify-center items-center gap-10 flex">
                            <div className="grow shrink basis-0 h-5 justify-center items-center gap-2.5 flex">
                                <div
                                    className="grow shrink basis-0 text-center text-white text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">
                                    保存
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Disease