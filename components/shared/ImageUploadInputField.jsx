"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";

const MAX_FILE_SIZE = 1024 * 1024; // 100KB

const ImageUploadInputField = ({ setFormData, formData }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const apiKey = "1825be391df34e8fb74e71b399c94c17";

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      return data.data.url; // Return the public image URL
    } else {
      throw new Error("Image upload failed");
    }
  };

  const validateFile = (file) => {
    const isValidType = file.type === "image/jpeg" || file.type === "image/png";
    const isValidSize = file.size <= MAX_FILE_SIZE;

    if (!isValidType) return "Only JPG/PNG files are allowed.";
    if (!isValidSize) return "Image must be under 1MB.";
    return null;
  };

  const handleFile = async (file) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setPreviewUrl(null);
      return;
    }

    setError(null);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    try {
      const imageUrl = await uploadToImgBB(file);
      setFormData((prev) => ({
        ...prev,
        upload: imageUrl,
      }));
    } catch (err) {
      setError("Upload failed. Please try again.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="w-full mt-2">
      <div
        className={`border border-[#D0D7E2] rounded-xl p-8 text-center cursor-pointer transition min-h-[180px] flex items-center justify-center ${
          previewUrl ? "bg-white" : "hover:bg-gray-50"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleChange}
        />
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Preview"
            className="max-h-40 max-w-40 object-contain"
            width={100}
            height={100}
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed">
              <BsCloudUpload size={20} className="text-gray-800" />
            </div>
            <p className="text-sm text-[#0D0D3E]">(JPG, PNG only)</p>
            <p className="text-xs text-gray-500">Max size: 1MB</p>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default ImageUploadInputField;
