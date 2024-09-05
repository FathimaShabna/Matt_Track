import Dashboard from "@crema/components/Admin/Dashboard";
import React, { useState } from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const AdminDashboard = () => {
  const [email, setEmail] = useState('');

  const handleInvite = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Invitation sent!');
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };
  return <>
  <form onSubmit={handleInvite}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <button type="submit">Invite User</button>
    </form>
  <div className="flex justify-around gap-5 flex-wrap ">
    <Dashboard content="Create New Project" projectType="Project Type" bgcolor="rgb(241, 240, 232)" link="/new-projects" /* Icon={< MdOutlineCreateNewFolder/> */ />
    <Dashboard content="On Going Project"  projectType="Check Status" bgcolor="rgba(110, 117, 130,0.5)" link=""/>
    <Dashboard content="Completed Project"  projectType="View status" bgcolor="rgba(187, 128, 130,0.5)" link=""/>
    </div>
    

  </>;
};

export default AdminDashboard;
