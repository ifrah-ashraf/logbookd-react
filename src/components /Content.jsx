/* eslint-disable react/no-unescaped-entities */

function Content() {
    return (
        <div>
            <div className="flex  flex-col  w-[80%] min-h-screen mx-auto mt-10 ">
                <h1 className="text-[30px]  ml-20 text-gray-500 mt-8">Find Yourself some network</h1>
                <h2 className="leading-none text-[200px] ml-20 text-[#6d0333] font-semibold  ">CONNECT</h2>
                <div className="flex flex-row ml-20">
                    <div className="flex-1  h-60">
                        <a href="#"
                            className="no-underline bg-[#6d0333] text-white px-8 "
                        >
                            show all alumni
                        </a>
                    </div>
                    <div className="flex-1 ">
                        <p>
                            start <span className="text-pink-500">hunting</span> for job 
                            from us
                        </p>
                        <br />
                        <p>
                            Join a vibrant community where alumni come together to network, share insights, and support each other's professional journeys. Discover exclusive job postings, mentorship opportunities, and stay updated on the latest news and events from your alma mater.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Content;