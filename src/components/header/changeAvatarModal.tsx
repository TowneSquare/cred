import { useState } from "react";
import { toggleChangeAvatarPanel } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

const ChangeAvatarModal = () => {
  const [selectedImage, setSelectedImage] = useState('/avatar1.png'); // State to manage the selected image

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.dialogState.bChangeAvatarPanel);

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        // Replace 'uploadEndpoint' with your actual API endpoint for file upload
        const response = await fetch('uploadEndpoint', {
          method: 'POST',
          body: formData,
          // Additional headers if required (e.g., authorization headers)
        });

        // Assuming response.imageUrl contains the URL of the uploaded image
        setSelectedImage("response.imageUrl"); // Update selectedImage state with the new image URL
        console.log('File uploaded successfully:', response);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'
        } absolute z-20 inset-0 flex justify-center items-center bg-black bg-opacity-90`}
    >
      <div className="grid w-[416px] h-[420px]">
        <div className="flex justify-center">
          <div className="relative w-[170px] h-[170px] md:w-[300px] md:h-[300px] border-[2px] border-[#F5E27D] rounded-full">
            <img
              src="./credpoints/cancel.svg"
              className="cursor-pointer absolute -right-20 -top-[100px] md:-right-20 md:-top-6"
              onClick={() => dispatch(toggleChangeAvatarPanel(false))}
            />
            <img className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] rounded-full z-50" src={selectedImage} alt="" />
          </div>
        </div>
        <div className="grid justify-center md:flex md:justify-between mt-[144px] md:mt-[64px]">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*"
            />
            <button
              className="w-[294px] md:w-[200px] h-[56px] py-3 px-8 rounded-[200px] border border-[#F5E27D] text-[#F5E27D] text-opacity-70 font-bold text-[16px] text-center"
              onClick={handleButtonClick}
            >
              <img src="/credpoints/arrows_clock_wise.svg" className="w-[24px] h-[24px] inline-block" alt="cred" /> Replace PFP
            </button>
          {/* Button to remove image */}
          <button
            className="mt-4 md:mt-0 opacity-50 w-[294px] md:w-[200px] h-[56px] py-3 px-8 rounded-[200px] border border-[#F5E27D] text-[#F5E27D] text-opacity-70 font-bold text-[16px] text-center"
            onClick={() => setSelectedImage('/avatar1.png')} // Change selectedImage to default image
          >
            <img src="/credpoints/x_circle.svg" className="w-[24px] h-[24px] inline-block" alt="cred" /> Remove PFP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAvatarModal;
