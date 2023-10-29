"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import img1 from "../images/img4.png";
import img2 from "../images/img5.png";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import MySkeleton from "./Skeleton";
import "tailwindcss/tailwind.css";

function MyVerticallyCenteredModal({ blogdata, ...props }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className=" text-lg text-slate-200">
        view full blog...
      </Button>
      <Dialog open={open} handler={handleOpen} className="w-full  bg-gray-300">
        <DialogHeader className="border-8 shadow-xl mt-5 p-4 font-bold text-center  bg-[#23b9c498] text-black text-2xl">
          {blogdata.title}
        </DialogHeader>
        <DialogBody
          divider
          className=" border-8 shadow-xl font-semibold  bg-black text-white z-10 p-20 w-full  "
        >
          <div
            dangerouslySetInnerHTML={{ __html: blogdata.html }}
            className="overflow-y-auto text-bold max-h-[35rem]"
          ></div>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={handleOpen}
            className="p-3 mt-0 font-semibold bg-[#24d2deb6] text-black "
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_KEY);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function Blogs() {
  const [data, setBlogs] = useState([]);
  const [hoveredBlogId, setHoveredBlogId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(data.slice(0, 5));
  const [blogsPerPage, setBlogsPerPage] = useState(5);
  const [blogsToShow, setBlogsToShow] = useState(5); // Initially show 5 blogs
  //  console.log

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = [...filteredBlogs]; // Use data instead of blogs
    const [recordedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItem);
    // setBlogs(items);
    setFilteredBlogs(items);
  }

  useEffect(() => {
    getData().then((e) => {
      const blogsWithIds = e.posts.map((blog, index) => ({
        ...blog,
        id: Date.now() + index,
      }));
      setBlogs(blogsWithIds);
      setFilteredBlogs(blogsWithIds);
    });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setBlogsToShow(blogsPerPage);
  };
  // const handleShowMore = () => {
  //   setBlogsToShow(blogsToShow + 5); // Show 5 more blogs
  // };
  const handleShowMore = () => {
    setBlogsToShow(blogsToShow + blogsPerPage);
  };

  return (
    <main id="blogs">
      <hr className="border-2" />
      <div className="bg-black">
        {/* <div className="">
          <motion.h1
            className="text-center mt-20 mb-10 text-4xl font-bold font-sans"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Our Blogs
          </motion.h1>
         
        </div> */}

        <div className="border-1 shadow-xl bg-black w-full md:w-11/12 xl:w-9/12 mx-auto flex flex-col md:flex-row items-center justify-center text-gray-300 py-14 px-4 md:px-0">
          <Image src={img1} className="h-[13%] w-[13%] mb-4 md:mb-0" />
          <input
            type="text"
            placeholder="Search blogs"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 m-2 rounded bg-gray-300 text-gray-800 w-full md:w-1/2"
          />
          <span className="mr-5">Search</span>
          <br />

          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="data">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {data.length === 0 ? (
                    <div className="w-screen ">
                      {/* First MySkeleton */}
                      <div className="bg-gray-200 p-4 rounded shadow-lg mb-4 lg:w-[50%] ">
                        <MySkeleton />
                      </div>

                      {/* Second MySkeleton */}
                      <div className="bg-gray-200 p-4 rounded shadow-lg mb-4 lg:w-[50%]  ">
                        <MySkeleton />
                      </div>

                      {/* Third MySkeleton */}
                      <div className="bg-gray-200 p-4 rounded shadow-lg mb-4 lg:w-[50%]  ">
                        <MySkeleton />
                      </div>

                      {/* Fourth MySkeleton */}
                      <div className="bg-gray-200 p-4 rounded shadow-lg mb-4 lg:w-[50%]  ">
                        <MySkeleton />
                      </div>
                    </div>
                  ) : (
                    // filteredBlogs.map((e, index) => (
                    filteredBlogs.slice(0, blogsToShow).map((e, index) => (
                      <Draggable
                        key={e.id}
                        draggableId={e.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <li
                            className={`${
                              snapshot.isDragging ? "bg-[#1fa7b09a]" : ""
                            }`}
                            onMouseEnter={() => setHoveredBlogId(e.id)}
                            onMouseLeave={() => setHoveredBlogId(null)}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div className="border-8 border-gray-300 px-10 py-10 shadow-lg transition-all hover:opacity-80 hover:scale-95">
                              <h1 className="font-bold text-[#24d2deb6] text-2xl">
                                {e.title}
                              </h1>
                              <MyVerticallyCenteredModal blogdata={e} />
                            </div>

                            {hoveredBlogId === e.id && (
                              <div className="flex justify-center p-2">
                                <div className="bg-gray-500 text-white font-bold py-1 px-2 rounded ">
                                  Drag the blog Up or Down
                                </div>
                              </div>
                            )}
                          </li>
                        )}
                      </Draggable>
                    ))
                  )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
            {filteredBlogs.length > blogsToShow && (
              <div className="text-center mt-4">
                <button
                  onClick={handleShowMore}
                  className="bg-[#24d2deb6] hover:bg-[#24d2de90] text-white font-bold py-2 px-4 ml-2 rounded"
                >
                  Show More
                </button>
              </div>
            )}
          </DragDropContext>
          <Image src={img2} className="h-[10%] w-[10%] mb-4 md:mb-0" />
        </div>
      </div>
      <hr className="border-2" />
    </main>
  );
}

export default Blogs;
