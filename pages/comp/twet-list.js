export default function Navbar() {
  const twets = ["Ari Bahtiar", "Kew Coder", "Twitgram"];

  const list = twets.map((t) => (
    <div
      className="w-full bg-theme_bg_light rounded-3xl relative flex flex-wrap mt-5 p-5"
      key={t}
    >
        <div className="w-full flex items-center">
          <div className="p-2">
            <img
              width="50px"
              className="border-2 border-primary rounded-full"
              height="50px"
              src="/avatar/_1.svg"
            />
          </div>
          <div>
            <h6 className="text-xl font-bold"> {t}</h6>
          </div>
          <div className="ml-auto">
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H2.01H2ZM9 2H9.01H9ZM16 2H16.01H16ZM3 2C3 2.26522 2.89464 2.51957 2.70711 2.70711C2.51957 2.89464 2.26522 3 2 3C1.73478 3 1.48043 2.89464 1.29289 2.70711C1.10536 2.51957 1 2.26522 1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1C2.26522 1 2.51957 1.10536 2.70711 1.29289C2.89464 1.48043 3 1.73478 3 2V2ZM10 2C10 2.26522 9.89464 2.51957 9.70711 2.70711C9.51957 2.89464 9.26522 3 9 3C8.73478 3 8.48043 2.89464 8.29289 2.70711C8.10536 2.51957 8 2.26522 8 2C8 1.73478 8.10536 1.48043 8.29289 1.29289C8.48043 1.10536 8.73478 1 9 1C9.26522 1 9.51957 1.10536 9.70711 1.29289C9.89464 1.48043 10 1.73478 10 2V2ZM17 2C17 2.26522 16.8946 2.51957 16.7071 2.70711C16.5196 2.89464 16.2652 3 16 3C15.7348 3 15.4804 2.89464 15.2929 2.70711C15.1054 2.51957 15 2.26522 15 2C15 1.73478 15.1054 1.48043 15.2929 1.29289C15.4804 1.10536 15.7348 1 16 1C16.2652 1 16.5196 1.10536 16.7071 1.29289C16.8946 1.48043 17 1.73478 17 2V2Z"
                stroke="#F1F1F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="w-full lg:pl-16">
          Hello guys, this is my peraonal portfolio website, i creating with
          html css and javascript. demo at http://kewcode.com , thank u .
          #webdev
          <img src="/example.png" width="100%" className="rounded-3xl mt-5" />
        </p>
        <div className="w-full flex justify-between items-center px-10 py-5 mt-5">
          {/* action */}
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66667 10H6.675H6.66667ZM10 10H10.0083H10ZM13.3333 10H13.3417H13.3333ZM17.5 10C17.5 13.6817 14.1417 16.6667 10 16.6667C8.77386 16.6708 7.56233 16.4006 6.45417 15.8758L2.5 16.6667L3.6625 13.5667C2.92667 12.535 2.5 11.3117 2.5 10C2.5 6.31833 5.85833 3.33333 10 3.33333C14.1417 3.33333 17.5 6.31833 17.5 10Z"
                stroke="#F1F1F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1667 16.6667L10.8333 13.3333M5.83333 13.3333V3.33333V13.3333ZM5.83333 3.33333L2.5 6.66667L5.83333 3.33333ZM5.83333 3.33333L9.16667 6.66667L5.83333 3.33333ZM14.1667 6.66667V16.6667V6.66667ZM14.1667 16.6667L17.5 13.3333L14.1667 16.6667Z"
                stroke="#F1F1F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.59837 5.265C3.25014 5.61322 2.97391 6.02662 2.78546 6.48159C2.597 6.93657 2.5 7.42421 2.5 7.91667C2.5 8.40913 2.597 8.89677 2.78546 9.35174C2.97391 9.80671 3.25014 10.2201 3.59837 10.5683L10 16.97L16.4017 10.5683C17.105 9.86507 17.5001 8.91123 17.5001 7.91667C17.5001 6.9221 17.105 5.96827 16.4017 5.265C15.6984 4.56173 14.7446 4.16664 13.75 4.16664C12.7555 4.16664 11.8016 4.56173 11.0984 5.265L10 6.36333L8.9017 5.265C8.55348 4.91677 8.14008 4.64055 7.68511 4.45209C7.23013 4.26363 6.74249 4.16663 6.25003 4.16663C5.75757 4.16663 5.26993 4.26363 4.81496 4.45209C4.35998 4.64055 3.94659 4.91677 3.59837 5.265V5.265Z"
                stroke="#F1F1F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16663 4.16667C4.16663 3.72464 4.34222 3.30072 4.65478 2.98816C4.96734 2.67559 5.39127 2.5 5.83329 2.5H14.1666C14.6087 2.5 15.0326 2.67559 15.3451 2.98816C15.6577 3.30072 15.8333 3.72464 15.8333 4.16667V17.5L9.99996 14.5833L4.16663 17.5V4.16667Z"
                stroke="#F1F1F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
  ));

  return (
    <>
      <section className="p-2">
        {list}
      </section>
    </>
  );
}
