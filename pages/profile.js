import Head from "next/head";
import { useEffect, useState } from "react";
const axios = require("axios");

export default function Page({ login, getLogin }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    username: "",
  });

  const setProfileName = (d) => {
    setProfile((old) => {
      return { ...old, name: d };
    });
  };
  const setProfileEmail = (d) => {
    setProfile((old) => {
      return { ...old, email: d };
    });
  };

  const setProfileUsername = (d) => {
    setProfile((old) => {
      return { ...old, username: d };
    });
  };

  useEffect(() => {
    // console.log(login)

    setProfile((old) => {
      return { ...old, ...login.user };
    });
  }, [login]);

  const updateProfile = async (form) => {
    form.preventDefault();

    await axios
      .post(
        "/api/profile",
        {
          ...login.user,
          ...profile,
        },
        {
          headers: {
            Authorization: "Bearer " + login.accessToken,
          },
        }
      )
      .then(function (r) {
        console.log(r);
        getLogin();
      });
  };

  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name="Description" content="Put your description here."></meta>
      </Head>
      <main className="flex flex-wrap w-full p-4 lg:px-20 ">
        <form
          action="/api/profile"
          method="POST"
          encType="multipart/form-data"
          onSubmit={updateProfile}
          className="flex w-full lg:w-1/2 flex-wrap"
        >
          <h1 className="w-full mb-3 font-bold">Edit Profile</h1>

          <div className="w-full flex flex-wrap mb-3">
            <label className="w-full mb-3">Avatar</label>
            <input
              className="w-full px-4 py-2 rounded-lg  text-theme_color bg-theme_bg ring-2 ring-primary"
              placeholder="Avatar"
              type="file"
            />
          </div>
          <div className="w-full flex flex-wrap mb-3  ">
            <label className="w-full mb-3">Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={(d) => setProfileName(d.target.value)}
              className="w-full px-4 py-2 rounded-lg text-theme_color bg-theme_bg ring-2 ring-primary"
              placeholder="Name"
              type="text"
            />
          </div>

          <div className="w-full flex flex-wrap mb-3  ">
            <label className="w-full mb-3">Email</label>
            <input
              name="email"
              value={profile.email}
              onChange={(d) => setProfileEmail(d.target.value)}
              className="w-full px-4 py-2 rounded-lg text-theme_color bg-theme_bg ring-2 ring-primary"
              placeholder="Email"
              type="text"
            />
          </div>

          <div className="w-full flex flex-wrap mb-3 ">
            <label className="w-full mb-3">Username</label>
            <input
              name="username"
              value={profile.username}
              onChange={(d) => setProfileUsername(d.target.value)}
              className="w-full px-4 py-2 rounded-lg text-theme_color bg-theme_bg ring-2 ring-primary"
              placeholder="Username"
              type="text"
            />
          </div>

          <div className="w-full flex flex-wrap mb-3">
            <button
              className="w-full px-4 py-2 rounded-lg bg-primary text-primary_dark"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
