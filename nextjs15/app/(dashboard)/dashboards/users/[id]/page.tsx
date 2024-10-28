import React from "react";

// Use async function for your page component
const UserProfilePage = async ({ params }: { params: { id: string } }) => {
  // Await params to ensure it's fully resolved
  const { id } = await params;

  return (
    <div>
      <h1 className="text-3xl">USER PROFILE: {id}</h1>
    </div>
  );
};

export default UserProfilePage; // Ensure you're exporting the component correctly
