export const CardboardBox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" role="img" height="24" width="24">
    <path d="M21.75 8c-.08 0-.17-.01-.25-.04L12 4.55 2.5 7.96c-.39.14-.82-.07-.96-.46s.07-.82.46-.96l9.75-3.5c.16-.06.34-.06.51 0L22 6.54c.39.14.59.57.45.96-.1.31-.39.5-.7.5"></path>
    <path d="M12 22c-.1 0-.19-.02-.28-.06l-9.75-4a.76.76 0 0 1-.47-.69v-10c0-.25.12-.48.33-.62a.73.73 0 0 1 .7-.07L12 10.44l9.46-3.88c.23-.09.49-.07.7.07.22.14.34.37.34.62v10c0 .3-.18.58-.46.69l-9.75 4c-.1.04-.19.06-.29.06m-9-5.25 9 3.69 9-3.69V8.37l-8.72 3.58c-.18.08-.39.08-.57 0L3 8.37z"></path>
    <path d="M12 22c-.41 0-.75-.34-.75-.75v-10c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75"></path>
    <path d="M17.25 15c-.41 0-.75-.34-.75-.75V9.77L6.99 6.2a.74.74 0 0 1-.44-.96.74.74 0 0 1 .96-.44l10 3.75c.3.11.49.39.49.7v5c0 .41-.34.75-.75.75"></path>
  </svg>
);

export const CartFill = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
  </svg>
);

export const ScreenIcons = ({ num = 0, category = "" }: { num: number; category: string }) => {
  let smallLabelColor;
  let mediumLabelColor;
  let largeLabelColor;
  let smallColor;
  let mediumColor;
  let largeColor;

  if (category === "Tablets") {
    smallLabelColor = num < 7 ? "text-gray-800" : "text-gray-500";
    mediumLabelColor = num >= 7 && num < 12 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 12 ? "text-gray-800" : "text-gray-500";

    smallColor = num < 7 ? "#4d4d4d" : "#c5cbd5";
    mediumColor = num >= 7 && num < 12 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 12 ? "#4d4d4d" : "#c5cbd5";
  } else if (category === "Phones") {
    smallLabelColor = num < 6 ? "text-gray-800" : "text-gray-500";
    mediumLabelColor = num >= 6 && num < 6.4 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 6.4 ? "text-gray-800" : "text-gray-500";

    smallColor = num < 6 ? "#4d4d4d" : "#c5cbd5";
    mediumColor = num >= 6 && num < 6.4 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 6.4 ? "#4d4d4d" : "#c5cbd5";
  } else {
    smallLabelColor = num < 12 ? "text-gray-800" : "text-gray-500";
    mediumLabelColor = num >= 12 && num < 15 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 15 ? "text-gray-800" : "text-gray-500";

    smallColor = num < 12 ? "#4d4d4d" : "#c5cbd5";
    mediumColor = num >= 12 && num < 15 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 15 ? "#4d4d4d" : "#c5cbd5";
  }
  const Description = () => {
    if (category === "Tablets") {
      if (num >= 12) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Business and productivity</li>
            <li>Laptop alternative</li>
            <li>High quality content (games, movies)</li>
          </ul>
        );
      } else if (num >= 7 && num < 12) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Great for business travel</li>
            <li>Get work done without a laptop</li>
            <li>Good for video/gaming</li>
          </ul>
        );
      } else {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Compact and portable</li>
            <li>Budget friendly</li>
            <li>Less ideal for gaming/movies</li>
          </ul>
        );
      }
    } else if (category === "Phones") {
      if (num >= 6.4) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Not quite as portable</li>
            <li>Great for photo and video editing</li>
            <li>Great for gaming and movies</li>
          </ul>
        );
      } else if (num >= 6 && num < 6.4) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Most popular size range</li>
            <li>Power + portability</li>
            <li>Great for every task</li>
          </ul>
        );
      } else {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Light and portable</li>
            <li>Budget friendly</li>
            <li>Easy to take anywhere</li>
          </ul>
        );
      }
    } else {
      if (num >= 15) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Not quite as portable</li>
            <li>Great for photo and video editing</li>
            <li>Great for gaming and movies</li>
          </ul>
        );
      } else if (num >= 12 && num < 15) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Most popular size range</li>
            <li>Power + portability</li>
            <li>Great for general tasks</li>
          </ul>
        );
      } else {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Light and portable</li>
            <li>Budget friendly</li>
            <li>Easy to take anywhere</li>
          </ul>
        );
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={smallColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={28}
              height={28}
              className="inline-block"
            >
              <path d="M23.75 23.5H8.25c-1.52 0-2.75-1.23-2.75-2.75v-9.5c0-1.52 1.23-2.75 2.75-2.75h15.5c1.52 0 2.75 1.23 2.75 2.75v9.5c0 1.52-1.23 2.75-2.75 2.75ZM8.25 10C7.56 10 7 10.56 7 11.25v9.5c0 .69.56 1.25 1.25 1.25h15.5c.69 0 1.25-.56 1.25-1.25v-9.5c0-.69-.56-1.25-1.25-1.25H8.25Z"></path>
              <path d="M22.25 16c-.41 0-.75-.34-.75-.75V13.5h-1.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75Z"></path>
              <path d="M12.25 20h-2.5c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${smallLabelColor}`}>Small</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={mediumColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={36}
              height={36}
              className="inline-block"
            >
              <path d="M23.75 23.5H8.25c-1.52 0-2.75-1.23-2.75-2.75v-9.5c0-1.52 1.23-2.75 2.75-2.75h15.5c1.52 0 2.75 1.23 2.75 2.75v9.5c0 1.52-1.23 2.75-2.75 2.75ZM8.25 10C7.56 10 7 10.56 7 11.25v9.5c0 .69.56 1.25 1.25 1.25h15.5c.69 0 1.25-.56 1.25-1.25v-9.5c0-.69-.56-1.25-1.25-1.25H8.25Z"></path>
              <path d="M22.25 16c-.41 0-.75-.34-.75-.75V13.5h-1.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75Z"></path>
              <path d="M12.25 20h-2.5c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${mediumLabelColor}`}>Medium</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={largeColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={44}
              height={44}
              className="inline-block"
            >
              <path d="M23.75 23.5H8.25c-1.52 0-2.75-1.23-2.75-2.75v-9.5c0-1.52 1.23-2.75 2.75-2.75h15.5c1.52 0 2.75 1.23 2.75 2.75v9.5c0 1.52-1.23 2.75-2.75 2.75ZM8.25 10C7.56 10 7 10.56 7 11.25v9.5c0 .69.56 1.25 1.25 1.25h15.5c.69 0 1.25-.56 1.25-1.25v-9.5c0-.69-.56-1.25-1.25-1.25H8.25Z"></path>
              <path d="M22.25 16c-.41 0-.75-.34-.75-.75V13.5h-1.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75Z"></path>
              <path d="M12.25 20h-2.5c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${largeLabelColor}`}>Large</span>
        </div>
      </div>
      <div className="m-4">
        <Description />
      </div>
    </div>
  );
};

