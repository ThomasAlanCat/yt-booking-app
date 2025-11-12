// upload image to cloudinary

// upload images
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "thomas_alan");
  //   const cloudName = process.env.REACT_APP_CLOUD_NAME;
  //   console.log(process.env.REACT_APP_CLOUD_NAME);

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dbarxw4q8/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("something went wrong");
  }

  const data = await response.json();
 
  return data.secure_url;
};
