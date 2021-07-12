import { signIn, signOut } from "next-auth/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ login, theme, setTheme }) {
  const [settings, setSettings] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [trendingTag] = useState([
    {
      id: 9,
      tag: "100DaysOfCode",
      tweet: 1000
    },
    {
      id: 10,
      tag: "100DaysOfCode",
      tweet: 1000
    },
    {
      id: 1,
      tag: "100DaysOfCode",
      tweet: 1000

    },
    {
      id: 2,
      tag: "100DaysOfCode",
      tweet: 1000

    },
    {
      id: 3,
      tag: "100DaysOfCode",
      tweet: 1000

    },
    {
      id: 4,
      tag: "100DaysOfCode",
      tweet: 1000

    },
    {
      id: 5,
      tag: "100DaysOfCode",
      tweet: 1000

    },
    {
      id: 6,
      tag: "100DaysOfCode",
      tweet: 1000

    },
    {
      id: 7,
      tag: "100DaysOfCode",
      tweet: 1000

    },
    {
      id: 8,
      tag: "100DaysOfCode",
      tweet: 1000

    },
])
const [trendingUser] = useState([
  {
    id: 9,
    name: "kewcoder",
    tweet: 1000
  },
  {
    id: 10,
    name: "kewcoder",
    tweet: 1000
  },
  {
    id: 1,
    name: "kewcoder",
    tweet: 1000

  },
  {
    id: 2,
    name: "kewcoder",
    tweet: 1000

  },
  {
    id: 3,
    name: "kewcoder",
    tweet: 1000

  },
  {
    id: 4,
    name: "kewcoder",
    tweet: 1000

  },
  {
    id: 5,
    name: "kewcoder",
    tweet: 1000

  },
  {
    id: 6,
    name: "kewcoder",
    tweet: 1000

  },
  {
    id: 7,
    name: "kewcoder",
    tweet: 1000

  },
  {
    id: 8,
    name: "kewcoder",
    tweet: 1000

  },
])
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <section className="w-1/4 h-screen flex flex-wrap items-start p-5">
        <div className="w-full flex items-center justify-between cursor-pointer bg-theme_bg_light rounded-3xl py-5 px-10 mb-3">
          {!login && (
            <>
              <div
                className="px-8 py-2 rounded-full bg-primary "
                onClick={() => signIn()}
              >
                Sign in
              </div>
            </>
          )}
          {login && (
            <>
              <button
                className="px-2"
                onClick={() => setProfileDropdown(!profileDropdown)}
              >
                <span className="flex">
                  <img
                    src="/avatar/_2.svg"
                    alt="avatar"
                    width="24px"
                    height="24px"
                  />
                  <span className="px-2">{login.user.name}</span>
                </span>
                {profileDropdown ? (
                  <ul className="absolute bg-theme_bg p-2 rounded-3xl pt-2">
                    <li className="my-2">
                      <Link href="/profile">
                        <button className="w-full py-1 px-8 text-sm rounded-3xl bg-primary text-white">
                          Edit Profile
                        </button>
                      </Link>
                    </li>
                    <li className="my-2">
                      <button
                        className="w-full py-1 px-8 text-sm rounded-3xl bg-red-500 text-white"
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        logout
                      </button>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </button>
            </>
          )}

          <svg
            className="cursor-pointer"
            onClick={() => setSettings(!settings)}
            width="24"
            height="24"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2697 3.17C11.8639 1.61 9.49325 1.61 9.08746 3.17C9.02688 3.40442 8.90805 3.62213 8.74065 3.80541C8.57324 3.9887 8.362 4.13238 8.12409 4.22477C7.88619 4.31716 7.62835 4.35564 7.37156 4.33709C7.11478 4.31854 6.8663 4.24347 6.64634 4.118C5.18124 3.282 3.50471 4.852 4.39744 6.224C4.97408 7.11 4.46257 8.266 3.38617 8.511C1.71925 8.89 1.71925 11.111 3.38617 11.489C3.63656 11.5458 3.86909 11.6572 4.06481 11.8141C4.26053 11.971 4.41392 12.1689 4.51249 12.3918C4.61105 12.6147 4.652 12.8563 4.63201 13.0968C4.61202 13.3373 4.53164 13.5701 4.39744 13.776C3.50471 15.148 5.18124 16.718 6.64634 15.882C6.86626 15.7563 7.11476 15.6811 7.37161 15.6623C7.62847 15.6436 7.88642 15.682 8.12445 15.7743C8.36248 15.8666 8.57387 16.0102 8.7414 16.1935C8.90893 16.3768 9.02787 16.5945 9.08853 16.829C9.49325 18.39 11.865 18.39 12.2686 16.829C12.3295 16.5946 12.4485 16.377 12.6161 16.1939C12.7837 16.0107 12.995 15.8672 13.233 15.7749C13.4709 15.6826 13.7288 15.6442 13.9856 15.6628C14.2424 15.6815 14.4908 15.7565 14.7108 15.882C16.1759 16.718 17.8524 15.148 16.9597 13.776C16.8257 13.57 16.7456 13.3373 16.7257 13.0969C16.7058 12.8564 16.7468 12.6149 16.8453 12.3921C16.9439 12.1692 17.0972 11.9713 17.2928 11.8144C17.4883 11.6575 17.7207 11.546 17.971 11.489C19.6379 11.11 19.6379 8.889 17.971 8.511C17.7206 8.45419 17.4881 8.34281 17.2923 8.18593C17.0966 8.02904 16.9432 7.83109 16.8447 7.60818C16.7461 7.38527 16.7051 7.14372 16.7251 6.90318C16.7451 6.66265 16.8255 6.42994 16.9597 6.224C17.8524 4.852 16.1759 3.282 14.7108 4.118C14.4909 4.24368 14.2424 4.31895 13.9855 4.33767C13.7287 4.35639 13.4707 4.31804 13.2327 4.22574C12.9947 4.13344 12.7833 3.9898 12.6157 3.80651C12.4482 3.62323 12.3293 3.40548 12.2686 3.171L12.2697 3.17ZM10.6786 13C11.5282 13 12.3431 12.6839 12.9438 12.1213C13.5446 11.5587 13.8821 10.7956 13.8821 10C13.8821 9.20435 13.5446 8.44129 12.9438 7.87868C12.3431 7.31607 11.5282 7 10.6786 7C9.82893 7 9.01409 7.31607 8.4133 7.87868C7.81252 8.44129 7.475 9.20435 7.475 10C7.475 10.7956 7.81252 11.5587 8.4133 12.1213C9.01409 12.6839 9.82893 13 10.6786 13Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <ul className="w-full cursor-pointer  bg-theme_bg_light rounded-3xl py-5 px-10 mb-3">
          <li className="flex text-primary">
            <h1 className="flex items-center font-bold  mb-3">
              Trending
              <svg
                className="ml-3"
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 1L11 9L7 5L1 11M11 1H19H11ZM19 1V9V1Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
            <span className="ml-auto text-sm">Today</span>
          </li>
          {trendingTag.map((d, index) => (
            <li className="mb-3 hover:text-primary">
             {index+1}. #{d.tag}
            </li>
          ))}
        </ul>

        <ul className="w-full cursor-pointer  bg-theme_bg_light rounded-3xl py-5 px-10">
          <li className="flex text-primary">
            <h1 className="flex items-center font-bold mb-3">
              Trending User
              <svg
                className="ml-3"
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 1L11 9L7 5L1 11M11 1H19H11ZM19 1V9V1Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
            <span className="ml-auto text-sm">Today</span>
          </li>
          {trendingUser.map((d, index) => (
            <li className="mb-3 hover:text-primary">
             {index+1}. @{d.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Settings */}
      {settings ? (
        <>
          <div className="fixed top-0 h-screen w-screen z-10 flex justify-center overflow-scroll items-center">
            <div
              onClick={() => setSettings(false)}
              className="fixed h-screen bg-theme_bg opacity-75 w-screen z-20 "
            ></div>
            <div className="absolute flex w-4/5  lg:w-2/6 bg-theme_bg mx-auto lg:right-10 ring-2 ring-primary  z-30 rounded-3xl p-4 py-10 flex-wrap items-start">
              <div className="w-full mt-5 flex flex-wrap justify-around ">
                <h1 className="w-full p-4 text-center font-bold">Font</h1>

                <u
                  className="font-mono"
                  onClick={() =>
                    setTheme({
                      primary: theme.primary,
                      bg: theme.bg,
                      font: "font-sans",
                    })
                  }
                >
                  Sans
                </u>

                <u
                  className="font-serif"
                  onClick={() =>
                    setTheme({
                      primary: theme.primary,
                      bg: theme.bg,
                      font: "font-serif",
                    })
                  }
                >
                  Serif
                </u>

                <u
                  className="font-mono"
                  onClick={() =>
                    setTheme({
                      primary: theme.primary,
                      bg: theme.bg,
                      font: "font-mono",
                    })
                  }
                >
                  Mono
                </u>
              </div>

              <div className="w-full mt-5 flex flex-wrap justify-around ">
                <h1 className="w-full p-4 text-center font-bold">Color</h1>

                <div
                  className="primary-teal bg-primary w-10 h-10 rounded-full"
                  onClick={() =>
                    setTheme({
                      primary: "primary-teal",
                      bg: theme.bg,
                      font: theme.font,
                    })
                  }
                ></div>

                <div
                  className="primary-blue bg-primary w-10 h-10 rounded-full"
                  onClick={() =>
                    setTheme({
                      primary: "primary-blue",
                      bg: theme.bg,
                      font: theme.font,
                    })
                  }
                ></div>
              </div>
              <div className="w-full mt-2 flex flex-wrap justify-around ">
                <h1 className="w-full p-4 text-center font-bold">Background</h1>
                <div
                  className="bg-light p-2 px-6 rounded-3xl ring-2 ring-primary mt-4 flex justify-center items-center text-sm"
                  onClick={() =>
                    setTheme({
                      primary: theme.primary,
                      bg: "bg-light",
                      font: theme.font,
                    })
                  }
                >
                  Light Mode
                </div>
                <div
                  className="bg-dark p-2 px-6 rounded-3xl ring-2 ring-primary mt-4 flex justify-center items-center text-sm"
                  onClick={() =>
                    setTheme({
                      primary: theme.primary,
                      bg: "bg-dark",
                      font: theme.font,
                    })
                  }
                >
                  Dark Mode
                </div>
              </div>
              <div className="w-full flex flex-wrap justify-around mt-5">
                <div
                  onClick={() => setSettings(false)}
                  className="text-white px-8 py-2 bg-primary rounded-full font-bold"
                >
                  Done
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