export const MemoryIcons = ({ num = 0, category = "" }: { num: number; category: string }) => {
  let smallLabelColor;
  let mediumLabelColor;
  let largeLabelColor;
  let smallColor;
  let mediumColor;
  let largeColor;

  if (category === "Computers") {
    smallLabelColor = num < 7 ? "text-gray-800" : "text-gray-500";
    mediumLabelColor = num >= 7 && num < 15 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 16 ? "text-gray-800" : "text-gray-500";

    smallColor = num < 7 ? "#4d4d4d" : "#c5cbd5";
    mediumColor = num >= 7 && num < 15 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 16 ? "#4d4d4d" : "#c5cbd5";
  } else {
    smallLabelColor = num < 4 ? "text-gray-800" : "text-gray-500";
    mediumLabelColor = num >= 4 && num < 8 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 8 ? "text-gray-800" : "text-gray-500";

    smallColor = num < 4 ? "#4d4d4d" : "#c5cbd5";
    mediumColor = num >= 4 && num < 8 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 8 ? "#4d4d4d" : "#c5cbd5";
  }
  const Description = () => {
    if (category === "Computers") {
      if (num >= 16) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Professional level performance</li>
            <li>Handles demanding applications</li>
            <li>High-end gaming</li>
          </ul>
        );
      } else if (num >= 7 && num < 15) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Decent multitasking</li>
            <li>Photo/video editing</li>
            <li>Mid-range gaming</li>
          </ul>
        );
      } else {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Compact and portable</li>
            <li>Budget friendly</li>
            <li>Less ideal for gaming/movies</li>
          </ul>
        );
      }
    } else {
      if (num >= 8) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Professional level performance</li>
            <li>Handles demanding applications</li>
            <li>High-end gaming</li>
          </ul>
        );
      } else if (num >= 4 && num < 8) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Decent multitasking</li>
            <li>Photo/video editing</li>
            <li>Mid-range gaming</li>
          </ul>
        );
      } else {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Minimum for basic tasks</li>
            <li>Web browsing</li>
            <li>Basic streaming</li>
          </ul>
        );
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={smallColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={28}
              height={28}
              className="inline-block"
            >
              <path d="M29.25 22H2.75c-.41 0-.75-.34-.75-.75V9.75C2 8.23 3.23 7 4.75 7h22.5C28.77 7 30 8.23 30 9.75v11.5c0 .41-.34.75-.75.75ZM3.5 20.5h25V9.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25V20.5Z"></path>
              <path d="M21.75 18h-11.5C9.56 18 9 17.44 9 16.75v-4.5c0-.69.56-1.25 1.25-1.25h11.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25ZM10.5 16.5h11v-4h-11v4Z"></path>
              <path d="M29.25 24.5h-2c-.96 0-1.75-.79-1.75-1.75V22h-19v.75c0 .96-.79 1.75-1.75 1.75h-2c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75h26.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75ZM27 22v.75c0 .14.11.25.25.25h1.25v-1H27ZM3.5 23h1.25c.14 0 .25-.11.25-.25V22H3.5v1Z"></path>
              <path d="M22.25 24.5H9.75c-.96 0-1.75-.79-1.75-1.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .14.11.25.25.25h12.5c.14 0 .25-.11.25-.25v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96-.79 1.75-1.75 1.75Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${smallLabelColor}`}>Low</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={mediumColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={36}
              height={36}
              className="inline-block"
            >
              <path d="M29.25 22H2.75c-.41 0-.75-.34-.75-.75V9.75C2 8.23 3.23 7 4.75 7h22.5C28.77 7 30 8.23 30 9.75v11.5c0 .41-.34.75-.75.75ZM3.5 20.5h25V9.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25V20.5Z"></path>
              <path d="M25.75 18h-7.5c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25Zm-7.25-1.5h7v-4h-7v4Z"></path>
              <path d="M13.75 18h-7.5C5.56 18 5 17.44 5 16.75v-4.5c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25ZM6.5 16.5h7v-4h-7v4Z"></path>
              <path d="M29.25 24.5h-2c-.96 0-1.75-.79-1.75-1.75V22h-19v.75c0 .96-.79 1.75-1.75 1.75h-2c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75h26.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75ZM27 22v.75c0 .14.11.25.25.25h1.25v-1H27ZM3.5 23h1.25c.14 0 .25-.11.25-.25V22H3.5v1Z"></path>
              <path d="M22.25 24.5H9.75c-.96 0-1.75-.79-1.75-1.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .14.11.25.25.25h12.5c.14 0 .25-.11.25-.25v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96-.79 1.75-1.75 1.75Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${mediumLabelColor}`}>Medium</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={largeColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={44}
              height={44}
              className="inline-block"
            >
              <path d="M29.25 22H2.75c-.41 0-.75-.34-.75-.75V9.75C2 8.23 3.23 7 4.75 7h22.5C28.77 7 30 8.23 30 9.75v11.5c0 .41-.34.75-.75.75ZM3.5 20.5h25V9.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25V20.5Z"></path>
              <path d="M25.75 18h-3.5c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25Zm-3.25-1.5h3v-4h-3v4Z"></path>
              <path d="M17.75 18h-3.5c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25Zm-3.25-1.5h3v-4h-3v4Z"></path>
              <path d="M9.75 18h-3.5C5.56 18 5 17.44 5 16.75v-4.5c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25ZM6.5 16.5h3v-4h-3v4Z"></path>
              <path d="M29.25 24.5h-2c-.96 0-1.75-.79-1.75-1.75V22h-19v.75c0 .96-.79 1.75-1.75 1.75h-2c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75h26.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75ZM27 22v.75c0 .14.11.25.25.25h1.25v-1H27ZM3.5 23h1.25c.14 0 .25-.11.25-.25V22H3.5v1Z"></path>
              <path d="M22.25 24.5H9.75c-.96 0-1.75-.79-1.75-1.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .14.11.25.25.25h12.5c.14 0 .25-.11.25-.25v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96-.79 1.75-1.75 1.75Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${largeLabelColor}`}>High</span>
        </div>
      </div>
      <div className="m-4">
        <Description />
      </div>
    </div>
  );
};

