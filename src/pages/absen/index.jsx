import React, { useState, useRef } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { attendanceIn } from "@/services";

const Absen = () => {
  const [keterangan, setKeterangan] = useState("");
  const fileInputRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a FormData object and append the file and text data
    const data = {
      file: fileInputRef.current.files[0],
      keterangan: keterangan,
      status: "Tepat waktu",
    };
    // Perform any additional processing or API calls with the form data
    // For example, you can send the formData using fetch() or an API library like axios
    try {
      const response = await attendanceIn(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // // Clear the form after submission
    // setFile(null);
    // setKeterangan("");
  };
  return (
    <Box>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Input type="file" ref={fileInputRef} />
        <Input type="text" onChange={(e) => setKeterangan(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Absen;
