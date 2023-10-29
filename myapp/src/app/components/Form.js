"use client";

import * as LR from "@uploadcare/blocks";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateUrls,
} from "../redux/formSlice";
LR.registerBlocks(LR);

export default function Form() {
  const firstName = useSelector((state) => state.form.firstName);
  const lastName = useSelector((state) => state.form.lastName);
  const email = useSelector((state) => state.form.email);
  const urls = useSelector((state) => state.form.urls);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return; // Prevent form submission if email is invalid
    }

    const formData = {
      firstname: firstName,
      lastname: lastName,
      email,
      image_urls: urls,
    };

    // console.log(formData);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_FORMKEY,
        formData
      );
      console.log("response from FastAPI:", response.data);
      dispatch(updateFirstName(""));
      dispatch(updateLastName(""));
      dispatch(updateEmail(""));
      dispatch(updateUrls([]));
      toast("Form submitted successfully!", {
        position: "top-right",
        type: "success",
        autoClose: 3000, // Close the notification after 3 seconds (adjust as needed)
      });
      // Modals()
    } catch (error) {
      console.log("error", error);
      // alert("An error occurred while submitting the form.");

      toast.error("An error occurred while submitting the form.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const dataOutput = document.querySelector("lr-data-output");
    dataOutput?.addEventListener("lr-data-output", (e) => {
      const newUrls = e.detail?.data?.files.map((e) => e.cdnUrl);
      console.log("fileDataEvent", newUrls);
      // setUrls(newUrls);
      dispatch(updateUrls(newUrls));
    });
  }
  }, []);

  return (
    <div id="form">
      <div className=" p-4 border-spacing-1 bg-black text-white w-full">
        <h1 className="text-[#24d2deb6] text-4xl text-center font-bold font-sans mt-9 mb-8">
          Fill our form and upload images!
        </h1>
        <ToastContainer />
        
        <div className="flex items-center justify-center  ">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label className="block font-semibold mb-2 mt-6 ">
                First Name:
              </label>
              <input
                type="text"
                className="border rounded py-2 px-3  bg-gray-300 text-black font-medium"
                value={firstName}
                onChange={(e) => dispatch(updateFirstName(e.target.value))}
                required
              />
            </fieldset>
            <fieldset>
              <label className="block font-semibold mb-2 mt-6">Last Name:</label>
              <input
                type="text"
                className="border rounded py-2 px-3  bg-gray-300 text-black font-medium"
                value={lastName}
                onChange={(e) => dispatch(updateLastName(e.target.value))}
              />
            </fieldset>
            <fieldset>
              <label className="block font-semibold mb-2 mt-6">Email:</label>
              <input
                type="email"
                className="border rounded py-2 px-3 mb-2 bg-gray-300 text-black font-medium"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
                required
                // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              />
               </fieldset>
              <br />
              <fieldset>
              <lr-file-uploader-regular
                css-src={process.env.NEXT_PUBLIC_DRAGGABLE_LINK}
                ctx-name="my-uploader"
                class="my-config"
              ></lr-file-uploader-regular>
              <lr-config
                ctx-name="my-uploader"
                pubkey={process.env.NEXT_PUBLIC_DRAGGABLE_PUBKEY}
                maxLocalFileSizeBytes={10000000}
                imgOnly={true}
                sourceList="local, url, camera, dropbox, facebook, gdrive, gphotos, instagram"
              ></lr-config>
              <lr-data-output
                ctx-name="my-uploader"
                use-console
                use-input
                use-group
                use-event
              ></lr-data-output>
           </fieldset>
            <button className="bg-[#24d2deb6] hover:bg-[#24d2de90] text-white font-bold py-2 px-4 mt-4 mb-11 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className="  border-2" />
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   firstName: state.form.firstName,
//   lastName: state.form.lastName,
//   email: state.form.email,
//   urls: state.form.urls,
// });

// const mapDispatchToProps = {
//   updateFirstName,
//   updateLastName,
//   updateEmail,
//   updateUrls,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
// 'use client'
// import React, { useState, useRef } from "react";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";

// const Form = () => {
//   const [images, setImages] = useState([]); // Store an array of selected images
//   const [editedImages, setEditedImages] = useState([]); // Store an array of final edited images
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the index of the currently displayed image
//   const [crop, setCrop] = useState({ aspect: 16 / 9 });
//   const [brightness, setBrightness] = useState(100);
//   const [saturation, setSaturation] = useState(100);
//   const canvasRef = useRef(null); // Create a ref for the canvas element
//   const [editingDone, setEditingDone] = useState(false); // Track whether editing is done

//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     const selectedImages = [];

//     // Convert selected files to URLs and store them in the selectedImages array
//     for (let i = 0; i < selectedFiles.length; i++) {
//       selectedImages.push(URL.createObjectURL(selectedFiles[i]));
//     }

//     setImages(selectedImages);
//     setEditedImages([]); // Reset editedImages when new images are selected
//     setEditingDone(false); // Reset editingDone when new images are selected
//     setCurrentImageIndex(0); // Reset current image index
//   };

//   const getCroppedImg = () => {
//     if (images.length === 0) {
//       return; // No images to edit
//     }

//     const canvas = canvasRef.current;
//     const image = document.getElementById("result");
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     const imageWidthRatio = image.naturalWidth / image.width;
//     const imageHeightRatio = image.naturalHeight / image.height;

//     ctx.filter = `brightness(${brightness}%) saturate(${saturation}%)`;

//     ctx.drawImage(
//       image,
//       crop.x * imageWidthRatio,
//       crop.y * imageHeightRatio,
//       crop.width * imageWidthRatio,
//       crop.height * imageHeightRatio,
//       0,
//       0,
//       crop.width,
//       crop.height
//     );

//     // Create a new image with the edited canvas and add it to the editedImages array
//     const editedImage = new Image();
//     editedImage.src = canvas.toDataURL();

//     const updatedEditedImages = [...editedImages];
//     updatedEditedImages[currentImageIndex] = editedImage;
//     setEditedImages(updatedEditedImages);
//   };

//   const handleBrightnessChange = (e) => {
//     setBrightness(e.target.value);
//     getCroppedImg();
//   };

//   const handleSaturationChange = (e) => {
//     setSaturation(e.target.value);
//     getCroppedImg();
//   };

//   const switchImage = (index) => {
//     setCurrentImageIndex(index);
//   };

//   const handleDoneClick = () => {
//     setEditingDone(true);
//   };

//   return (
//     <div className="container mx-auto my-4 p-4 bg-gray-200">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block font-semibold mb-2">First Name:</label>
//           <input type="text" className="border rounded py-2 px-3 w-full" />
//         </div>
//         <div>
//           <label className="block font-semibold mb-2">Last Name:</label>
//           <input type="text" className="border rounded py-2 px-3 w-full" />
//         </div>
//         <div>
//           <label className="block font-semibold mb-2">Upload Images:</label>
//           <input type="file" accept="image/*" multiple onChange={handleFileChange} />
//         </div>
//       </div>
//       {images.length > 0 && (
//         <div className="my-4">
//           <ReactCrop crop={crop} onChange={setCrop}>
//             <img
//               id="result"
//               src={images[currentImageIndex]}
//               alt={`image-${currentImageIndex}`}
//               className="rounded shadow-lg"
//             />
//           </ReactCrop>
//           <div className="my-2">
//             <label htmlFor={`brightness-${currentImageIndex}`} className="block font-semibold mb-2">
//               Brightness:
//             </label>
//             <input
//               type="range"
//               id={`brightness-${currentImageIndex}`}
//               name={`brightness-${currentImageIndex}`}
//               min="0"
//               max="200"
//               value={brightness}
//               onChange={handleBrightnessChange}
//               className="w-full"
//             />
//           </div>
//           <div className="my-2">
//             <label htmlFor={`saturation-${currentImageIndex}`} className="block font-semibold mb-2">
//               Saturation:
//             </label>
//             <input
//               type="range"
//               id={`saturation-${currentImageIndex}`}
//               name={`saturation-${currentImageIndex}`}
//               min="0"
//               max="200"
//               value={saturation}
//               onChange={handleSaturationChange}
//               className="w-full"
//             />
//           </div>
//           <button
//             className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
//             onClick={getCroppedImg}
//           >
//             Crop & Edit
//           </button>
//           <canvas
//             ref={canvasRef}
//             id="canvas"
//             width={crop.width}
//             height={crop.height}
//             className="border mt-4"
//             style={{
//               objectFit: "contain",
//               filter: `brightness(${brightness}%) saturate(${saturation}%)`,
//             }}
//           ></canvas>
//           <div className="mt-4">
//             <button
//               className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 mr-2"
//               onClick={() => switchImage(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)}
//             >
//               Next Image
//             </button>
//             <button
//               className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
//               onClick={handleDoneClick}
//             >
//               Done Editing
//             </button>
//           </div>
//         </div>
//       )}

//       {editingDone && editedImages.length > 0 && (
//         <div className="my-4">
//           <h3 className="text-lg font-semibold">Final Edited Images:</h3>
//           {editedImages.map((editedImage, index) => (
//             <img
//               key={`final-edited-image-${index}`}
//               src={editedImage.src}
//               alt={`final-edited-image-${index}`}
//               className="rounded my-2"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;