export const StorageIcons = ({ storage, category = "" }: { storage: string; category: string }) => {
  let smallLabelColor;
  let mediumLabelColor;
  let largeLabelColor;
  let smallColor;
  let mediumColor;
  let largeColor;

  const num = parseInt(storage, 10);

  if (category === "Computers" && storage.includes("GB")) {
    smallLabelColor = num < 512 ? "text-gray-800" : "text-gray-500";
    mediumLabelColor = num >= 512 && num < 999 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 999 ? "text-gray-800" : "text-gray-500";

    smallColor = num < 512 ? "#4d4d4d" : "#c5cbd5";
    mediumColor = num >= 512 && num < 999 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 999 ? "#4d4d4d" : "#c5cbd5";
  } else if (storage.includes("GB")) {
    smallLabelColor = num < 128 ? "text-gray-800" : "text-gray-500";
    mediumLabelColor = num >= 128 && num < 256 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 256 ? "text-gray-800" : "text-gray-500";

    smallColor = num < 128 ? "#4d4d4d" : "#c5cbd5";
    mediumColor = num >= 128 && num < 256 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 256 ? "#4d4d4d" : "#c5cbd5";
  }

  if (category === "Computers" && storage.includes("TB")) {
    smallLabelColor = "text-gray-500";
    mediumLabelColor = num >= 1 && num < 2 ? "text-gray-800" : "text-gray-500";
    largeLabelColor = num >= 2 ? "text-gray-800" : "text-gray-500";

    smallColor = "#c5cbd5";
    mediumColor = num >= 1 && num < 2 ? "#4d4d4d" : "#c5cbd5";
    largeColor = num >= 2 ? "#4d4d4d" : "#c5cbd5";
  } else if (storage.includes("TB")) {
    smallLabelColor = "text-gray-500";
    mediumLabelColor = "text-gray-500";
    largeLabelColor = "text-gray-800";

    smallColor = "#c5cbd5";
    mediumColor = "#c5cbd5";
    largeColor = "#4d4d4d";
  }

  const Description = () => {
    if (category === "Computers") {
      if (num >= 999) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Great for large game installs</li>
            <li>High storage volume</li>
            <li>Store tons of photos/video</li>
          </ul>
        );
      } else if (num >= 257 && num < 999) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Great for most uses</li>
            <li>Not ideal for gaming or high-res video</li>
            <li>Photo/video editing</li>
          </ul>
        );
      } else {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Great for working with small files</li>
            <li>Runs basic programs</li>
            <li>Add cloud storage for extra space</li>
          </ul>
        );
      }
    } else {
      if (num >= 256) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Store movies, music and 4K content</li>
            <li>Use for work projects</li>
            <li>Store tons of photos/video</li>
          </ul>
        );
      } else if (num >= 128 && num < 256) {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Store media in offline mode</li>
            <li>Room for more apps</li>
            <li>Store tons of photos/video</li>
          </ul>
        );
      } else {
        return (
          <ul className="list-disc marker:text-blue-600 text-sm">
            <li>Budget friendly</li>
            <li>Limited space for apps and files</li>
            <li>Add cloud storage for extra space</li>
          </ul>
        );
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={smallColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={28}
              height={28}
              className="inline-block"
            >
              <path d="M27.75 19.5H4.25C3.01 19.5 2 18.49 2 17.25v-2.5c0-1.24 1.01-2.25 2.25-2.25h23.5c1.24 0 2.25 1.01 2.25 2.25v2.5c0 1.24-1.01 2.25-2.25 2.25ZM4.25 14c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75h23.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75H4.25Z"></path>
              <path d="M7 15c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M11 15c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${smallLabelColor}`}>Low</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={mediumColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={36}
              height={36}
              className="inline-block"
            >
              <path d="M27.75 22.25H4.25C3.01 22.25 2 21.24 2 20v-2.5c0-1.24 1.01-2.25 2.25-2.25h23.5c1.24 0 2.25 1.01 2.25 2.25V20c0 1.24-1.01 2.25-2.25 2.25Zm-23.5-5.5c-.41 0-.75.34-.75.75V20c0 .41.34.75.75.75h23.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75H4.25Z"></path>
              <path d="M7 17.75c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M11 17.75c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M27.75 16.75H4.25C3.01 16.75 2 15.74 2 14.5V12c0-1.24 1.01-2.25 2.25-2.25h23.5C28.99 9.75 30 10.76 30 12v2.5c0 1.24-1.01 2.25-2.25 2.25Zm-23.5-5.5c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75h23.5c.41 0 .75-.34.75-.75V12c0-.41-.34-.75-.75-.75H4.25Z"></path>
              <path d="M7 12.25c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M11 12.25c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${mediumLabelColor}`}>Medium</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={largeColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={44}
              height={44}
              className="inline-block"
            >
              <path d="M27.75 25H4.25C3.01 25 2 23.99 2 22.75v-2.5C2 19.01 3.01 18 4.25 18h23.5c1.24 0 2.25 1.01 2.25 2.25v2.5c0 1.24-1.01 2.25-2.25 2.25Zm-23.5-5.5c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75h23.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75H4.25Z"></path>
              <path d="M7 20.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M11 20.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M27.75 19.5H4.25C3.01 19.5 2 18.49 2 17.25v-2.5c0-1.24 1.01-2.25 2.25-2.25h23.5c1.24 0 2.25 1.01 2.25 2.25v2.5c0 1.24-1.01 2.25-2.25 2.25ZM4.25 14c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75h23.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75H4.25Z"></path>
              <path d="M7 15c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M11 15c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M27.75 14H4.25C3.01 14 2 12.99 2 11.75v-2.5C2 8.01 3.01 7 4.25 7h23.5C28.99 7 30 8.01 30 9.25v2.5c0 1.24-1.01 2.25-2.25 2.25ZM4.25 8.5c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75h23.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75H4.25Z"></path>
              <path d="M7 9.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M11 9.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
            </svg>
          </div>
          <span className={`mt-2 font-semibold text-xs ${largeLabelColor}`}>High</span>
        </div>
      </div>
      <div className="m-4">
        <Description />
      </div>
    </div>
  );
};

export const ProcessorIcons = ({ processor = "", category = "" }: { processor: string; category: string }) => {
  let smallLabelColor;
  let mediumLabelColor;
  let largeLabelColor;
  let smallColor;
  let mediumColor;
  let largeColor;

  let current;

  if (
    processor.includes("M4") ||
    processor.includes("M4 Pro") ||
    processor.includes("M3 Pro") ||
    processor.includes("M2 Pro") ||
    processor.includes("M1 Pro") ||
    processor.includes("M1 Max") ||
    processor.includes("M2 Max") ||
    processor.includes("M3 Max") ||
    processor.includes("M4 Max") ||
    processor.includes("i9") ||
    processor.includes("i7") ||
    processor.includes("Ryzen 9") ||
    processor.includes("Ryzen 7") ||
    processor.includes("Ultra 9") ||
    processor.includes("Ultra 7") ||
    processor.includes("A18") ||
    processor.includes("A17") ||
    processor.includes("Snapdragon 8") ||
    processor.includes("Google Tensor")
  ) {
    current = "High";
  } else if (
    processor.includes("M1") ||
    processor.includes("M2") ||
    processor.includes("M3") ||
    processor.includes("i5") ||
    processor.includes("Ryzen 5") ||
    processor.includes("A16") ||
    processor.includes("A15") ||
    processor.includes("Snapdragon 7")
  ) {
    current = "Mid";
  } else {
    current = "Low";
  }

  smallLabelColor = current === "Low" ? "text-gray-800" : "text-gray-500";
  mediumLabelColor = current === "Mid" ? "text-gray-800" : "text-gray-500";
  largeLabelColor = current === "High" ? "text-gray-800" : "text-gray-500";

  smallColor = current === "Low" ? "#4d4d4d" : "#c5cbd5";
  mediumColor = current === "Mid" ? "#4d4d4d" : "#c5cbd5";
  largeColor = current === "High" ? "#4d4d4d" : "#c5cbd5";

  const Description = () => {
    if (
      processor.includes("M4") ||
      processor.includes("M4 Pro") ||
      processor.includes("M3 Pro") ||
      processor.includes("M2 Pro") ||
      processor.includes("M1 Pro") ||
      processor.includes("M1 Max") ||
      processor.includes("M2 Max") ||
      processor.includes("M3 Max") ||
      processor.includes("M4 Max") ||
      processor.includes("i9") ||
      processor.includes("i7") ||
      processor.includes("Ryzen 9") ||
      processor.includes("Ryzen 7") ||
      processor.includes("Ultra 9") ||
      processor.includes("Ultra 7") ||
      processor.includes("A18") ||
      processor.includes("A17") ||
      processor.includes("Snapdragon 8") ||
      processor.includes("Google Tensor")
    ) {
      return (
        <ul className="list-disc marker:text-blue-600 text-sm">
          <li>Designed for power users</li>
          <li>Excels at gaming and intensive tasks</li>
          <li>Exceptional multitasking and productivity</li>
        </ul>
      );
    } else if (
      processor.includes("M1") ||
      processor.includes("M2") ||
      processor.includes("M3") ||
      processor.includes("i5") ||
      processor.includes("Ryzen 5") ||
      processor.includes("Ultra 5") ||
      processor.includes("A16") ||
      processor.includes("A15") ||
      processor.includes("Snapdragon 7")
    ) {
      return (
        <ul className="list-disc marker:text-blue-600 text-sm">
          <li>Mid-grade processor</li>
          <li>Great for most tasks and gaming</li>
          <li>Multitasks well</li>
        </ul>
      );
    } else {
      return (
        <ul className="list-disc marker:text-blue-600 text-sm">
          <li>Entry-level processor</li>
          <li>Good for everyday tasks</li>
          <li>Basic music and videos</li>
        </ul>
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={smallColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={28}
              height={28}
              className="inline-block"
            >
              <path d="M29.25 16.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5V11.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5V7.25c0-1.52-1.23-2.75-2.75-2.75H22V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5h-3.75V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5H11.5V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5H7.25C5.73 4.5 4.5 5.73 4.5 7.25V10H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v3.75H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v3.75H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v2.75c0 1.52 1.23 2.75 2.75 2.75h3.18v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h3.32v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h3.32v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h3.18c1.52 0 2.75-1.23 2.75-2.75V22h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5v-3.75h1.75Zm-3.25 8c0 .69-.56 1.25-1.25 1.25H7.25C6.56 26 6 25.44 6 24.75V7.25C6 6.56 6.56 6 7.25 6h17.5c.69 0 1.25.56 1.25 1.25v17.5Z"></path>
              <path d="M21.25 22h-10.5c-.41 0-.75-.34-.75-.75v-10.5c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v10.5c0 .41-.34.75-.75.75Zm-9.75-1.5h9v-9h-9v9Z"></path>
              <circle cx="14" cy="14" r="1"></circle>
              <circle cx="18" cy="18" r="1"></circle>
              <circle cx="18" cy="14" r="1"></circle>
              <circle cx="14" cy="18" r="1"></circle>
            </svg>
          </div>
          <span className={`whitespace-nowrap mt-2 font-semibold text-xs ${smallLabelColor}`}>Low-End</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={mediumColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={36}
              height={36}
              className="inline-block"
            >
              <path d="M29.25 16.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5V11.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5V7.25c0-1.52-1.23-2.75-2.75-2.75H22V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5h-3.75V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5H11.5V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5H7.25C5.73 4.5 4.5 5.73 4.5 7.25V10H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v3.75H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v3.75H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v2.75c0 1.52 1.23 2.75 2.75 2.75h3.18v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h3.32v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h3.32v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h3.18c1.52 0 2.75-1.23 2.75-2.75V22h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5v-3.75h1.75Zm-3.25 8c0 .69-.56 1.25-1.25 1.25H7.25C6.56 26 6 25.44 6 24.75V7.25C6 6.56 6.56 6 7.25 6h17.5c.69 0 1.25.56 1.25 1.25v17.5Z"></path>
              <path d="M22.25 23H9.75c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75ZM10.5 21.5h11v-3h-11v3Z"></path>
              <path d="M22.25 15H9.75c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75ZM10.5 13.5h11v-3h-11v3Z"></path>
            </svg>
          </div>
          <span className={`whitespace-nowrap mt-2 font-semibold text-xs ${mediumLabelColor}`}>Mid-Range</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={largeColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={44}
              height={44}
              className="inline-block"
            >
              <path d="M29.25 16.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5v-5.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5v-1c0-1.52-1.23-2.75-2.75-2.75h-1V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5h-5.5V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4.5h-5.5V2.75C9.75 2.34 9.41 2 9 2s-.75.34-.75.75V4.5h-1C5.73 4.5 4.5 5.73 4.5 7.25v1H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v5.5H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v5.5H2.75c-.41 0-.75.34-.75.75s.34.75.75.75H4.5v1c0 1.52 1.23 2.75 2.75 2.75h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h4.5v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h4.5v1.75c0 .41.34.75.75.75s.75-.34.75-.75V27.5h2c1.52 0 2.75-1.23 2.75-2.75v-1h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H27.5v-5.5h1.75Zm-3.25 8c0 .69-.56 1.25-1.25 1.25H7.25C6.56 26 6 25.44 6 24.75V7.25C6 6.56 6.56 6 7.25 6h17.5c.69 0 1.25.56 1.25 1.25v17.5Z" />
              <path d="M23.25 15h-5.5c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75Zm-4.75-1.5h4v-3h-4v3Z" />
              <path d="M14.25 23h-5.5c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75ZM9.5 21.5h4v-3h-4v3Z" />
              <path d="M14.25 15h-5.5c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75ZM9.5 13.5h4v-3h-4v3Z" />
              <path d="M23.25 23h-5.5c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75Zm-4.75-1.5h4v-3h-4v3Z" />
            </svg>
          </div>
          <span className={`whitespace-nowrap mt-2 font-semibold text-xs ${largeLabelColor}`}>High-End</span>
        </div>
      </div>
      <div className="m-4">
        <Description />
      </div>
    </div>
  );
};

export const GraphicsIcons = ({ graphics = "", category = "" }: { graphics: string; category: string }) => {
  let smallLabelColor;
  let mediumLabelColor;
  let largeLabelColor;
  let smallColor;
  let mediumColor;
  let largeColor;

  let current;

  if (
    graphics.includes("RTX 4090") ||
    graphics.includes("RTX 4080") ||
    graphics.includes("RTX 3090") ||
    graphics.includes("RX 69") ||
    graphics.includes("RX 79") ||
    graphics.includes("M4 Pro") ||
    graphics.includes("M3 Pro") ||
    graphics.includes("M2 Pro") ||
    graphics.includes("M1 Pro") ||
    graphics.includes("M1 Max") ||
    graphics.includes("M2 Max") ||
    graphics.includes("M3 Max") ||
    graphics.includes("M4 Max") ||
    graphics.includes("A18") ||
    graphics.includes("A17") ||
    graphics.includes("Adreno 7")
  ) {
    current = "High";
  } else if (
    graphics.includes("RTX 3070") ||
    graphics.includes("RTX 3080") ||
    graphics.includes("RTX 4070") ||
    graphics.includes("RX 68") ||
    graphics.includes("RX 67") ||
    graphics.includes("RX 77") ||
    graphics.includes("RX 78") ||
    graphics.includes("M1") ||
    graphics.includes("M2") ||
    graphics.includes("M3") ||
    graphics.includes("M4") ||
    graphics.includes("A16") ||
    graphics.includes("A15") ||
    graphics.includes("Adreno 6")
  ) {
    current = "Mid";
  } else {
    current = "Low";
  }

  smallLabelColor = current === "Low" ? "text-gray-800" : "text-gray-500";
  mediumLabelColor = current === "Mid" ? "text-gray-800" : "text-gray-500";
  largeLabelColor = current === "High" ? "text-gray-800" : "text-gray-500";

  smallColor = current === "Low" ? "#4d4d4d" : "#c5cbd5";
  mediumColor = current === "Mid" ? "#4d4d4d" : "#c5cbd5";
  largeColor = current === "High" ? "#4d4d4d" : "#c5cbd5";

  const Description = () => {
    if (
      graphics.includes("RTX 4090") ||
      graphics.includes("RTX 4080") ||
      graphics.includes("RTX 3090") ||
      graphics.includes("RX 69") ||
      graphics.includes("RX 79") ||
      graphics.includes("M4 Pro") ||
      graphics.includes("M3 Pro") ||
      graphics.includes("M2 Pro") ||
      graphics.includes("M1 Pro") ||
      graphics.includes("M1 Max") ||
      graphics.includes("M2 Max") ||
      graphics.includes("M3 Max") ||
      graphics.includes("M4 Max") ||
      graphics.includes("A18") ||
      graphics.includes("A17") ||
      graphics.includes("Adreno 7")
    ) {
      return (
        <ul className="list-disc marker:text-blue-600 text-sm">
          <li>Offers gameplay at max settings and high framerates</li>
          <li>Powerful and efficient</li>
          <li>Ideal for gaming enthusiasts or professionals</li>
        </ul>
      );
    } else if (
      graphics.includes("RTX 3070") ||
      graphics.includes("RTX 3080") ||
      graphics.includes("RTX 4070") ||
      graphics.includes("RX 68") ||
      graphics.includes("RX 67") ||
      graphics.includes("RX 77") ||
      graphics.includes("RX 78") ||
      graphics.includes("M1") ||
      graphics.includes("M2") ||
      graphics.includes("M3") ||
      graphics.includes("M4") ||
      graphics.includes("A16") ||
      graphics.includes("A15") ||
      graphics.includes("Adreno 6")
    ) {
      return (
        <ul className="list-disc marker:text-blue-600 text-sm">
          <li>Good for productivity</li>
          <li>Efficient performance</li>
          <li>Great for gaming</li>
        </ul>
      );
    } else {
      return (
        <ul className="list-disc marker:text-blue-600 text-sm">
          <li>Budget friendly</li>
          <li>Basic gaming</li>
          <li>Ideal for casual gamers</li>
        </ul>
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={smallColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={28}
              height={28}
              className="inline-block"
            >
              <path d="M26.25 26H5.75c-1.79 0-3.25-1.46-3.25-3.25V9.25C2.5 7.46 3.96 6 5.75 6h20.5c1.79 0 3.25 1.46 3.25 3.25v13.5c0 1.79-1.46 3.25-3.25 3.25ZM5.75 7.5C4.79 7.5 4 8.29 4 9.25v13.5c0 .96.79 1.75 1.75 1.75h20.5c.96 0 1.75-.79 1.75-1.75V9.25c0-.96-.79-1.75-1.75-1.75H5.75Z"></path>
              <path d="M17.67 25.75c-.2 0-.4-.08-.55-.24l-4.42-4.75c-.08-.08-.13-.18-.17-.29l-1.84-5.97H8.05l-4.28 4.28c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l4.5-4.5c.14-.14.33-.22.53-.22h3.5c.33 0 .62.21.72.53l1.95 6.34 4.3 4.62c.28.3.27.78-.04 1.06-.14.13-.33.2-.51.2Z"></path>
              <path d="M25.25 15h-4.5c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75Zm-3.75-1.5h3v-3h-3v3Z"></path>
            </svg>
          </div>
          <span className={`whitespace-nowrap mt-2 font-semibold text-xs ${smallLabelColor}`}>Low-End</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={mediumColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={36}
              height={36}
              className="inline-block"
            >
              <path d="M26.25 26H5.75c-1.79 0-3.25-1.46-3.25-3.25V9.25C2.5 7.46 3.96 6 5.75 6h20.5c1.79 0 3.25 1.46 3.25 3.25v13.5c0 1.79-1.46 3.25-3.25 3.25ZM5.75 7.5C4.79 7.5 4 8.29 4 9.25v13.5c0 .96.79 1.75 1.75 1.75h20.5c.96 0 1.75-.79 1.75-1.75V9.25c0-.96-.79-1.75-1.75-1.75H5.75Z"></path>
              <path d="m25.54 24.48-8.65-9.12c-.59-.63-1.57-.72-2.28-.22l-2.27 1.6-2.69-3.55c-.33-.43-.85-.69-1.39-.69h-.29c-.51 0-1 .23-1.33.62l-3.95 4.65c-.27.32-.23.79.09 1.06s.79.23 1.06-.09l3.95-4.65c.05-.06.12-.09.19-.09h.29c.08 0 .15.04.2.1l8.62 11.35c.15.19.37.3.6.3.16 0 .32-.05.45-.15.33-.25.39-.72.14-1.05l-5.02-6.61 2.23-1.58c.1-.07.24-.06.33.03l8.65 9.12c.15.16.35.23.54.23.19 0 .37-.07.52-.21.3-.29.31-.76.03-1.06Z"></path>
              <path d="M23.75 15h-1.5C21.01 15 20 13.99 20 12.75v-1.5C20 10.01 21.01 9 22.25 9h1.5C24.99 9 26 10.01 26 11.25v1.5c0 1.24-1.01 2.25-2.25 2.25Zm-1.5-4.5c-.41 0-.75.34-.75.75v1.5c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-1.5c0-.41-.34-.75-.75-.75h-1.5Z"></path>
            </svg>
          </div>
          <span className={`whitespace-nowrap mt-2 font-semibold text-xs ${mediumLabelColor}`}>Mid-Range</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <svg
              fill={largeColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={44}
              height={44}
              className="inline-block"
            >
              <path d="M26.25 26H5.75c-1.79 0-3.25-1.46-3.25-3.25V9.25C2.5 7.46 3.96 6 5.75 6h20.5c1.79 0 3.25 1.46 3.25 3.25v13.5c0 1.79-1.46 3.25-3.25 3.25ZM5.75 7.5C4.79 7.5 4 8.29 4 9.25v13.5c0 .96.79 1.75 1.75 1.75h20.5c.96 0 1.75-.79 1.75-1.75V9.25c0-.96-.79-1.75-1.75-1.75H5.75Z"></path>
              <path d="m26.56 24.5-8.99-9.97c-.66-.73-1.76-.8-2.5-.16l-2.39 2.04-3.28-4.26c-.21-.28-.54-.45-.89-.46-.34-.01-.69.13-.93.39L2.7 17.44c-.28.31-.26.78.05 1.06s.78.26 1.06-.05l4.63-5.09 9.3 12.1c.15.19.37.29.6.29.16 0 .32-.05.46-.16.33-.25.39-.72.14-1.05L13.6 17.6l2.45-2.09c.12-.1.3-.09.41.03l8.99 9.97c.15.16.35.25.56.25.18 0 .36-.06.5-.19.31-.28.33-.75.05-1.06Z"></path>
              <path d="M23.5 14c-1.38 0-2.5-1.12-2.5-2.5S22.12 9 23.5 9s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5Zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"></path>
              <path d="M3.25 19.33c-.31 0-.59-.19-.7-.49-.14-.39.06-.82.45-.96l4.74-1.73c.06-.02.13-.04.19-.04l3.81-.34c.42-.03.78.27.81.68.04.41-.27.78-.68.81l-3.71.33-4.65 1.7c-.08.03-.17.05-.26.05Z"></path>
            </svg>
          </div>
          <span className={`whitespace-nowrap mt-2 font-semibold text-xs ${largeLabelColor}`}>High-End</span>
        </div>
      </div>
      <div className="m-4">
        <Description />
      </div>
    </div>
  );
};
